import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || '',
  fullName: localStorage.getItem("fullName") || '',
  email: localStorage.getItem("email") || ''
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setfullName: (state, action) => {
        state.fullName = action.payload
    },
    setEmail: (state, action) => {
        state.email = action.payload
    }
  },
});

export const { setToken, setEmail, setfullName } = tokenSlice.actions

export default tokenSlice.reducer