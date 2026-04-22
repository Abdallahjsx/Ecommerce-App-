"use client";
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

export default function QuantityCounter({ 
  max = 1, 
  value, 
  onChange 
}: { 
  max?: number; 
  value?: number; 
  onChange?: (val: number) => void 
}) {
  const theme = useTheme();
  const [internalQuantity, setInternalQuantity] = useState(1);
  
  const quantity = value !== undefined ? value : internalQuantity;
  const setQuantity = (val: number | ((prev: number) => number)) => {
    const nextVal = typeof val === "function" ? val(quantity) : val;
    if (onChange) {
      onChange(nextVal);
    } else {
      setInternalQuantity(nextVal);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Box
      sx={{
        width: { xs: "70px", sm: "91px" },
        height: { xs: "32px", sm: "39px" },
        borderRadius: "50px",
        padding: "1px",
        background: theme.palette.gradients.primary,
        display: "flex",
        mt: 1.3,
      }}
    >
      <Box
        sx={{
          flex: 1,
          borderRadius: "50px",
          background: theme.tokens.backgroundColors.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 1, sm: 1.5 },
        }}
      >
        {/* Plus */}
        <IconButton
          onClick={handleIncrement}
          disabled={quantity >= max}
          sx={{
            p: 0,
            opacity: quantity >= max ? 0.3 : 1
          }}
        >
          <Box
            component="img"
            src="/assets/icons/plus-counter-icon.svg"
            sx={{
                width: { xs: "8px", sm: "10px" },
                height: { xs: "7px", sm: "8.8px" },
            }}
          />
        </IconButton>

        {/* Number */}
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: { xs: "16px", sm: "20px" },
            lineHeight: { xs: "16px", sm: "20px" },
            letterSpacing: "0.1px",
            color: "#404040",
          }}
        >
          {quantity}
        </Typography>

        {/* Minus */}
        <IconButton
          onClick={handleDecrement}
          disabled={quantity === 1}  
          sx={{
            p: 0,
          }}
        >
          <Box
            component="img"
            src="/assets/icons/minus-counter-icon.svg"
            sx={{
              width: { xs: "6px", sm: "8px" },
              height: { xs: "16px", sm: "20px" },
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}