"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authState = {
  token: string | null;
};
const initialState: authState = {
  token: null,
};
const authAlluvoSlice = createSlice({
  name: "authAlluvo",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export default authAlluvoSlice.reducer;
export const { setToken, clearToken } = authAlluvoSlice.actions;
