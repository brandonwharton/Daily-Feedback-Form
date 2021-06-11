import React from 'react';
import axios from 'axios';
import './App.css';
// component imports
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';
import UnderstandingFeedback from '../UnderstandingFeedback/UnderstandingFeedback';
import SupportedFeedback from '../SupportedFeedback/SupportedFeedback';
import CommentsFeedback from '../CommentsFeedback/CommentsFeedback';
import ReviewPage from '../ReviewPage/ReviewPage';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelingFeedback />
      <UnderstandingFeedback />
      <SupportedFeedback />
      <CommentsFeedback />
      <ReviewPage />
      <SuccessPage />
    </div>
  );
}

export default App;
