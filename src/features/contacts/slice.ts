import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactsState } from '@/features/contacts/types';
import { getContacts, editContact } from '@/features/contacts/actions';
import { Contact } from '@/types';

const initialState: ContactsState = {
  list: [],
  isLoading: false,
  error: undefined,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [getContacts.pending.type]: (state: ContactsState) => {
      state.isLoading = true;
      state.error = undefined;
      return state;
    },
    [getContacts.fulfilled.type]: (state: ContactsState, action: PayloadAction<Array<Contact>>) => {
      state.isLoading = false;
      state.list = action.payload;
      return state;
    },
    [getContacts.rejected.type]: (state: ContactsState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      return state;
    },
    [editContact.pending.type]: (state: ContactsState) => {
      state.isLoading = true;
      state.error = undefined;
      return state;
    },
    [editContact.fulfilled.type]: (state: ContactsState, action: PayloadAction<Contact>) => {
      state.isLoading = false;
      const { id } = action.payload;
      if (id) {
        state.list = state.list.map((item) =>
          item.id === id ? action.payload : item
        );
      }
      return state;
    },
    [editContact.rejected.type]: (state: ContactsState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      return state;
    },
  },
});

export const contactsActions = slice.actions;
export const contactsReducer = slice.reducer;
