"use client";
import { Box, Container, width } from "@mui/system";
import React, { useState } from "react";
import { useTheme, Typography } from "@mui/material";
import Logo from "../../../../public/assets/images/logo-for-forms.png";
import Shadow from "../../../../public/assets/images/shadow-ellipse-for-forms.png";
import PickRole from "./components/step1";
import LoginForm from "./components/step2";
export default function Login() {
  const t = useTheme();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "42px",
        width: ["100%", "100%", "75%"],
        margin: "auto",
      }}
    >
      {step === 1 ? (
        <PickRole
          setStep={() => {
            setStep(step + 1);
          }}
        />
      ) : (
        <LoginForm />
      )}
    </Box>
  );
}
