import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export default function PriceBox({
  price = 1000,
  label = "From",
}: {
  price?: number;
  label?: string;
}) {
  const theme = useTheme();
  return (
    <Box position={"relative"}>
      <Typography
        position={"absolute"}
        top={"-8px"}
        p={"2px"}
        bgcolor={theme.tokens.backgroundColors.main}
        left={"10px"}
        variant="captionLarge"
        fontWeight={400}
        fontSize={"12px"}
        color={theme.tokens.inputsColors.inactiveText}
      >
        {label}
      </Typography>
      <Box
        border={"1px solid " + theme.tokens.separatingColors.separator}
        borderRadius={"8px"}
        padding={"16px 10px 16px 16px"}
        display={"flex"}
        gap={"24px"}
        bgcolor={"transparent"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"fit-content"}
      >
        <Typography variant="h6" color={theme.tokens.mainColors.secondary}>
          {" "}
          {price}
        </Typography>
        <Typography
          variant="captionLarge"
          fontWeight={500}
          fontSize={"14px"}
          color={"black"}
        >
          EGP
        </Typography>
      </Box>
    </Box>
  );
}
