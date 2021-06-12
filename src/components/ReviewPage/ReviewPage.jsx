import axios from "axios";
// hooks
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';



function ReviewPage () {
    // useHistory to navigate to other routes
    const history = useHistory();
    // get data from feedbackData reducer in redux store
    const feedbackData = useSelector(store => store.feedbackData)

    const handleSubmit = (event) => {
        console.log('Clicked');
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
    console.log(feedbackData);
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
        </div>
    )
}

export default ReviewPage;