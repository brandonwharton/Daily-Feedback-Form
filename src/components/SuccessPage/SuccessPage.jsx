// material-UI components
import Button from '@material-ui/core/Button';

function SuccessPage () {

    // click handler for the New Feedback button
    const startNewFeedback = (event) => {
        // keep page from refreshing on click
        event.preventDefault();
        console.log('clicked!');
    }


    return (
        <div>
            <h2>Your Feedback has been Submitted!</h2>
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