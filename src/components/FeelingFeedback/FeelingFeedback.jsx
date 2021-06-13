// hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';



function FeelingFeedback () {
    // set up dispatch to reducers
    const dispatch = useDispatch();
    // useHistory to navigate to other routes
    const history = useHistory();
    // local states
    const [feeling, setFeeling] = useState('');
    const [alert, setAlert] = useState(false);
    // bring in feedbackData reducer to display previous feedback selection if applicable
    const feedbackData = useSelector(store => store.feedbackData);

    
    const handleChange = (event) => {
        // update local state with value in TextField
        setFeeling(event.target.value);
    }
    
    // bring in inputValidation module for ensuring rating data meets necessary parameters
    const inputValidation = require('../../modules/inputValidation.jsx');

    // once feeling data has been validated, dispatch to reducer and navigate to next page
    const feelingToReducer = (rating) => {
        // if input wasn't valid adjust local alert state and do not dispatch or navigate
        if (!rating) {
            // set alert state to true to conditionally render an alert message
            setAlert(true);
            return;
        }
        // send collected form data to feedbackData reducer
        dispatch({
            type: 'ADD_FEELING',
            payload: rating
        })
        // navigate to UnderstandingFeedback component after dispatch
        history.push('/understanding');
    }


    return (
        <div>
            <h2>How are you feeling after today?</h2>
            <p>1: Not feeling good at all.</p>
            <p>5: Feeling great!</p>

            {/* Conditonally render the user's previous selection if they navigated back to this page */}
            {feedbackData.feeling && <h3>Previous Choice: {feedbackData.feeling}</h3>}
            {/* Conditionally render an alert message if the alert state becomes true */}
            {alert && <Alert severity="error">Entry must be a number between 1 and 5</Alert>}
            
            {/* onSubmit, call feelingToReducer to try and dispatch data and move to next page */}
            {/* Pass it through the inputValidation module function first to ensure input is within necessary paramaters */}
            <FormControl onSubmit={() => feelingToReducer(inputValidation(event, feeling))}>
                <TextField 
                    label="feeling"
                    type="number"
                    id="feeling-field"
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    // onClick, call feelingToReducer to try and dispatch data and move to next page, passing it
                    // through the inputValidation module function first to ensure input is within necessary paramaters
                    onClick={() => feelingToReducer(inputValidation(event, feeling))}
                >
                    Next
                </Button>
            </FormControl>
        </div>
    )
}

export default FeelingFeedback;