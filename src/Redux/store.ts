"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authAlluvoReducer from "./slices/authSlice";
import filtersReducer from "./slices/shopFiltersSlice";
import addToCartDialogReducer from "./slices/addTocartDialogSlice";
import otpVerificationReducer from "./slices/otpVerificationSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const rootReducer = combineReducers({
  authAlluvo: authAlluvoReducer,
  filters: filtersReducer,
  addToCartDialog: addToCartDialogReducer,
  otpVerification: otpVerificationReducer,
});

const persistConfig = {
  key: "root",
  whitelist: ["authAlluvo", "otpVerification"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
