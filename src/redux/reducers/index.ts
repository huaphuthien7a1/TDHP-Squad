import { combineReducers } from 'redux';
import courseReducer from './course.reducer';

const rootReducer = combineReducers({ courseReducer });

export default rootReducer;
