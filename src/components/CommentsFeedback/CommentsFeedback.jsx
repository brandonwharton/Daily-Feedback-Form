// hooks
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
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



function CommentsFeedback () {
    // set up dispatch to reducers
    const dispatch = useDispatch();
    // useHistory to navigate to other routes
    const history = useHistory();
    // state for tracking changes to TextField
    const [comments, setComments] = useState('');
    // bring in feedbackData reducer to display previous feedback selection if applicable
    const feedbackData = useSelector(store => store.feedbackData);
    
    
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
        history.push('/review');
    }

    // on click of the Back button, return to SupportFeedback component page
    const navigateBack = (event) => {
        // keep page from refreshing on click
        event.preventDefault();
        // navigate back
        history.push('/supported');
    }


    return (
        <div>
            <BorderLinearProgress variant="determinate" value={75} />
            <h2>Do you have any additional comments you'd like to share?</h2>
            {/* Conditonally render the user's previous selection if they navigated back to this page */}
            {feedbackData.comments && <h3>Previous Comments: {feedbackData.comments}</h3> }
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
            <BackButton navigateBack={navigateBack}/>
        </div>
    )
}
export default CommentsFeedback;