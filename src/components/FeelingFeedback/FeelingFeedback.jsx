// hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


function FeelingFeedback () {
    // set up dispatch to reducers
    const dispatch = useDispatch();
    // useHistory to navigate to other routes
    const history = useHistory();
    // state for tracking changes to TextField
    const [feeling, setFeeling] = useState('');


    
    const handleChange = (event) => {
        // update local state with value in TextField
        setFeeling(event.target.value);
    }
    // bring in inputValidation module for ensuring rating data meets necessary parameters
    const inputValidation = require('../../modules/inputValidation.js');

    // once feeling data has been validated, dispatch to reducer and navigate to next page
    const feelingToReducer = (rating) => {
        // break out of function if input wasn't validated
        if (!rating) {
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
            {/* onSubmit, call feelingToReducer to try and dispatch data and move to next page */}
            {/* Pass it through the inputValidation module function first to ensure input is within necessary paramaters */}
            <FormControl onSubmit={() => feelingToReducer(inputValidation(event, feeling))} required>
                <TextField 
                    required
                    label="feeling"
                    type="number"
                    id="feeling-field"
                    // rules={{
                    //     required: true,
                    //     maxLength: {
                    //         value: 1,
                    //         message: "Cannot exceed one digit"
                    //     },
                    //     minLength: {
                    //         value: 1,
                    //         message: "Must be exactly one digit"
                    //     }
                    // }}
                    
                    // inputProps={{maxLength: 1}} // only allow a single character in field NOT WORKING
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