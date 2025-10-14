"use client";
import React from "react";
import { useTheme, Button } from "@mui/material";
import { Typography } from "@mui/material";

export default function UserCard() {
  const theme = useTheme();
  return (
    <>
      <Button
        variant="contained"
        sx={{ backgroundColor: theme.tokens.buttonsColors.secondaryDisabled }}
      >
        This Is An Error Button
      </Button>
      <Typography sx={theme.typography.titleLarge}>
        Large - Contact Alosol Capital
      </Typography>
      <Typography sx={theme.typography.titleMedium}>
        Medium - Contact Alosol Capital
      </Typography>
      <Typography sx={theme.typography.titleSmall}>
        Small - Contact Alosol Capital
      </Typography>
      <Typography sx={theme.typography.bodyLarge}>
        Large - Contact Alosol Capital
      </Typography>
      <Typography sx={theme.typography.bodyMedium}>
        Medium - Contact Alosol Capital
      </Typography>
      <Typography sx={theme.typography.captionLarge}>
        Large - Contact Alosol Capital
      </Typography>
      <Typography sx={theme.typography.captionMedium}>
        Medium - Contact Alosol Capital
      </Typography>
    </>
  );
}
