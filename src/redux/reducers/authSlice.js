import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  isGuest: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isGuest = false;
    },
    setGuest: state => {
      state.token = null;
      state.user = null;
      state.isGuest = true;
    },
    logout: state => {
      state.token = null;
      state.user = null;
      state.isGuest = false;
    },
  },
});

export const { setCredentials, setGuest, logout } = authSlice.actions;
export default authSlice.reducer;
