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
    case ActionType.POST_CREATE_COURSE_REQUEST:
      return { ...state, isLoading: true };
    case ActionType.POST_CREATE_COURSE_SUCCESS:
      return { ...state, isLoading: false };
    case ActionType.POST_CREATE_COURSE_FAIL:
      return { ...state, isLoading: false };
    default:
      return { ...state };
  }
};
export default courseReducer;
