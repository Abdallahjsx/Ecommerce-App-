"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AlluvoLogo from "@/components/ui/AlluvoLogo/AlluvoLogo";
import { useTheme } from "@mui/material";
import Shape from "../../../public/assets/images/shape.png";

export default function ForgetPassword() {
  const t = useTheme();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: t.palette.gradients.primary,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component={"img"}
        src={Shape.src}
        sx={{
          display: ["none", "none", "block"],
          width: "100%",
          height: "100%",
          position: "absolute",
          right: 0,
          bottom: 0,
          objectFit: "cover",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* MAIN CARD */}
      <Card
        sx={{
          zIndex: 1,
          p: 7,
          borderRadius: 3,
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#F6F3EC",
          textAlign: "center",
          maxWidth: "90%",
        }}
      >
        <CardContent>
          <AlluvoLogo />

          <Typography
            variant="h6"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "25px",
              textAlign: "center",
              color: "#1B2351",
              marginTop: 4,
              marginBottom: 2,
            }}
          >
            Forget Password
          </Typography>

          <Box sx={{ textAlign: "left", mb: 1 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                color: "#1B2351",
                mb: 1,
              }}
            >
              Email
            </Typography>

            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
              sx={{
                width: "392px",
                maxWidth: "100%",
                height: "47px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0px 4px 4px 0px #00000040",
                "& .MuiOutlinedInput-root": {
                  height: "47px",
                  borderRadius: "8px",
                  padding: "0 16px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ccc",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#1B2351",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                },
                marginBottom: 1,
              }}
            />
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              width: "392px",
              maxWidth: "100%",
              height: "47px",
              background: "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
              borderRadius: "8px",
              boxShadow: "0px 4px 4px 0px #00000040",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "16px",
              "&:hover": {
                background: "linear-gradient(90deg, #162040 0%, #3daec2 100%)",
              },
            }}
          >
            Send Email
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
