export type IRoomState = {
  name: string;
  thumbnail: any;
  memberIDs: string;
  learningPathID: string;
};

export type IRoomReducerState = {
  isLoading: boolean;
  listRoom?: any;
  roomDetail?: any;
};

export type IRoomActionCreator = {
  type: string;
  payload: IRoomReducerState;
};
