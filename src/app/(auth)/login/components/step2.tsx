"use client";
import React, { useEffect } from "react";
import { Button, Box } from "@mui/material";
import TextInput from "@/components/ui/textInput/TextInput";
import { useFormik } from "formik";
import { useTheme } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
import Typography from "@mui/material/Typography";
import Social from "@/components/ui/sharedFormContent/shared";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { useAppDispatch } from "@/Redux/store";
import { setToken } from "@/Redux/slices/authSlice";
import { useRouter } from "next/navigation";

import * as Yup from "yup";
export type LoginFormValues = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const router = useRouter();
  const t = useTheme();
  const { error, isPending, data, mutate, isSuccess } = useLogin();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isSuccess) return;
    dispatch(setToken(data.data.token));
    router.push("/home");
    // console.log(data.data.token);
  }, [isSuccess]);

  const myForm = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(`Email Is Required`).email(`Invalid Email`),
      password: Yup.string()
        .required(`Password Is Rrequired`)
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
          name={"email"}
          placeholder="Enter your email"
        />
        <TextInput
          myform={myForm}
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <Gradient_Button
          disabled={!myForm.isValid || isPending}
          size="large"
          variant="primary"
          onClick={() => {
            mutate(myForm.values);
          }}
        >
          {isPending ? "loging in ..." : "Login"}
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

      {error && (
        <p
          style={{
            color: "red",
            fontSize: 12,
            marginTop: 2,
            textAlign: "center",
          }}
        >
          {error.response?.data?.message.en || "Something went wrong"}
        </p>
      )}

      <Social />
      <Box sx={{ marginTop: "10px", textAlign: "center"}}>
        <Typography variant="link" color="gray" fontSize={"11px"}>
          Don’t have an account?
        </Typography>
        <Typography
          component={"a"}
          href="/register"
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
