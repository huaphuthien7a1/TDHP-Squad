export const URL_SIGN_IN = `${process.env.REACT_APP_BASE_URL}/auth/login`;
export const URL_SIGN_UP = `${process.env.REACT_APP_BASE_URL}/auth/register`;
export const URL_GET_COURSES = `${process.env.REACT_APP_BASE_URL}/course`;
export const URL_CREATE_COURSE = `${process.env.REACT_APP_BASE_URL}/course`;
export const URL_GET_LEARNING_PATHS = `${process.env.REACT_APP_BASE_URL}/learning-path`;
export const URL_GET_ROOMS = `${process.env.REACT_APP_BASE_URL}/room`;
export const URL_GET_ROOM_BY_ID = (id: string) =>
  `${process.env.REACT_APP_BASE_URL}/room/${id}`;
export const URL_GET_HISTORY_CHAT = (id: string) =>
  `${process.env.REACT_APP_BASE_URL}/chat/${id}`;
export const URL_JOIN_ROOM = (roomId: string) =>
  `${process.env.REACT_APP_BASE_URL}/user/join-room/${roomId}`;
export const URL_GET_SEARCH_COURSES = (name: string) =>
  `${process.env.REACT_APP_BASE_URL}/course/search/${name}`;
export const URL_GET_SEARCH_LEARNING_PATHS = (name: string) =>
  `${process.env.REACT_APP_BASE_URL}/learning-path/search/${name}`;
export const URL_GET_SEARCH_ROOMS = (name: string) =>
  `${process.env.REACT_APP_BASE_URL}/room/search/${name}`;
export const URL_CLEAR_ROOM = (roomId: string) =>
  `${process.env.REACT_APP_BASE_URL}/chat/clear/${roomId}`;
