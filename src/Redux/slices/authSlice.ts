"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type authState = {
    token:string | null;
}
const initialState:authState={
  token:localStorage.getItem("token") ?? null }
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken:(state, action: PayloadAction<string>)=>{
      state.token = action.payload;
      localStorage.setItem("token",state.token)
  },
    clearToken:(state)=>{
        state.token = null;
        localStorage.removeItem("token")
    }

}})

export default authSlice.reducer;
export const {setToken,clearToken}=authSlice.actions
