"use client";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

export default function PasswordReset() {
  const t = useTheme();
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isDisabled = email.trim() === ""; 

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="section"
        sx={{
          paddingTop: 10,
          textAlign: "center",
          width: "392px",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: t.tokens.mainColors.primary,
            fontSize: "35px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            mb: 3,
          }}
        >
          Forget Password
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginTop: 5,
          }}
        >
          <Typography
            component="label"
            htmlFor="email"
            sx={{
              color: t.tokens.mainColors.primary,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "100%",
              mb: 1.5,
            }}
          >
            Email
          </Typography>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            style={{
              width: "392px",
              height: "47px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "15px",
              lineHeight: "100%",
              padding: "16px",
              gap: "10px",
              transition: "0.3s",
            }}
            onFocus={(e) =>
              (e.target.style.border = `1px solid ${t.tokens.mainColors.primary}`)
            }
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          />
          <Box
            sx={{
              mt: 3,
              width: "100%",
              opacity: isDisabled ? 0.6 : 1,
              background: isDisabled
                ? "linear-gradient(90deg, #d3d3d3, #b0b0b0)"
                : "linear-gradient(90deg, #6a11cb, #2575fc)",
              borderRadius: "8px",
              pointerEvents: isDisabled ? "none" : "auto", 
              transition: "0.3s ease",
            }}
          >
            <Gradient_Button
              size="large"
              variant="primary"
              onClick={() => {
                console.log("Email sent to:", email);
              }}
            >
              Send Email
            </Gradient_Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
