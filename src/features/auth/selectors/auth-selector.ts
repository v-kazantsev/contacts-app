import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export const authSelector = createSelector(
  (state: RootState) => state.auth,
  (auth) => auth,
);