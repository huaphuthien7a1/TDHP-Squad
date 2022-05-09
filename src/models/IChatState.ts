export type IListChatState = {
  isLoading: boolean;
  listChat: any;
};

export type IChatActionCreator = {
  type: string;
  payload: IListChatState;
};
