import axios from 'axios';
import { Dispatch } from 'redux';
import * as ActionType from '../constants';
import { URL_GET_HISTORY_CHAT } from '../urlAPI';
export const actFetchChats = (id: string) => (dispatch: Dispatch<any>) => {
  const token = JSON.parse(localStorage.getItem('token') || '');
  dispatch(getChatRequest());
  axios({
    url: URL_GET_HISTORY_CHAT(id),
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  })
    .then((res) => {
      console.log('chatHistory', res.data.chatHistory);
      dispatch(getChatSuccess(res.data.chatHistory));
    })
    .catch((error) => {
      console.log(error.response.data.message);
      dispatch(getChatFail());
    });
};

const getChatRequest = () => {
  return { type: ActionType.GET_CHATS_REQUEST };
};
const getChatSuccess = (listChat: any) => {
  return {
    type: ActionType.GET_CHATS_SUCCESS,
    payload: { isLoading: false, listChat },
  };
};
const getChatFail = () => {
  return { type: ActionType.GET_CHATS_FAIL };
};
