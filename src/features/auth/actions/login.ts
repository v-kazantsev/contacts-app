import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi } from '@/api/auth-api';

export const login = createAsyncThunk('LOGIN/GET', async (_, { rejectWithValue }) => {
  try {
    const { data } = await AuthApi.login();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
