import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setError(_, action) {
      return { error: action.payload };
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // added
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected](state, action) {
      // added
      state.error = 'Unable to register with this data.';
      state.isLoading = false;
    },
    [register.pending](state, action) {
      // added
      state.isLoading = true;
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected](state, action) {
      // added
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error =
        'Unable to log in. Please check email / password and try again.';
    },
    [logIn.pending](state, action) {
      // added
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state) {
      // added
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.error = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const { setError } = authSlice.actions;
export const authReducer = authSlice.reducer;
