import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsApi } from '@/api/contacts-api';

export const deleteContact = createAsyncThunk('CONTACTS/DELETE', async (id: string, { rejectWithValue }) => {
  try {
    const { data } = await ContactsApi.deleteContact(id);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
