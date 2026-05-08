import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OtpVerificationState = {
  email: string;
  verificationErrorState: boolean;
  verificationTimer: number;
  source: "forgotPassword" | "register" | "";
  step: number;
  verifiedUser: boolean;
};

const initialState: OtpVerificationState = {
  email: "",
  verificationErrorState: false,
  verificationTimer: 60,
  source: "",
  step: 1,
  verifiedUser: false,
};

const otpVerificationSlice = createSlice({
  name: "otpVerification",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setVerificationError: (state, action: PayloadAction<boolean>) => {
      state.verificationErrorState = action.payload;
      if (action.payload) {
        state.verificationTimer = 60;
      }
    },
    setTimeLeft: (state, action: PayloadAction<number>) => {
      state.verificationTimer = action.payload;
    },
    setSource: (
      state,
      action: PayloadAction<"forgotPassword" | "register" | "">,
    ) => {
      state.source = action.payload;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setVerifiedUser: (state, action: PayloadAction<boolean>) => {
      state.verifiedUser = action.payload;
    },
  },
});

export const {
  setEmail,
  setVerificationError,
  setTimeLeft,
  setSource,
  setStep,
  setVerifiedUser,
} = otpVerificationSlice.actions;

export default otpVerificationSlice.reducer;
