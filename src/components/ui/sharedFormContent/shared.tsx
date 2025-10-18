'use client'

import React from 'react'
import SocialLoginButton from "@/components/ui/socialLoginButton/SocialLoginButton";
import Google from "../../../../public/assets/images/google-logo.png";
import Tiktok from "../../../../public/assets/images/tiktok-logo.png";
import Divider from "@mui/material/Divider";
import { Box,Typography } from '@mui/material';
import {useTheme} from '@mui/material';
export default function Social() {
  const t =useTheme()
  return (
    <div>  <Box sx={{ width: "100%", position: "relative", margin: "40px 0px" }}>
        <Typography
          variant="lato"
          color="gray"
          fontSize={"14px"}
          sx={{
            position: "absolute",
            left: "41%",
            bottom: "-13px",
            bgcolor: t.tokens.backgroundColors.main,
            padding: "10px",
          }}
        >
          Or With
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{
            borderBottomWidth: "2px",
            borderColor: t.palette.primary.main,
            marginBottom: "5px",
          }}
        />
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
      </Box></div>
  )
}
