import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

export const contactsSelector = createSelector(
  (state: RootState) => state.contacts,
  (contacts) => contacts,
);
