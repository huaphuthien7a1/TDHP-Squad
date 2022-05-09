import { IListChatState } from './IChatState';
import { IListCourseState } from './ICourseState';
import { IListLearningPathState } from './ILearningPathState';
import { IRoomReducerState } from './IRoomState';
type IRootState = {
  courseReducer: IListCourseState;
  learningPathReducer: IListLearningPathState;
  roomReducer: IRoomReducerState;
  chatReducer: IListChatState;
};

export default IRootState;
