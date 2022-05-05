import { createSelector } from 'reselect';

// types
import IRootState from 'models/IRootState';

export const listCartSelector = createSelector(
  (state: IRootState) => state.cart,
  (app) => app.listCart
);

export const isLoadingListCartSelector = createSelector(
  (state: IRootState) => state.cart,
  (app) => app.isLoading
);
