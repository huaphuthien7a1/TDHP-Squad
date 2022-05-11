import * as ActionType from '../constants';
import { IModalReducerState, IModalActionCreator } from 'models/IModalState';
const initialState: IModalReducerState = {
  isOpen: false,
  ComponentContent: null,
};

const modalReducer = (
  state = initialState,
  { type, payload }: IModalActionCreator
) => {
  switch (type) {
    case ActionType.CLOSE_MODAL:
      return { ...state, isOpen: false, ComponentContent: null };
    case ActionType.OPEN_MODAL:
      return { ...state, isOpen: true, ComponentContent: payload };
    default:
      return { ...state };
  }
};
export default modalReducer;
