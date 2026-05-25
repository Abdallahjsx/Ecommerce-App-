"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Typography, Grid } from "@mui/material";
import { useFormik, Form } from "formik";
import TextInput from "@/components/ui/textInput/TextInput";
import DateInput from "@/components/ui/dateInput/DateInput";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import Social from "@/components/ui/sharedFormContent/shared";
import Link from "next/link";
import { useRegister } from "@/features/auth/hooks/useRegister";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux/store";
import { userInfoSchema } from "@/features/auth/components/schemas/registrationFormSchema";
import { Dayjs } from "dayjs";
import { setEmail, setSource, setVerificationError } from "@/Redux/slices/otpVerificationSlice";
import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import GenderPicker from "@/components/ui/inputs/gendrPicker";
import ErrorBox from "@/components/ui/special/errorBox";
import UploadProfileImage from "@/components/ui/inputs/uploadProfileImage";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "@/Redux/store";


export default function UserInfo() {
  // ✅ تعديل النوع ليقبل male أو female أو null
  const router = useRouter();
  const dispacth = useAppDispatch();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const step = useAppSelector((state) => state.otpVerification.step);

  const { mutateAsync: register, error, isPending, isSuccess, data, isError, errorMessage } =
    useRegister(callBackOnSuccess);
  const myForm = useFormik({
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
      DateOfBirth: null,
      Password: "",
      confirmPassword: "",
      Gender: "",
      ProfileImage: null,
    },
    validationSchema: userInfoSchema,
    onSubmit: async (values) => {
      await register(values);
    },
  });
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits
    const value = e.target.value.replace(/\D/g, '');
    myForm.setFieldValue("PhoneNumber", value);
  };
  const handleBirthDateChange = (value: Dayjs | null) => {
    myForm.setFieldValue("DateOfBirth", value, true);
    myForm.setFieldTouched("DateOfBirth", true, false);
  };
  function callBackOnSuccess() {
    dispacth(setEmail(myForm.values.Email))
    dispacth(setSource("register"))
    router.push(`/verification`);
  }
  useEffect(() => {
    dispacth(setVerificationError(false));
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "26px",
          opacity: 1,
          padding: ["50px 20px", "50px 20px", "40px"],

        }}
      >
        {/* صورة البروفايل */}

        {/* الفورم */}

        <Grid width={"100%"} container spacing={"22px"} sx={{ flexDirection: "column" }} p={"0px"}>
          <Grid display={"flex"} justifyContent={"center"}>
            <UploadProfileImage value={myForm.values.ProfileImage} onChange={(e) => myForm.setFieldValue("ProfileImage", e.target.files?.[0])} error={myForm.touched.ProfileImage && !!myForm.errors.ProfileImage} helperText={myForm.errors.ProfileImage} />
          </Grid>
          {/* الصف الأول */}
          <Grid display={"flex"} gap={"15px"} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
            <Box sx={{ width: "100%" }}>
              <TextInput
                name="FirstName"
                label="First Name"
                placeholder="Enter your first name"
                myform={myForm}
                type="text"
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <TextInput
                name="LastName"
                type="text"
                myform={myForm}
                label="Last Name"
                placeholder="Enter your last name"
              />
            </Box>
          </Grid>

          {/* الصف الثاني */}
          <Grid display={"flex"} gap={"15px"} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
            <Box sx={{ width: "100%" }}>
              <TextInput
                label="Email"
                myform={myForm}
                type="email"
                name="Email"
                placeholder="Enter your email"
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <TextInput
                label="Phone"
                type="tel"
                name="PhoneNumber"
                myform={myForm}
                placeholder="Enter your phone number"
              />
            </Box>
          </Grid>
          <Grid display={"flex"} gap={"15px"} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
            {/* الصف الثالث */}
            <Box sx={{ width: "100%" }}>
              <TextInput
                label="Password"
                name="Password"
                myform={myForm}
                type="password"
                placeholder="Enter your first password"
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <TextInput
                label="Confirm Password"
                name="confirmPassword"
                myform={myForm}
                type="password"
                placeholder="Enter your first password"
              />
            </Box>
          </Grid>

          {/* الصف الرابع (Birthday + Gender) */}
          <Grid display={"flex"} gap={"15px"} sx={{ width: "100%" }} flexDirection={isMobile ? "column" : "row"} alignItems={"center"} >

            <DateInput name="DateOfBirth" myform={myForm} value={myForm.values.DateOfBirth} onChange={handleBirthDateChange} error={myForm.touched.DateOfBirth && !!myForm.errors.DateOfBirth} helperText={myForm.errors.DateOfBirth} />
            <GenderPicker selectedGender={myForm.values.Gender} setSelectedGender={(val) => { myForm.setFieldValue("Gender", val); }} error={myForm.touched.Gender && !!myForm.errors.Gender} helperText={myForm.errors.Gender} />
          </Grid>




          <Box
            sx={{
              gridColumn: "1 / span 2",
              width: ["100%", "100%", "70%"],
              mt: "5px",
              mx: "auto"
            }}
          >
            <Gradient_Button
              disabled={isPending}
              onClick={() => {
                myForm.submitForm();
              }}
              type="submit"
              size="large"
            >
              {isPending ? <CircularProgress size={30} sx={{ color: "white", p: "5px" }} /> : "Register"}
            </Gradient_Button>
            <Box
              sx={{
                gridColumn: "1 / span 2",
                width: "80%",
                mx: "auto"

              }}
            >
              {isError && (
                <ErrorBox errorMessage={errorMessage && errorMessage !== " " ? errorMessage : "Something went wrong. Please try again later."} />
              )}
            </Box>
            <Box
              sx={{
                gridColumn: "1 / span 2",
                marginY: "17px",
                display: "flex",
                justifyContent: "center",
                mx: "center",
                width: "100%"
              }}
            >
              <Social redirectTo={null} />
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
                <Typography
                  component="a"
                  href="/login"
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
              </Typography>
            </Box>
          </Box>


          {/* قسم Or With + Social Buttons */}

        </Grid>
      </Box>
    </div >
  );
}
