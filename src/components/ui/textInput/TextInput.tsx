"use client";

import { TextField, Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import eyeIcon from "../../../../public/assets/icons/eye-icon.svg"; // موجود في src/icons/eye.svg
import { useState } from "react";
import { ChangeEvent } from "react"; // it is a must so that we can pass the whoel event to formik and it can deal with it
import { FormikProps } from "formik";
import { LoginFormValues } from "@/app/(auth)/login/components/step2";
import { registerData } from "@/features/auth/types";

// export interface TextInputProps {
//   label: string;
//   placeholder?: string;
//   type?: string;
//   name: string;
//   error?: string;
//   // value?: string;
//   // setValue: (
//   //   value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   // ) => void;
// }
type Props<T> = {
  myform: FormikProps<T>;
  name: keyof T;
  label: string;
  type: string;
  placeholder: string;
};

export default function TextInput<T>({
  label,
  placeholder,
  myform,
  name,
  type = "text",
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
          name={name as string}
          value={myform.values[name as keyof typeof myform.values]}
          onChange={(e) => {
            myform.handleChange(e);
            myform.setFieldTouched(name as string, true, false);
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
