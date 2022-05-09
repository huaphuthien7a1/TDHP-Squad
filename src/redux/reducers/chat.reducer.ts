import { IListChatState, IChatActionCreator } from 'models/IChatState';
import * as ActionType from '../constants';

const initialState: IListChatState = {
  isLoading: false,
  listChat: [],
};

const chatReducer = (
  state = initialState,
  { type, payload }: IChatActionCreator
) => {
  switch (type) {
    case ActionType.GET_CHATS_REQUEST:
      return { ...state, isLoading: true, listChat: [] };
    case ActionType.GET_CHATS_SUCCESS:
      return { ...state, isLoading: false, listChat: payload.listChat };
    case ActionType.GET_CHATS_FAIL:
      return { ...state, isLoading: false, listChat: [] };
    default:
      return { ...state };
  }
};
export default chatReducer;
