// hooks
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

// material-UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

function FeelingFeedback () {

    


    return (
        <div>
            <h2>How are you feeling after today?</h2>
            <p>1: Not feeling good at all.</p>
            <p>5: Feeling great!</p>    
            <form>
                <TextField 
                    label="required"
                    type="number"
                    required
                />
            </form>

        </div>


    )
}

export default FeelingFeedback;