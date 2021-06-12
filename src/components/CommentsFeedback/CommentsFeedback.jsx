// hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


function CommentsFeedback () {
    // set up dispatch to reducers
    const dispatch = useDispatch();
    // useHistory to navigate to other routes
    const history = useHistory();
    // state for tracking changes to TextField
    const [comments, setComments] = useState('');
    
    const handleChange = (event) => {
        // update local state with value in TextField
        setComments(event.target.value);
    }
    
    // dispatch comments input data to reducer and navigate to next page
    const commentsToReducer = (event) => {
        // prevent page reload on click
        event.preventDefault();
        // send collected form data to feedbackData reducer
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        })
        // navigate to ReviewPage component after dispatch
        // history.push('/review');
    }

    return (
        <div>
            <h2>Do you have any additional comments you'd like to share?</h2>
            {/* onSubmit, call commentsToReducer to dispatch data and move to next page */}
            <FormControl onSubmit={commentsToReducer}>
                <TextField 
                    label="comments (optional)"
                    type="text"
                    id="comments-field"
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    // onClick, call commentsToReducer to dispatch data and move to next page
                    onClick={commentsToReducer}
                >
                    Next
                </Button>
            </FormControl>

        </div>


    )
}
export default CommentsFeedback;