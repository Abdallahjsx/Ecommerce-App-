import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const store=configureStore({
  reducer:{
    auth:authReducer
  },
  
})
// --- 6️⃣ Typed hooks for TypeScript ---
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
