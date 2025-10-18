"use client";

import { TextField, Typography, useTheme } from "@mui/material";
import eyeIcon from "../../../../public/assets/icons/eye-icon.svg";
import { useState } from "react";
import Image from "next/image";
import { useField } from "formik";

interface TextInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}


export default function TextInput({
  label,
  name,
  placeholder,
  type = "text",
}: TextInputProps) {
  const theme = useTheme();
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: 20 }}>
      {/* Label */}
      <Typography variant="inputLabel" color="primary">
        {label}
      </Typography>

      {/* Input */}
      <div style={{ position: "relative", width: "100%" }}>
        <TextField
          {...field}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px 0px #00000040",
              "& fieldset": { border: "none" },
            },
          }}
        />

        {/* Eye icon */}
        {type === "password" && (
          <Image
            src={eyeIcon}
            alt="toggle password"
            width={20}
            height={20}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>

      {/* Error */}
      {meta.touched && meta.error && (
        <Typography
          color={theme.tokens?.typographyColors?.danger || "red"}
          variant="inputError"
          sx={{ padding: "0 8px", marginTop: "4px" }}
        >
          {meta.error}
        </Typography>
      )}
    </div>
  );
}
