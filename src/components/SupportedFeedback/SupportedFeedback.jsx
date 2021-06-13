// hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';
// components
import BackButton from '../BackButton/BackButton';


function SupportedFeedback () {
    // set up dispatch to reducers
    const dispatch = useDispatch();
    // useHistory to navigate to other routes
    const history = useHistory();
    // local states
    const [supported, setSupported] = useState('');
    const [alert, setAlert] = useState(false);
    // bring in feedbackData reducer to display previous feedback selection if applicable
    const feedbackData = useSelector(store => store.feedbackData);
    

    const handleChange = (event) => {
        // update local state with value in TextField
        setSupported(event.target.value);
    }

    // bring in inputValidation module for ensuring rating data meets necessary parameters
    const inputValidation = require('../../modules/inputValidation.jsx');

    // once supported data has been validated, dispatch to reducer and navigate to next page
    const supportedToReducer = (rating) => {
        // if input wasn't valid adjust local alert state and do not dispatch or navigate
        if (!rating) {
            // set alert state to true to conditionally render an alert message
            setAlert(true);
            return;
        }
        // send collected form data to feedbackData reducer
        dispatch({
            type: 'ADD_SUPPORTED',
            payload: rating
        })
        // navigate to SupportedFeedback component after dispatch
        history.push('/comments');
    }

    // on click of the Back button, return to UnderstandingFeedback component page
    const navigateBack = (event) => {
        // keep page from refreshing on click
        event.preventDefault();
        // navigate back
        history.push('/understanding');
    }



    return (
        <div>
            <h2>How well did you feel supported today?</h2>
            <p>1: I felt like I was entirely on my own.</p>
            <p>5: I felt like I always had someone behind me if I needed it!</p>

            {/* Conditonally render the user's previous selection if they navigated back to this page */}
            {feedbackData.support && <h3>Previous Choice: {feedbackData.support}</h3> }
            {/* Conditionally render an alert message if the alert state becomes true */}
            {alert && <Alert severity="error">Entry must be a number between 1 and 5</Alert>}
            
            {/* onSubmit, call supportedToReducer to try and dispatch data and move to next page */}
            {/* Pass it through the inputValidation module function first to ensure input is within necessary paramaters */}
            <FormControl onSubmit={() => supportedToReducer(inputValidation(event, supported))}>
                <TextField 
                    label="supported"
                    type="number"
                    id="supported-field"
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    // onClick, call supportedToReducer to try and dispatch data and move to next page, passing it
                    // through the inputValidation module function first to ensure input is within necessary paramaters
                    onClick={() => supportedToReducer(inputValidation(event, supported))}
                >
                    Next
                </Button>
            </FormControl> 
            <BackButton navigateBack={navigateBack}/>
        </div>
    )
}
export default SupportedFeedback;