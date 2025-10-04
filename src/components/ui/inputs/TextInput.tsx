"use client";

import { TextField, InputAdornment, Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import eyeIcon from "@/icons/eye.svg"; // موجود في src/icons/eye.svg

export interface TextInputProps {
  label: string;
  placeholder?: string;
  error?: string;
}

export default function TextInput({ label, placeholder, error }: TextInputProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: theme.tokens.inputs.width,
        opacity: 1,
      }}
    >
      {/* Label */}
      <Typography
        sx={{
          width: theme.tokens.inputs.label.width,
          height: theme.tokens.inputs.label.height,
          fontFamily: theme.tokens.inputs.label.fontFamily,
          fontSize: theme.tokens.inputs.label.fontSize,
          fontWeight: theme.tokens.inputs.label.fontWeight,
          lineHeight: theme.tokens.inputs.label.lineHeight,
          color: theme.tokens.inputs.label.color,
        }}
      >
        {label}
      </Typography>

      {/* Input with static Eye Icon */}
      <TextField
        placeholder={placeholder}
        error={!!error}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            height: theme.tokens.inputs.height,
            borderRadius: theme.tokens.inputs.borderRadius,
            backgroundColor: theme.tokens.inputsColors.background,
            boxShadow: theme.tokens.inputs.boxShadow,
            "& fieldset": {
              borderColor: theme.tokens.inputsColors.border,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
              boxShadow: "0px 4px 8px rgba(27,35,81,0.4)",
            },
          },
          "& input": {
            padding: theme.tokens.inputs.padding,
            paddingRight: `${theme.tokens.icons.eye.width + 20}px`, // ديناميكي حسب حجم الأيقونة
            fontSize: theme.tokens.inputs.fontSize,
            color: theme.tokens.typographyColors.body,
          },
          "& input::placeholder": {
            color: theme.tokens.inputsColors.placeholder,
            opacity: 1,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Image
                src={eyeIcon}
                alt="eye icon"
                width={theme.tokens.icons.eye.width}
                height={theme.tokens.icons.eye.height}
              />
            </InputAdornment>
          ),
        }}
      />

      {/* Error Message */}
      {error && (
        <Box
          sx={{
            width: theme.tokens.inputs.error.width,
            height: theme.tokens.inputs.error.height,
            fontFamily: theme.tokens.inputs.error.fontFamily,
            fontWeight: theme.tokens.inputs.error.fontWeight,
            fontSize: theme.tokens.inputs.error.fontSize,
            lineHeight: theme.tokens.inputs.error.lineHeight,
            color: theme.tokens.mainColors.white,
            background: theme.tokens.typographyColors.danger,
            borderRadius: theme.tokens.inputs.error.borderRadius,
            padding: "0 8px",
            marginTop: "4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {error}
        </Box>
      )}
    </Box>
  );
}


