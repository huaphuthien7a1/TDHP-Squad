import { combineReducers } from 'redux';
import courseReducer from './course.reducer';
import learningPathReducer from './learningPath.reducer';

const rootReducer = combineReducers({ courseReducer, learningPathReducer });

export default rootReducer;
