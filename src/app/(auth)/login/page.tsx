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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "42px",
        width: ["100%", "100%", "75%"],
      }}
    >
      <div>
        <Box
          sx={{
            marginTop: ["100px", "100px", "50px"],
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Box
            component={"img"}
            src={Logo.src}
            sx={{
              width: ["43px", "117px", "117px"],
              height: ["45px", "122px", "122px"],
              alignItems: "align-start",
              marginBottom: ["8px", "8px", "0px"],
            }}
          ></Box>
          <Typography
            variant="titleSpecial"
            sx={{ fontSize: ["32px", "64px", "64px"], alignSelf: "flex-end" }}
          >
            Alluvo
          </Typography>
        </Box>
        <Box
          component={"img"}
          src={Shadow.src}
          sx={{
            width: ["178px", "178px", "380px"],
            height: "35px",
          }}
        ></Box>
      </div>
      {step === 1 ? (
        <PickRole
          setStep={() => {
            setStep(step + 1);
          }}
        />
      ) : (
        <LoginForm />
      )}
    </Container>
  );
}
