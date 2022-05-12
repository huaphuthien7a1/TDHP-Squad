import axios from "axios";
import { Dispatch } from "redux";
import * as ActionType from "../constants";
import {
  URL_GET_ROOMS,
  URL_GET_ROOM_BY_ID,
  URL_GET_SEARCH_ROOMS,
} from "../urlAPI";
export const actFetchRooms = () => (dispatch: Dispatch<any>) => {
  dispatch(getRoomsRequest());
  axios({
    url: URL_GET_ROOMS,
    method: "GET",
  })
    .then((res) => {
      console.log(res.data);
      dispatch(getRoomsSuccess(res.data.data.learingPaths));
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch(getRoomsFail());
    });
};
export const actFetchSearchRooms =
  (searchValue: string) => (dispatch: Dispatch<any>) => {
    dispatch(getRoomsRequest());
    axios({
      url: URL_GET_SEARCH_ROOMS(searchValue),
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch(getRoomsSuccess(res.data.data));
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch(getRoomsFail());
      });
  };

export const actGetRoomById = (id: string) => (dispatch: Dispatch<any>) => {
  dispatch(getRoomsRequest());
  axios({
    url: URL_GET_ROOM_BY_ID(id),
    method: "GET",
  })
    .then((res) => {
      console.log(res.data);
      dispatch(getRoomByIdSuccess(res.data.data));
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch(getRoomByIdFail());
    });
};

const getRoomsRequest = () => {
  return { type: ActionType.GET_ROOMS_REQUEST };
};
const getRoomsSuccess = (listRoom: any) => {
  return {
    type: ActionType.GET_ROOMS_SUCCESS,
    payload: { isLoading: false, listRoom },
  };
};
const getRoomByIdSuccess = (roomDetail: any) => {
  return {
    type: ActionType.GET_ROOM_BY_ID_SUCCESS,
    payload: { isLoading: false, roomDetail },
  };
};
const getRoomsFail = () => {
  return { type: ActionType.GET_ROOMS_FAIL };
};
const getRoomByIdFail = () => {
  return { type: ActionType.GET_ROOM_BY_ID_FAIL };
};
