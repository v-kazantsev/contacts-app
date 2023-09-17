import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '@/features/auth/types';
import { login } from '@/features/auth/actions/login';

const initialState: AuthState = {
  token: null,
  isLoading: false,
  error: undefined
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout() {
      return initialState;
    }
  },
  extraReducers: {
    [login.pending.type]: (state: AuthState) => {
      state.isLoading = true;
      state.error = undefined;
      return state;
    },
    [login.fulfilled.type]: (state: AuthState, action: PayloadAction<{token: string}>) => {
      state.isLoading = false;
      const { token } = action.payload;
      if (token) state.token = token;
      return state;
    },
    [login.rejected.type]: (state: AuthState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      return state;
    },
  },
});

export const authActions = slice.actions;
export const authReducer = slice.reducer;
