import axios from "axios";
import { Dispatch } from "redux";
import * as ActionType from "../constants";
import {
  URL_GET_LEARNING_PATHS,
  URL_GET_SEARCH_LEARNING_PATHS,
} from "../urlAPI";
export const actFetchLearningPaths = () => (dispatch: Dispatch<any>) => {
  dispatch(getLearningPathsRequest());
  axios({
    url: URL_GET_LEARNING_PATHS,
    method: "GET",
  })
    .then((res) => {
      console.log(res.data.data.learingPaths);
      dispatch(getLearningPathsSuccess(res.data.data.learingPaths));
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch(getLearningPathsFail());
    });
};
export const actFetchSearchLearningPaths =
  (searchValue: string) => (dispatch: Dispatch<any>) => {
    dispatch(getLearningPathsRequest());
    axios({
      url: URL_GET_SEARCH_LEARNING_PATHS(searchValue),
      method: "GET",
    })
      .then((res) => {
        console.log(res.data.data);
        dispatch(getLearningPathsSuccess(res.data.data));
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch(getLearningPathsFail());
      });
  };

const getLearningPathsRequest = () => {
  return { type: ActionType.GET_LEARNING_PATHS_REQUEST };
};
const getLearningPathsSuccess = (listLearningPath: any) => {
  return {
    type: ActionType.GET_LEARNING_PATHS_SUCCESS,
    payload: { isLoading: false, listLearningPath },
  };
};
const getLearningPathsFail = () => {
  return { type: ActionType.GET_LEARNING_PATHS_FAIL };
};
