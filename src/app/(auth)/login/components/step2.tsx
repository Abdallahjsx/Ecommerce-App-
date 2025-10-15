"use client";
import React from "react";
import { Button, Box } from "@mui/material";
import TextInput from "@/components/ui/textInput/TextInput";
import { useFormik } from "formik";
import { useTheme } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
import Typography from "@mui/material/Typography";
import Social from "@/components/ui/sharedFormContent/shared";
import * as Yup from "yup";
export type LoginFormValues = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const t = useTheme();

  const myForm = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(`Email Is Required`),
      password: Yup.string()
        .required(`Password IS Rrequired`)
        .min(7, `Password must be at least 7 characters long`),
    }),
    onSubmit: (values) => {},
  });
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        paddingBottom: "55px",
      }}
    >
      <form>
        <TextInput
          myform={myForm}
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={myForm.values.email}
          setValue={(e) => {
            myForm.handleChange(e);
          }}
        />
        <TextInput
          myform={myForm}
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={myForm.values.password}
          setValue={(e) => {
            myForm.handleChange(e);
          }}
        />
        <Gradient_Button
          disabled={!myForm.isValid}
          size="large"
          variant="primary"
          onClick={() => {}}
        >
          Login
        </Gradient_Button>
      </form>
      <Typography
        sx={{
          textAlign: "center",
          textDecoration: "underline",
          marginTop: "10px",
        }}
        variant="link"
        color={t.tokens.typographyColors.link}
        fontSize={"11px"}
      >
        Forget Password?
      </Typography>
      <Social />
      <Box sx={{ marginTop: "10px", textAlign: "center" }}>
        <Typography variant="link" color="gray" fontSize={"11px"}>
          Don’t have an account?
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            marginLeft: "3px",
          }}
          variant="link"
          color={t.tokens.typographyColors.link}
          fontSize={"11px"}
        >
          Sign up
        </Typography>
      </Box>
    </div>
  );
}
