// hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from "@material-ui/core";
// components
import BackButton from '../BackButton/BackButton';

// Linear progress bar styling
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);



function UnderstandingFeedback () {
    // set up dispatch to reducers
    const dispatch = useDispatch();
    // useHistory to navigate to other routes
    const history = useHistory();
    // local states
    const [understanding, setUnderstanding] = useState('');
    const [alert, setAlert] = useState(false);
    // bring in feedbackData reducer to display previous feedback selection if applicable
    const feedbackData = useSelector(store => store.feedbackData);
    

    const handleChange = (event) => {
        // update local state with value in TextField
        setUnderstanding(event.target.value);
    }
    
    // bring in inputValidation module for ensuring rating data meets necessary parameters
    const inputValidation = require('../../modules/inputValidation.jsx');

    // once understanding data has been validated, dispatch to reducer and navigate to next page
    const understandingToReducer = (rating) => {
        // if input wasn't valid adjust local alert state and do not dispatch or navigate
        if (!rating) {
            // set alert state to true to conditionally render an alert message
            setAlert(true);
            return;
        }
        // send collected form data to feedbackData reducer
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: rating
        })
        // navigate to SupportedFeedback component after dispatch
        history.push('/supported');
    }

    // on click of the Back button, return to FeelingFeedback component page
    const navigateBack = (event) => {
        // keep page from refreshing on click
        event.preventDefault();
        // navigate back
        history.push('/');
    }


    return (
        <div>
            <BorderLinearProgress variant="determinate" value={25} />
            <h2>How well did you understand today's material?</h2>
            <p>1: I'm having a lot of trouble with this.</p>
            <p>5: I could teach somebody this material.</p>

            {/* Conditonally render the user's previous selection if they navigated back to this page */}
            {feedbackData.understanding && <h3>Previous Choice: {feedbackData.understanding}</h3> }
            {/* Conditionally render an alert message if the alert state becomes true */}
            {alert && <Alert severity="error" variant="outlined">Entry must be a number between 1 and 5</Alert>}

            {/* onSubmit, call understandingToReducer to try and dispatch data and move to next page */}
            {/* Pass it through the inputValidation module function first to ensure input is within necessary paramaters */}
            <FormControl onSubmit={() => understandingToReducer(inputValidation(event, understanding))}>
                <TextField 
                    label="understanding"
                    type="number"
                    id="understanding-field"
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    // onClick, call understandingToReducer to try and dispatch data and move to next page, passing it
                    // through the inputValidation module function first to ensure input is within necessary paramaters
                    onClick={() => understandingToReducer(inputValidation(event, understanding))}
                >
                    Next
                </Button>
            </FormControl>
            <BackButton navigateBack={navigateBack}/>
        </div>
    )
}
export default UnderstandingFeedback;