import axios from "axios";
import { Dispatch } from "redux";
import * as ActionType from "../constants";
import {
  URL_GET_COURSES,
  URL_CREATE_COURSE,
  URL_GET_SEARCH_COURSES,
} from "../urlAPI";
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
export const actFetchSearchCourses =
  (searchValue: string) => (dispatch: Dispatch<any>) => {
    dispatch(getCoursesRequest());
    axios({
      url: URL_GET_SEARCH_COURSES(searchValue),
      method: "GET",
    })
      .then((res) => {
        console.log(res.data.data);
        dispatch(getCoursesSuccess(res.data.response));
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch(getCoursesFail());
      });
  };
export const actCreateCourse = (data: any) => {
  const token = JSON.parse(localStorage.getItem("token") || "");
  return axios({
    url: URL_CREATE_COURSE,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
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
