import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactsState } from '@/features/contacts/types';
import { getContacts, editContact, addContact, deleteContact } from '@/features/contacts/actions';
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
    [addContact.pending.type]: (state: ContactsState) => {
      state.isLoading = true;
      state.error = undefined;
      return state;
    },
    [addContact.fulfilled.type]: (state: ContactsState, action: PayloadAction<Contact>) => {
      state.isLoading = false;
      state.list.push(action.payload);
      return state;
    },
    [addContact.rejected.type]: (state: ContactsState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      return state;
    },
    [deleteContact.pending.type]: (state: ContactsState) => {
      state.isLoading = true;
      state.error = undefined;
      return state;
    },
    [deleteContact.fulfilled.type]: (state: ContactsState, action: PayloadAction<void>) => {
      state.isLoading = false;
      const id = (action as PayloadAction & { meta: { arg: string}}).meta.arg;
      if (id) {
        state.list = state.list.filter((item) => item.id !== id);
      }
      return state;
    },
    [deleteContact.rejected.type]: (state: ContactsState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      return state;
    },
  },
});

export const contactsActions = slice.actions;
export const contactsReducer = slice.reducer;
