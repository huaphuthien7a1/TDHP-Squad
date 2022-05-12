import axios from 'axios';
import { Dispatch } from 'redux';
import Swal from 'sweetalert2';
import * as ActionType from '../constants';
import {
  URL_GET_COURSES,
  URL_CREATE_COURSE,
  URL_GET_SEARCH_COURSES,
} from '../urlAPI';
import { actCloseModal } from './modal.action';
export const actFetchCourses = () => (dispatch: Dispatch<any>) => {
  dispatch(getCoursesRequest());
  axios({
    url: URL_GET_COURSES,
    method: 'GET',
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
      method: 'GET',
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
export const actCreateCourse = (data: any) => (dispatch: Dispatch<any>) => {
  dispatch(createCourseRequest());
  const token = JSON.parse(localStorage.getItem('token') || '');
  axios({
    url: URL_CREATE_COURSE,
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  })
    .then((res) => {
      console.log(res.data);
      Swal.fire({
        imageWidth: '400',
        imageHeight: '100',
        backdrop: 'none',
        showCloseButton: true,
        icon: 'success',
        title: res.data.msg || 'Create course success',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      dispatch(createCourseSuccess());
      dispatch(actCloseModal());
      dispatch(actFetchCourses());
    })
    .catch((error) => {
      console.log(error.response.data.message);
      Swal.fire({
        imageWidth: '400',
        imageHeight: '100',
        backdrop: 'none',
        showCloseButton: true,
        icon: 'error',
        title: error.response.data.message || 'Create course fail',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      dispatch(createCourseFail());
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

const createCourseRequest = () => {
  return { type: ActionType.POST_CREATE_COURSE_REQUEST };
};
const createCourseSuccess = () => {
  return { type: ActionType.POST_CREATE_COURSE_SUCCESS };
};
const createCourseFail = () => {
  return { type: ActionType.POST_CREATE_COURSE_FAIL };
};
