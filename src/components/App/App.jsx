import React from 'react';
import axios from 'axios';
import './App.css';
// component imports
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';
import UnderstandingFeedback from '../UnderstandingFeedback/UnderstandingFeedback';


function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <FeelingFeedback />
      <UnderstandingFeedback />
    </div>
  );
}

export default App;
