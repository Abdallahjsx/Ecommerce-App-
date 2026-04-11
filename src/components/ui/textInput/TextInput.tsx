"use client";

import {
  TextField,
  Typography,
  useTheme,
  SxProps,
  Theme,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Image from "next/image";
import eyeIcon from "../../../../public/assets/icons/eye-icon.svg";
import { FormikProps } from "formik";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type Props<T> = {
  myform: FormikProps<T>;
  name: keyof T;
  label?: string;
  type?: string;
  placeholder: string;
  customSx?: SxProps<Theme>;
  hideLabel?: boolean;
  multiline?: boolean;  
  rows?: number;    
};

export default function TextInput<T>({
  label,
  placeholder,
  myform,
  name,
  type = "text",
  customSx,
  hideLabel = false,
  multiline = false,  
  rows,
}: Props<T>) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        opacity: 1,
        marginBottom: 20,
      }}
    >
      {/* Label */}
      {!hideLabel && label && (
        <Typography variant="inputLabel" color="primary">
          {label}
        </Typography>
      )}

      {/* Input */}
      <div style={{ position: "relative", width: "100%" }}>
        <TextField
          name={name as string}
          value={myform.values[name as keyof typeof myform.values] ?? ""}

          onChange={myform.handleChange}
          onBlur={myform.handleBlur}
          type={inputType}
          placeholder={placeholder}
          variant="outlined"
          multiline={multiline}  
          rows={rows}             
          InputProps={
            isPassword
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        sx={{ color: "#1B2351", opacity: 0.7 }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : undefined
          }
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px 0px #00000040",
              "& fieldset": {
                border: "none",
              },
            },
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 1000px #FFFFFF inset",
              WebkitTextFillColor: "#000000",
              transition: "background-color 5000s ease-in-out 0s",
            },
            ...customSx,
          }}
        />
      </div>

      {/* Error Message */}
      {myform.errors[name] && myform.touched[name] && (
        <Typography
          color={theme.tokens.typographyColors.danger}
          variant="inputError"
          sx={{
            padding: "0 8px",
            marginTop: "4px",
          }}
        >
          {typeof myform.errors[name] === "string"
            ? myform.errors[name]
            : JSON.stringify(myform.errors[name])}
        </Typography>
      )}
    </div>
  );
}

