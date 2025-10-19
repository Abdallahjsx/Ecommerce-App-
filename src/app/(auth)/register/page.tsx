"use client";

import React, { useState } from "react";
import "./register.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useFormik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/ui/textInput/TextInput";
import DateInput from "@/components/ui/dateInput/DateInput";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import Social from "@/components/ui/sharedFormContent/shared";
import Link from "next/link";

export default function Register() {
  // ✅ تعديل النوع ليقبل male أو female أو null
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | null
  >(null);
  const myForm = useFormik({
    validateOnMount: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      gender: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^(10|11|12|15)\d{8}$/, "Invalid phone number")
        .required("Phone number is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[!@#$%^&])(?=(?:.*\d){3,}).{7,}$/,
          "Password must have 7+ chars, 1 uppercase, 1 special char, and 3+ numbers"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
      dateOfBirth: Yup.date().nullable().required("Date of birth is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="register-box">
      <Box
        sx={{
          position: "relative",
          top: "279px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "26px",
          opacity: 1,
        }}
      >
        {/* صورة البروفايل */}
        <Box sx={{ width: "122px", height: "122px", position: "relative" }}>
          <Image
            src="/assets/icons/profile-icon.svg"
            alt="Profile placeholder"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* الفورم */}

        <Form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: "20px",
            rowGap: "24px",
            width: "100%",
            justifyItems: "center",
          }}
        >
          {/* الصف الأول */}
          <Box sx={{ width: "100%" }}>
            <TextInput
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextInput
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
            />
          </Box>

          {/* الصف الثاني */}
          <Box sx={{ width: "100%" }}>
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextInput
              label="Phone"
              name="phone"
              placeholder="+20 Enter your phone number"
            />
          </Box>

          {/* الصف الثالث */}
          <Box sx={{ width: "100%" }}>
            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your first password"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Enter your first password"
            />
          </Box>

          {/* الصف الرابع (Birthday + Gender) */}
          <Box sx={{ width: "100%" }}>
            <DateInput label="Birthday" name="dateOfBirth" myform={myForm} />
          </Box>

          {/* Gender */}
          <Box
            sx={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* Label */}
            <Typography
              sx={{
                width: "76px",
                height: "17px",
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#1B2351",
                textAlign: "left",
                verticalAlign: "middle",
              }}
            >
              Gender
            </Typography>

            {/* Icons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                justifyContent: "flex-end",
              }}
            >
              {/* Male */}
              <Box
                onClick={() => {
                  setSelectedGender("male");
                  myForm.setFieldValue("gender", "male");
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  transform:
                    selectedGender === "male" ? "scale(1.05)" : "scale(1)",
                  transition: "0.2s ease",
                }}
              >
                <Image
                  src="/assets/icons/male-icon.svg"
                  alt="Male Icon"
                  width={27}
                  height={27}
                  style={{
                    objectFit: "contain",
                    filter:
                      selectedGender === "male"
                        ? "drop-shadow(0 0 4px #1B2351)"
                        : "none",
                  }}
                />
                <Typography
                  sx={{
                    width: "27px",
                    height: "19px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "9px",
                    lineHeight: "100%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: selectedGender === "male" ? "#1B2351" : "#6F7073",
                  }}
                >
                  Male
                </Typography>
              </Box>

              {/* Female */}
              <Box
                onClick={() => {
                  setSelectedGender("female");
                  myForm.setFieldValue("gender", "female");
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  transform:
                    selectedGender === "female" ? "scale(1.05)" : "scale(1)",
                  transition: "0.2s ease",
                }}
              >
                <Image
                  src="/assets/icons/female-icon.svg"
                  alt="Female Icon"
                  width={27}
                  height={27}
                  style={{
                    objectFit: "contain",
                    filter:
                      selectedGender === "female"
                        ? "drop-shadow(0 0 4px #1B2351)"
                        : "none",
                  }}
                />
                <Typography
                  sx={{
                    width: "31px",
                    height: "19px",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "9px",
                    lineHeight: "100%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    color: selectedGender === "female" ? "#1B2351" : "#6F7073",
                  }}
                >
                  Female
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* زر Register */}
          <Box
            sx={{
              gridColumn: "1 / span 2",
              width: "354px",
              mt: "10px",
            }}
          >
            <Gradient_Button type="submit" size="large">
              Register
            </Gradient_Button>
          </Box>

          {/* قسم Or With + Social Buttons */}
          <Box
            sx={{
              gridColumn: "1 / span 2",
              width: "354px",
              marginY: "-17px",
            }}
          >
            <Social />
          </Box>

          {/* ✅ النص أسفل Social */}
          <Box
            sx={{
              gridColumn: "1 / span 2",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "25px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "11px",
                lineHeight: "100%",
                color: "#666666",
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              Already have an account?
              <Link href="/login" style={{ textDecoration: "none" }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "11px",
                    lineHeight: "100%",
                    color: "#3E548D",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Form>
      </Box>
    </div>
  );
}
