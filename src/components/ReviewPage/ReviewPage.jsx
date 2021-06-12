import { useSelector } from "react-redux";

function ReviewPage () {
    // get data from feedbackData reducer in redux store
    const feedbackData = useSelector(store => store.feedbackData)

    console.log(feedbackData);
    return (
        <div>
            <h2>Review Your Feedback</h2>
            <h3>Feelings: {feedbackData.feeling}</h3>
            <h3>Understanding: {feedbackData.understanding}</h3>
            <h3>Supported: {feedbackData.support}</h3>
            <h3>Comments: {feedbackData.comments}</h3>
        </div>
    )
}

export default ReviewPage;