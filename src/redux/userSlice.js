import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      firstname: null,
      username: null,
      token: null,
    },
    pending: null,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.userInfo.firstname =
        localStorage.getItem('userData').firstname ||
        action.payload.name.firstname;
      state.userInfo.username =
        localStorage.getItem('userData').username || action.payload.username;
      state.userInfo.token = localStorage.getItem('userData').token;
    },
    updateError: (state) => {
      state.error = true;
      state.pending = null;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;

export default userSlice.reducer;
