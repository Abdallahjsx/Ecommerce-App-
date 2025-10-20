"use client";

import { Box, Typography, useTheme, Modal } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/ui/textInput/TextInput";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ أضفنا السطر ده
import { useFormik } from "formik";

export default function ResetPasswordTextBox({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  const theme = useTheme();
  const [openSuccess, setOpenSuccess] = useState(false); // ✅ مودال النجاح
  const router = useRouter(); // ✅ أضفنا السطر ده
  const myForm = useFormik({
    validateOnMount: true,
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&])(?=(?:.*\d){3,}).{7,}$/,
          "Password must have 7+ chars, 1 uppercase, 1 special char, and 3+ numbers"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // ✅ Validation Schema
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  return (
    <Box
      sx={{
        width: "336px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        marginTop: "25px",
        position: "relative",
      }}
    >
      {/* 🔹 Title */}
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "25px",
          lineHeight: "100%",
          textAlign: "center",
          color: theme.palette.primary.main,
        }}
      >
        Reset password
      </Typography>

      {/* 🔹 Subtitle */}
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: "36px",
          textAlign: "center",
          color: theme.tokens.buttonsColors.label,
          whiteSpace: "nowrap",
        }}
      >
        Please enter your new password
      </Typography>

      {/* 🔹 Formik Form */}

      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "12px",
          position: "relative",
        }}
      >
        {/* 🔸 Password Field */}
        <TextInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your first password"
          myform={myForm}
        />

        {/* 🔸 Confirm Password Field */}
        <TextInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Enter your first password"
          myform={myForm}
        />

        {/* ✅ Save Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              gridColumn: "1 / span 2",
              width: "354px",
              mt: "-20px",
            }}
          >
            <Gradient_Button type="submit" size="large">
              Save
            </Gradient_Button>
          </Box>
        </Box>
      </form>

      {/* ✅ Success Modal */}
      <Modal open={openSuccess} onClose={() => setOpenSuccess(false)}>
        <Box
          sx={{
            width: "479px",
            height: "402px",
            borderRadius: "16px",
            background: "var(--Colors-Background-Main, #FEFEFE)",
            boxShadow: "40px 40px 120px 0px #2E2F3A0A",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "32px 16px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            outline: "none",
          }}
        >
          <Image
            src="/assets/images/success.png"
            alt="Password Changed"
            width={120}
            height={120}
            style={{ marginBottom: "16px" }}
          />

          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "24px",
              textAlign: "center",
              color: "#1B2351",
            }}
          >
            Password changed successfully
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              color: "#4B5563",
              marginBottom: "16px",
            }}
          >
            You can now log in with your new password
          </Typography>

          {/* ✅ زرار Home يودّي لصفحة login */}
          <Box
            sx={{
              gridColumn: "1 / span 2",
              width: "317px",
              mt: "10px",
            }}
          >
            <Gradient_Button
              size="large"
              onClick={() => {
                setOpenSuccess(false);
                router.push("/login"); // ✅ هنا بيروح لصفحة login
              }}
            >
              Home
            </Gradient_Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
