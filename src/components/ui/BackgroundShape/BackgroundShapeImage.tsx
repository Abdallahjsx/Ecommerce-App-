"use client";

import React from "react";
import Shape from "../../../../public/assets/images/shape.png"
import { Box } from "@mui/material";

export default function BackgroundShapeImage() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <img
        src={Shape.src}
        alt="background shape"
        style={{
          pointerEvents: "none",
          zIndex: 0,
          position: "absolute",
          right: "0px",
          top: "10px",
        }}
      />
    </Box>
  );
}
