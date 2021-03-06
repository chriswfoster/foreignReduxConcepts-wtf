import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import main from '../Main'
import other from '../Other'
import something from '../Something/something.js'
//import reducer specific files here. Or at least the folder path to them if they're named index.js

export default createStore(
    combineReducers({
       
        //reducers here that you imported from above
        something,
        main,
        other
    }),
    applyMiddleware(
        thunk,
        createLogger({
            level: 'debug',
            predicate: (getState, action) => 
            (action.type !== 'SET_TIMERS'), //wtf is this
        }),
    ),
);