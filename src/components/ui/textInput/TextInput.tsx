"use client";

import {
  TextField,
  Typography,
  useTheme,
  SxProps,
  Theme,
} from "@mui/material";
import Image from "next/image";
import eyeIcon from "../../../../public/assets/icons/eye-icon.svg";
import { FormikProps } from "formik";

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
          type={type}
          placeholder={placeholder}
          variant="outlined"
          multiline={multiline}  
          rows={rows}             
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

        {type === "password" && (
          <img
            style={{ position: "absolute", right: "10px", top: "30%" }}
            src={eyeIcon.src}
            alt=""
          />
        )}
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

