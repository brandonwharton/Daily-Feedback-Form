import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feedbackData = (state = {}, action) => {
    console.log('in feedbackData reducer');
    return state;
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
