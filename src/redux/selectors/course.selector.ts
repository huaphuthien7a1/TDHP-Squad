import { createSelector } from 'reselect';

// types
import IRootState from 'models/IRootState';

export const listCartSelector = createSelector(
  (state: IRootState) => state.course,
  (app) => app.listCourse
);

export const isLoadingListCartSelector = createSelector(
  (state: IRootState) => state.course,
  (app) => app.isLoading
);
