import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authState: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.authState = action.payload;
    },
  },
});

export const setAuthState = authSlice.actions.setAuthState;
export const authReducer = authSlice.reducer;
