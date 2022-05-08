import {
  IListLearningPathState,
  ILearningPathActionCreator,
} from 'models/ILearningPathState';

import * as ActionType from '../constants';

const initialState: IListLearningPathState = {
  isLoading: false,
  listLearningPath: [],
};

const learningPathReducer = (
  state = initialState,
  { type, payload }: ILearningPathActionCreator
) => {
  switch (type) {
    case ActionType.GET_LEARNING_PATHS_REQUEST:
      return { ...state, isLoading: true, listLearningPath: [] };
    case ActionType.GET_LEARNING_PATHS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listLearningPath: payload.listLearningPath,
      };
    case ActionType.GET_LEARNING_PATHS_FAIL:
      return { ...state, isLoading: false, listLearningPath: [] };
    default:
      return { ...state };
  }
};
export default learningPathReducer;
