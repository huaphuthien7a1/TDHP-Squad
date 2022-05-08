import axios from "axios";
import { Dispatch } from "redux";
import * as ActionType from "../constants";
import { URL_GET_COURSES } from "../urlAPI";
export const actFetchCourses = () => (dispatch: Dispatch<any>) => {
  dispatch(getCoursesRequest());
  axios({
    url: URL_GET_COURSES,
    method: "GET",
  })
    .then((res) => {
      console.log(res.data.data);
      dispatch(getCoursesSuccess(res.data.data));
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch(getCoursesFail());
    });
};

const getCoursesRequest = () => {
  return { type: ActionType.GET_COURSES_REQUEST };
};
const getCoursesSuccess = (listCourse: any) => {
  return {
    type: ActionType.GET_COURSES_SUCCESS,
    payload: { isLoading: false, listCourse },
  };
};
const getCoursesFail = () => {
  return { type: ActionType.GET_COURSES_FAIL };
};
