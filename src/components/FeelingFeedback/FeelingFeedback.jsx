// hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'


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
        event.preventDefault();
        console.log('Clicked');
    }

    console.log(feeling);
    return (
        <div>
            <h2>How are you feeling after today?</h2>
            <p>1: Not feeling good at all.</p>
            <p>5: Feeling great!</p>    
            <form onSubmit={feelingToReducer}>
                <TextField 
                    label="required"
                    type="number"
                    // inputProps={{maxLength: 1}} // only allow a single character in field NOT WORKING
                    required
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    onClick={feelingToReducer}
                >
                    Next
                </Button>
            </form>

        </div>


    )
}

export default FeelingFeedback;