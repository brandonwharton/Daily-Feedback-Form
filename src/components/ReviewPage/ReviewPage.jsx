import axios from "axios";
// hooks
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
// components
import BackButton from '../BackButton/BackButton';



function ReviewPage () {
    // useHistory to navigate to other routes
    const history = useHistory();
    // get data from feedbackData reducer in redux store
    const feedbackData = useSelector(store => store.feedbackData)


    // click listener for submit button, POSTs data to DB and navigates to /success route
    const handleSubmit = (event) => {
        // keep page from refreshing on click
        event.preventDefault();
        // make POST request to server with data from feedbackData reducer
        axios.post('/feedback', feedbackData)
            .then(response => {
                console.log('Sent to DB', feedbackData);
                history.push('/success')
            })
            .catch(err => {
                alert('Problem submitting review, try again');
                console.log(err);
            });

    }

    // on click of the Back button, return to FeelingFeedback component page
    const navigateBack = (event) => {
        // keep page from refreshing on click
        event.preventDefault();
        // navigate back
        history.push('/comments');
    }

    return (
        <div>
            <h2>Review Your Feedback</h2>
            <h3>Feelings: {feedbackData.feeling}</h3>
            <h3>Understanding: {feedbackData.understanding}</h3>
            <h3>Supported: {feedbackData.support}</h3>
            <h3>Comments: {feedbackData.comments}</h3>
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Submit
            </Button>
            <BackButton navigateBack={navigateBack}/>
        </div>
    )
}

export default ReviewPage;