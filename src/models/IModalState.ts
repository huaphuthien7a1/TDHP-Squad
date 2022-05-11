export type IModalReducerState = {
  isOpen: boolean;
  ComponentContent: React.ReactNode;
};

export type IModalActionCreator = {
  type: string;
  payload: IModalReducerState;
};
