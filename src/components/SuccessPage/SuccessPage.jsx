// hooks
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// material-UI components
import Button from '@material-ui/core/Button';



function SuccessPage () {
    // set up dispatch to reducers
    const dispatch = useDispatch();
    // useHistory to navigate to other routes
    const history = useHistory()

    // click handler for the New Feedback button
    const startNewFeedback = (event) => {
        // keep page from refreshing on click
        event.preventDefault();
        // dispatch action to feedbackData reducer to reset state for a new feedback form
        dispatch({
            type: 'RESET_FEEDBACK'
        });
        // navigate back to beginning of feedback form
        history.push('/');
    }


    return (
        <div>
            <h2>Your feedback has been submitted!</h2>
            <Button
                variant="contained"
                color="primary"
                onClick={startNewFeedback}
            >
                Start New Feedback Form
            </Button>
        </div>

    )
}

export default SuccessPage;