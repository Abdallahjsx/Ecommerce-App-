"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "../../../../public/assets/images/Page.png";

export default function AlluvoLogo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
      }}
    >

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end", 
          justifyContent: "center",
          marginBottom:2,
        }}
      >
        <Image
          src={Logo}
          alt="Alluvo Logo"
          width={117.41}
          height={122.64}
          style={{ objectFit: "contain" }}
        />

        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            fontSize: 54,
            background: "linear-gradient(115.16deg, #1B2351 0%, #47C0D2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Cinzel Decorative",
            marginBottom: 1,
            lineHeight: "100%",
          }}
        >
          Alluvo
        </Typography>
      </Box>

      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 388 35"
        sx={{
          width: { xs: 280, sm: 280, md: 280 },
          height: "auto",
          mt: -1,
        }}
      >
        <path
          d="M388 17.5C388 27.165 301.143 35 194 35C86.8568 35 0 27.165 0 17.5C0 7.83502 86.8568 0 194 0C301.143 0 388 7.83502 388 17.5Z"
          fill="url(#paint0_radial_532_3835)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_532_3835"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(194 17.5) scale(194 17.5)"
          >
            <stop stopColor="#0C0C0C" stopOpacity="0.26" />
            <stop offset="1" stopColor="#737373" stopOpacity="0" />
          </radialGradient>
        </defs>
      </Box>
    </Box>
  );
}
