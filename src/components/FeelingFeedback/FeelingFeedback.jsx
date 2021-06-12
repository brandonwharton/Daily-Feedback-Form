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
    // state for tracking changes to TextField
    const [feeling, setFeeling] = useState('');
    
    const handleChange = (event) => {
        // update local state with value in TextField
        setFeeling(event.target.value);
    }


    const feelingToReducer = (event) => {
        // keep page from refreshing on click
        event.preventDefault();
        // form validation
        // check for empty input field
        if (feeling === '') {
            alert('Enter a feeling rating between 1 and 5');
            return;
        // check for an input field that's too long
        } else if (feeling.length !== 1) {
            alert('Entry must be between 1 and 5');
            return;
        // check for characters that aren't numbers
        } else if (typeof Number(feeling) !== 'number') {
            alert('Enter a number 1 through 5');
            return;
        } else if (feeling > 5 || feeling < 1) {
            alert('Enter a number 1 through 5');
            return;
        }

        // send collected form data to feedbackData reducer
        console.log('clicked!');
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        })
    }

    console.log(feeling);
    return (
        <div>
            <h2>How are you feeling after today?</h2>
            <p>1: Not feeling good at all.</p>
            <p>5: Feeling great!</p>
    

            {/* Need to work on this later, was having trouble with form validation */}
            <FormControl onSubmit={feelingToReducer} required>
                <TextField 
                    required
                    label="feeling"
                    defaultValue="required"
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
                    onClick={feelingToReducer}
                >
                    Next
                </Button>
            </FormControl>

        </div>


    )
}

export default FeelingFeedback;