import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsApi } from '@/api/contacts-api';
import { Contact } from '@/types';

export const addContact = createAsyncThunk('CONTACTS/POST', async (contact: Contact, { rejectWithValue }) => {
  try {
    const { data } = await ContactsApi.addContact(contact);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
