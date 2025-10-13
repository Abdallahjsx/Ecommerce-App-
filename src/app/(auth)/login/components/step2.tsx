"use client";
import React from "react";
import { Button, Box } from "@mui/material";
import TextInput from "@/components/ui/textInput/TextInput";
import { useFormik } from "formik";
import { useTheme } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
import Typography from "@mui/material/Typography";
import SocialLoginButton from "@/components/ui/socialLoginButton/SocialLoginButton";
import Google from "../../../../../public/assets/images/google-logo.png";
import Tiktok from "../../../../../public/assets/images/tiktok-logo.png";
import Divider from "@mui/material/Divider";
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
          onClick={()=>{
          
          }}
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
      <Box sx={{ width: "100%", position: "relative", margin: "10px 0px" }}>
        <Typography
          variant="lato"
          color="gray"
          fontSize={"14px"}
          sx={{
            position: "absolute",
            left: "41%",
            bottom: "-13px",
            bgcolor: t.tokens.backgroundColors.main,
            padding: "10px",
          }}
        >
          Or With
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{
            borderBottomWidth: "2px",
            borderColor: t.palette.primary.main,
            marginBottom: "5px",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <SocialLoginButton label="Sign in with Google" social={Google} />
        <SocialLoginButton label="Sign in with TikTok" social={Tiktok} />
      </Box>
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
