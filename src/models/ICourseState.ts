export type ICourseState = {
  name: string;
  description: string;
  views?: number;
  rating?: number;
  thumb: any;
  videos: any;
  pdf: any;
};

export type IListCourseState = {
  isLoading: boolean;
  listCourse: any;
};

export type ICourseActionCreator = {
  type: string;
  payload: IListCourseState;
};
