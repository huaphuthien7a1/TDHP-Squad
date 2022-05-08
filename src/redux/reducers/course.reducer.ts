import { IListCourseState, ICourseActionCreator } from 'models/ICourseState';
import * as ActionType from '../constants';

const initialState: IListCourseState = {
  isLoading: false,
  listCourse: [],
};

const courseReducer = (
  state = initialState,
  { type, payload }: ICourseActionCreator
) => {
  switch (type) {
    case ActionType.GET_COURSES_REQUEST:
      return { ...state, isLoading: true, listCourse: [] };
    case ActionType.GET_COURSES_SUCCESS:
      return { ...state, isLoading: false, listCourse: payload.listCourse };
    case ActionType.GET_COURSES_FAIL:
      return { ...state, isLoading: false, listCourse: [] };
    default:
      return { ...state };
  }
};
export default courseReducer;
