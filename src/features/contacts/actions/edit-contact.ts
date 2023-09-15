import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsApi } from '@/api/contacts-api';
import { Contact } from '@/types';

export const editContact = createAsyncThunk('CONTACTS/PATCH', async (contact: Contact, { rejectWithValue }) => {
  try {
    const { data } = await ContactsApi.editContact(contact);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
