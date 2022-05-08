export const URL_GET_LIST_CART_ITEM = `${process.env.BASE_URL}/cart/get-cart`;
export const URL_GET_LIST_PRODUCT = `${process.env.BASE_URL}/product`;
export const URL_DELETE_PRODUCT = (id: string) =>
  `${process.env.BASE_URL}/product/${id}`;
export const URL_ADD_PRODUCT = `${process.env.BASE_URL}/product`;
export const URL_UPDATE_PRODUCT = (id: string) =>
  `${process.env.BASE_URL}/product/${id}`;
export const URL_SIGN_IN = `${process.env.BASE_URL}/auth/login`;
export const URL_SIGN_UP = `${process.env.BASE_URL}/auth/register`;
export const URL_ADD_ORDER = `${process.env.BASE_URL}/order/add-order`;
export const URL_UPDATE_CART = `${process.env.BASE_URL}/cart/update-cart`;
