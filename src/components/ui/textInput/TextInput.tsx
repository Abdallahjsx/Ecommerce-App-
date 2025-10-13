"use client";

import { TextField, Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import eyeIcon from "../../../../public/assets/icons/eye-icon.svg"; // موجود في src/icons/eye.svg
import { useState } from "react";
import { ChangeEvent } from "react"; // it is a must so that we can pass the whoel event to formik and it can deal with it
import { FormikProps } from "formik";
import { LoginFormValues } from "@/app/(auth)/login/components/step2";

export interface TextInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
  value?: string;
  setValue: (
    value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  myform: FormikProps<LoginFormValues>;
}

export default function TextInput({
  label,
  placeholder,
  myform,

  type,
  value,
  setValue,
}: TextInputProps) {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        opacity: 1,
        marginBottom: 20,
        // margin: 12,
      }}
    >
      {/* Label */}
      <Typography variant="inputLabel" color="primary">
        {label}
      </Typography>

      {/* Input with static Eye Icon */}
      <div style={{ position: "relative", width: "100%" }}>
        <TextField
          onBlur={myform.handleBlur}
          name={type}
          value={myform.values[type as keyof typeof myform.values]}
          onChange={(e) => {
            myform.handleChange(e);
            myform.setFieldTouched(
              type as keyof typeof myform.touched,
              true,
              false
            );
          }}
          type={type}
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
          }}
          placeholder={placeholder}
          variant="outlined"
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
      {myform.errors[type as keyof typeof myform.errors] &&
        myform.touched[type as keyof typeof myform.touched] && (
          <Typography
            color={theme.tokens.typographyColors.danger}
            variant="inputError"
            sx={{
              padding: "0 8px",
              marginTop: "4px",
            }}
          >
            {myform.errors[type as keyof typeof myform.errors]}
          </Typography>
        )}
    </div>
  );
}
