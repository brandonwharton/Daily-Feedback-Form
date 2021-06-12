import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackData = (state = {}, action) => {
    console.log('in feedbackData reducer');
    // actions
    switch (action.type) {
        // the first four cases are all directly tied to feedback given in different form components
        // ...state is in each of them to keep existing data from other components the same when updating one

        // adjust state using data from FeelingFeedback component
        case 'ADD_FEELING':
            return {
                ...state,
                feeling: action.payload
            };
            break;
        // adjust state using data from UnderstandingFeedback component
        case 'ADD_UNDERSTANDING':
            return {
                ...state,
                understanding: action.payload
            };
            break;
        // adjust state using data from SupportedFeedback component    
        case 'ADD_SUPPORTED':
            return {
                ...state,
                support: action.payload
            };
            break;
        // adjust state using data from CommentsFeedback component   
        case 'ADD_COMMENTS':
            return {
                ...state,
                comments: action.payload
            };
            break;
        // Reset state when starting over from SuccessPage component
        case 'RESET_FEEDBACK':
            return {};
            break;
        // Default in case other reducers are getting actions
        default:
            return state;
            break;

    }
}

const reduxStore = createStore(
    combineReducers({
        feedbackData
    }),
    applyMiddleware(
        logger
    )
);



ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
