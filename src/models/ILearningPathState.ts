export type ILearningPathState = {
  name: string;
  rating: number;
  thumb: any;
};

export type IListLearningPathState = {
  isLoading: boolean;
  listLearningPath: any;
};

export type ILearningPathActionCreator = {
  type: string;
  payload: IListLearningPathState;
};
