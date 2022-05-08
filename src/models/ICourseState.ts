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

export type ICourseActionCreator = {
  type: string;
  payload: IListCourseState;
};
