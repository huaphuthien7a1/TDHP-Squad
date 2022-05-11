import { IListChatState } from './IChatState';
import { IListCourseState } from './ICourseState';
import { IListLearningPathState } from './ILearningPathState';
import { IRoomReducerState } from './IRoomState';
import { IModalReducerState } from './IModalState';

type IRootState = {
  courseReducer: IListCourseState;
  learningPathReducer: IListLearningPathState;
  roomReducer: IRoomReducerState;
  chatReducer: IListChatState;
  modalReducer: IModalReducerState;
};

export default IRootState;
