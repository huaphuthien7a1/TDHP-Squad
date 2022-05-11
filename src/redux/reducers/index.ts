import { combineReducers } from 'redux';
import courseReducer from './course.reducer';
import learningPathReducer from './learningPath.reducer';
import roomReducer from './room.reducer';
import chatReducer from './chat.reducer';
import modalReducer from './modal.reducer';

const rootReducer = combineReducers({
  courseReducer,
  learningPathReducer,
  roomReducer,
  chatReducer,
  modalReducer,
});

export default rootReducer;
