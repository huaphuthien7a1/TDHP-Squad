import { IRoomReducerState, IRoomActionCreator } from 'models/IRoomState';
import * as ActionType from '../constants';

const initialState: IRoomReducerState = {
  isLoading: false,
  listRoom: [],
  roomDetail: null,
};

const courseReducer = (
  state = initialState,
  { type, payload }: IRoomActionCreator
) => {
  switch (type) {
    case ActionType.GET_ROOMS_REQUEST:
      return { ...state, isLoading: true, listRoom: [], roomDetail: null };
    case ActionType.GET_ROOMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listRoom: payload.listRoom,
        roomDetail: null,
      };
    case ActionType.GET_ROOM_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listRoom: [],
        roomDetail: payload.roomDetail,
      };
    case ActionType.GET_ROOMS_FAIL:
      return { ...state, isLoading: false, listRoom: [], roomDetail: null };
    case ActionType.GET_ROOM_BY_ID_FAIL:
      return { ...state, isLoading: false, listRoom: [], roomDetail: null };

    default:
      return { ...state };
  }
};
export default courseReducer;
