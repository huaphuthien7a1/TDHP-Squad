import { IListCourseState } from './ICourseState';
import { IListLearningPathState } from './ILearningPathState';
type IRootState = {
  courseReducer: IListCourseState;
  learningPathReducer: IListLearningPathState;
};

export default IRootState;
