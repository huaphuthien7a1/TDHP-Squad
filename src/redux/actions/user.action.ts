import axios from 'axios';
import { URL_JOIN_ROOM } from '../urlAPI';

export const actJoinRoom = (roomId: string) => {
  const token = JSON.parse(localStorage.getItem('token') || '');
  return axios({
    url: URL_JOIN_ROOM(roomId),
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  });
};
