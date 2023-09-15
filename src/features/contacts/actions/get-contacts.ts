import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsApi } from '@/api/contacts-api';

export const getContacts = createAsyncThunk('CONTACTS/GET', async (_, { rejectWithValue }) => {
  try {
    const { data } = await ContactsApi.getContacts();
    return data?.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
