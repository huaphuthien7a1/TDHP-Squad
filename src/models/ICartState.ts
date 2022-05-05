export enum ICartActionTypes {
  FETCH_CART = 'CART/FETCH_CART',
  FETCH_CART_SUCCESS = 'CART/FETCH_CART_SUCCESS',
  FETCH_CART_FAIL = 'CART/FETCH_CART_FAIL',
  FETCH_CART_REQUEST = 'CART/FETCH_CART_REQUEST',
  UPDATE_CART = 'CART/UPDATE_CART',
  CREATE_CART = 'CART/CREATE_CART',
  DELETE_CART = 'CART/DELETE_CART',
}

export type ICartState = {
  name: string;
  des: string;
  price: string;
};

export type IListCartState = {
  isLoading: boolean;
  listCart: any;
};

export type ICartActionCreator = {
  type: string;
  payload: ICartState;
};
