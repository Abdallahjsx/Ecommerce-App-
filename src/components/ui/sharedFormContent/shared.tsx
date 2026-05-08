"use client";

import React from "react";
import SocialLoginButton from "@/components/ui/socialLoginButton/SocialLoginButton";
import Google from "../../../../public/assets/images/google-logo.png";
import Tiktok from "../../../../public/assets/images/tiktok-logo.png";
import Divider from "@mui/material/Divider";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
export default function Social() {
  const t = useTheme();
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          margin: "10px 0px",
        }}
      >
        <Divider
          sx={{
            width: "100%",
            "&::before, &::after": {
              borderColor: t.palette.primary.main,
            },
          }}
        >
          <Typography variant="lato" color="gray" fontSize={"14px"}>
            Or With
          </Typography>
        </Divider>
      </Box>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <SocialLoginButton label="Sign in with Google" social={Google} />
        <SocialLoginButton label="Sign in with TikTok" social={Tiktok} />
      </Box>
    </div>
  );
}
