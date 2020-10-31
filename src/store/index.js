import {createStore, applyMiddleware} from 'redux';
import todoReducer from './reducers/reducerTodo';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(todoReducer, applyMiddleware(thunk, logger))
