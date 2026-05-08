"use client";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import EnterOtpStep from "./components/EnterOtpStep";
import { Suspense } from "react";

export default function Verification() {
  // حالة الخطوة الحالية
  const [step, setStep] = useState(1);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box
        flexGrow={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "80px",
          gap: "42px",
          width: "80%",
          mx: "auto",
        }}
      >
        <EnterOtpStep />
      </Box>
    </Suspense>
  );
}
