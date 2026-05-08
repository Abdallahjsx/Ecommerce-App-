"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
export default function AlluvoLogo() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" py={'30px'}>
      <Image
        src={'/assets/images/mainLogo.svg'}
        alt='logo'
        height={120}
        width={120}
        style={{ maxWidth: "320px", maxHeight: "320px", width: "80%", height: "80%" }}
      />
    </Box>
  );
}
