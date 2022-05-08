import {
  IListCourseState,
  ICourseActionCreator,
  ICourseActionTypes,
} from 'models/ICourseState';
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
      state.isLoading = true;
      state.listCourse = [];
      return { ...state };
    case ActionType.GET_COURSES_SUCCESS:
      state.isLoading = false;
      state.listCourse = payload.listCourse;
      return { ...state };
    case ActionType.GET_COURSES_FAIL:
      state.isLoading = false;
      state.listCourse = [];
      return { ...state };
    default:
      return { ...state };
  }
};
export default courseReducer;
