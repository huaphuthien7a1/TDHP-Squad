export enum ICartActionTypes {
  GET_COURSES_REQUEST = 'GET_COURSES_REQUEST',
  GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS',
  GET_COURSES_FAIL = 'GET_COURSES_FAIL',
}

export type ICourseState = {
  name: string;
  description: string;
  views: number;
  rating: number;
  thumbnail: any;
  videos: any;
};

export type IListCourseState = {
  isLoading: boolean;
  listCourse: any;
};

export type ICartActionCreator = {
  type: string;
  payload: ICourseState;
};
