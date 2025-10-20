"use client";

import React, { useEffect, useState } from "react";
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
import { useRegister } from "@/features/auth/hooks/useRegister";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux/store";
import { setToken } from "@/Redux/slices/authSlice";

export default function Register() {
  // ✅ تعديل النوع ليقبل male أو female أو null
  const router = useRouter();
  const dispacth = useAppDispatch()
  const [selectedGender, setSelectedGender] = useState<"Male" | "Female">(
    "Male"
  );
  const { mutate, error, isPending, isSuccess, data } = useRegister();
  const myForm = useFormik({
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      PhoneNumber: "",
      DateOfBirth: "",
      Password: "",
      confirmPassword: "",
      Gender: "Male",
      ProfileImage: undefined,
    },
    validationSchema: Yup.object().shape({
      FirstName: Yup.string()
        .required("First name is required")
        .min(4, "First name must be lmore than 3 chrs."),
      LastName: Yup.string()
        .required(`Last name is required`)
        .min(4, "username must be lmore than 3 chrs."),
      PhoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^(10|11|12|15)\d{8}$/, "Invalid phone number"),
      Email: Yup.string().required(`Email Is Required`).email(`Invalid Email`),
      Password: Yup.string()
        .required("Password is required")
        .min(7, "Password must be at least 7 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one digit")
        .matches(
          /[@$!%*?&]/,
          "Password must contain at least one special character"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("Password"), undefined], "Passwords must match")
        .required("Confirm password is required"),
      DateOfBirth: Yup.string().required("your birth date is required !"),
      ProfileImage: Yup.mixed().required("Profile picture URL is required"),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });
  useEffect(() => {
    if (isSuccess) {
      router.push(`/verification?email=${myForm.values.Email}`);
    }
  }, [isSuccess]);

  return (
    <div className="register-box">
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
        <input
          id="profile-upload"
          type="file"
          name="ProfileImage"
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.currentTarget.files?.[0];
            myForm.setFieldValue("ProfileImage", file);
          }}
          style={{ display: "none" }}
        />
        {/* صورة البروفايل */}
        <label htmlFor="profile-upload">
          <Box
            sx={{
              width: "122px",
              height: "122px",
              position: "relative",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            {myForm.values.ProfileImage ? (
              <div
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "130px",
                  height: "130px",
                }}
              >
                <Image
                  src={URL.createObjectURL(myForm.values.ProfileImage)}
                  alt="Profile placeholder"
                  width={130}
                  height={130}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : (
              <Image
                src="/assets/icons/profile-icon.svg"
                alt="Profile placeholder"
                fill
                style={{ objectFit: "contain" }}
              />
            )}
          </Box>
        </label>

        {/* الفورم */}

        <Box
          sx={{
            display: ["flex", "flex", "grid"],
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: "20px",
            rowGap: ["0px", "0px", "24px"],
            width: "100%",
            justifyItems: "center",
            flexDirection: "column",
          }}
        >
          {/* الصف الأول */}
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

          {/* الصف الثاني */}
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
              type="text"
              name="PhoneNumber"
              myform={myForm}
              placeholder="+20 Enter your phone number"
            />
          </Box>

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

          {/* الصف الرابع (Birthday + Gender) */}
          <Box sx={{ width: "100%" }}>
            <DateInput label="Birthday" name="DateOfBirth" myform={myForm} />
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
                  setSelectedGender("Male");
                  myForm.setFieldValue("gender", "Male");
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  transform:
                    selectedGender === "Male" ? "scale(1.05)" : "scale(1)",
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
                      selectedGender === "Male"
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
                    color: selectedGender === "Male" ? "#1B2351" : "#6F7073",
                  }}
                >
                  Male
                </Typography>
              </Box>

              {/* Female */}
              <Box
                onClick={() => {
                  setSelectedGender("Female");
                  myForm.setFieldValue("gender", "Female");
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  cursor: "pointer",
                  transform:
                    selectedGender === "Female" ? "scale(1.05)" : "scale(1)",
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
                      selectedGender === "Female"
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
                    color: selectedGender === "Female" ? "#1B2351" : "#6F7073",
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
              width: ["100%", "100%", "70%"],
              mt: "10px",
            }}
          >
            <Gradient_Button
              onClick={() => {
                myForm.submitForm();
              }}
              disabled={!myForm.isValid || isPending}
              type="submit"
              size="large"
            >
              {!isPending ? "Register" : "Registering..."}
            </Gradient_Button>
          </Box>
          <Box
            sx={{
              gridColumn: "1 / span 2",
              width: ["100%", "100%", "70%"],
            }}
          >
            {(data ? !JSON.parse(data).success : false) && (
              <p
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  color: "red",
                  fontSize: 12,
                }}
              >
                {data ? JSON.parse(data).errors[0]?.en : ""}
              </p>
            )}
          </Box>

          {/* قسم Or With + Social Buttons */}
          <Box
            sx={{
              gridColumn: "1 / span 2",
              width: ["100%", "100%", "68%"],
              marginY: "-17px",
              display: "flex",
              justifyContent: "center",
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
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
