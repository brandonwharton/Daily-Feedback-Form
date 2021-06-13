import axios from "axios";
// hooks
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// material-UI components
import Button from '@material-ui/core/Button';
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
            <BorderLinearProgress variant="determinate" value={100}/>
            <div className="feedback-container">
                <div className="feedback-col-1">
                    <div className="back-button">
                        <BackButton className="back-button" navigateBack={navigateBack} />
                    </div>
                </div>
            <div className="feedback-col-2">
            
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
            <div className="feedback-col-3">
                <div className="spacing-div"></div>
            </div>
            </div>
        </div>
    )
}

export default ReviewPage;