"use client";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Step1 from "./components/EnterOtpStep";
import Step2 from "./components/NewPasswordStep";


export default function Verification() {
  // حالة الخطوة الحالية
  const [step, setStep] = useState(1);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "100vh",
        gap: "42px",
        // width: ["100%", "100%", "75%"],
      }}
    >
      {step === 1 && (
        <Step1
          setStep={() => setStep(2)} // من Verify Code إلى New Password
        />
      )}

      {step === 2 && (
        <Step2
          setStep={setStep} // علشان Step2 تقدر تروح Step3 من جوه Formik
        />
      )}

      {step === 3 && (
        <Step2
          setStep={setStep} // علشان زرار Home يرجع Step1
        />
      )}
    </Container>
  );
}
