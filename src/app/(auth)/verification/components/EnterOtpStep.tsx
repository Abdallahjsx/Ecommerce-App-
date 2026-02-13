"use client";
import { Typography, Box, useTheme } from "@mui/material";
import { Suspense } from "react";
// import "./EnterOtpStep.css";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { useSearchParams } from "next/navigation";
import useVerificaion from "@/features/auth/hooks/useVerification";
import { resendOtp } from "@/features/auth/services/auth";
import { display } from "@mui/system";
import PhoneIcon from "@/iconsComponents/phoneIcon";
import QuestionMarkIcon from "@/iconsComponents/QuestionMarkIcon";
import SuccessCard from "@/features/auth/components/SuccessCard";
import { useRouter } from "next/navigation";


export default function Step1({ setStep }: { setStep: () => void }) {
  const router = useRouter();
 
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const { mutate, isPending, isSuccess, isError, data } = useVerificaion();
  const t = useTheme();
  const inputsRef = useRef<HTMLInputElement[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [verificationError, setVerificationError] = useState<boolean>(false);
  const [valid, setVaild] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  // ✅ حالة التايمر
  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formattedTime = `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  async function handleResend() {
    const res = await resendOtp(email);
    setMessage(res.data);
    console.log(email);
    console.log(res.data);
    console.log(res.statusCode);
    if (res.data === "OTP resent successfully.") {
      inputsRef.current.forEach((input) => (input.value = ""));
      setTimeLeft(60);
      inputsRef.current = [];
      setVerificationError(false);
    } else {
      // Alert.alert("Error", res.data);
    }
  }
  function handleVerify() {
    if (verificationError) {
      handleResend();
    } else {
      console.log("here is otp is being sent ");
      const otp = inputsRef.current.map((input) => input?.value || "").join("");
      console.log(otp);
      console.log("here is otp is being sent +++++++++");
      console.log({ email: email.toString(), otp: otp.toString() });
      mutate({ email: email.toString(), otp: otp.toString() });
    }
  }
  //   useEffect(() => {
  //   setValid(inputsRef.current.every((c) => c.length === 1));
  // }, [inputsRef.current]);
 
  useEffect(() => {
    setVerificationError(isError);
  }, [isError]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "20px",
          [t.breakpoints.down("md")]: { marginTop: "10px" },
          [t.breakpoints.down("sm")]: { marginTop: "5px" },
        }}
      >
        {/* ✅ الصورة */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "-20px",
            width: { xs: "180px", sm: "220px", md: "265px" },
            height: { xs: "180px", sm: "220px", md: "265px" },
            mx: "auto",
          }}
        >
          <Image
            src={
              verificationError
                ? "/assets/images/verification-error.png"
                : "/assets/images/verification.png"
            }
            alt="Verification illustration"
            width={265}
            height={265}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* ✅ العنوان */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "36px",
            color: verificationError ? "#EF4444" : t.tokens.mainColors.primary,
            marginTop: verificationError ? "10px" : "0",
            [t.breakpoints.down("md")]: { fontSize: "18px" },
            [t.breakpoints.down("sm")]: { fontSize: "16px" },
          }}
        >
          Verify Your Account
        </Typography>

        {/* ✅ الوصف */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "24px",

            color: verificationError
              ? "#EF4444"
              : t.tokens.typographyColors.subtitle,
            marginTop: "5px",
            [t.breakpoints.down("md")]: {
              fontSize: "11px",
              lineHeight: "20px",
            },
            [t.breakpoints.down("sm")]: {
              fontSize: "10px",
              lineHeight: "18px",
            },
          }}
        >
          We've sent a verification code to your email
        </Typography>

        {/* ✅ خانات OTP + التايمر + النص */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "24px",
            [t.breakpoints.down("md")]: { gap: "20px", marginTop: "20px" },
            [t.breakpoints.down("sm")]: { gap: "12px", marginTop: "16px" },
          }}
        >
          {[0, 1, 2, 3, 4].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "8px",
                border: "1px solid rgba(204, 204, 204, 0.3)",
                backgroundColor: "#FDFDFD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
                [t.breakpoints.down("md")]: { width: "50px", height: "50px" },
                [t.breakpoints.down("sm")]: { width: "40px", height: "40px" },
              }}
            >
              <input
                maxLength={1}
                ref={(el) => {
                  inputsRef.current[index] = el!;
                }}
                onChange={(e) => {
                  handleChange(index, e);

                  const allFilled = inputsRef.current.every(
                    (input) => input && input.value.trim() !== ""
                  );

                  setVaild(allFilled);
                }}
                onKeyDown={(e) => {
                  handleKeyDown(index, e);
                }}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                style={{
                  width: "100%",
                  height: "100%",
                  borderColor: verificationError ? "#EF4444" : "#50546E",
                  borderRadius: "8px",
                  borderWidth: "1px",
                  outline: "none",
                  textAlign: "center",
                  fontSize: "24px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  color: verificationError
                    ? t.tokens.typographyColors.danger
                    : "#1B2351",
                  background: verificationError
                    ? t.tokens.backgroundColors.danger
                    : "transparent",
                }}
              />

              {/* ✅ الخط الرمادي */}
              <Box
                sx={{
                  position: "absolute",
                  width: "12px",
                  height: "1.5px",
                  background: "#AEAEAE",
                  top:
                    focusedIndex === index || inputsRef.current[index]?.value
                      ? "75%"
                      : "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transition: "top 0.25s ease",
                }}
              />
            </Box>
          ))}

          {verificationError ? (
            <div
              style={{ alignItems: "center", marginTop: 16, display: "block" }}
            >
              <p
                style={{
                  fontFamily: "inter",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#EF4444",
                  position: "absolute",
                  bottom: "-35px",
                  left: "25%",
                }}
              >
                Invalid code. Please try again
              </p>
            </div>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* ✅ التايمر */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-35px",
                  left: "4px",
                  width: "58.84px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: t.tokens.mainColors.primary,
                  background: "transparent",
                  [t.breakpoints.down("md")]: { bottom: "-30px" },
                  [t.breakpoints.down("sm")]: {
                    bottom: "-28px",
                    fontSize: "12px",
                  },
                }}
              >
                <Image
                  src="/assets/icons/timer-icon.svg"
                  alt="timer icon"
                  width={20}
                  height={20}
                />
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  {formattedTime}
                </Typography>
              </Box>

              {/* ✅ النص اللي تحت التايمر */}
              <Typography
                sx={{
                  position: "absolute",
                  top: "100px",
                  left: "2px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "20px",
                  color: t.tokens.typographyColors.subtitle,
                  background: "transparent",
                  opacity: 1,
                  whiteSpace: "nowrap",
                  [t.breakpoints.down("md")]: { top: "90px" },
                  [t.breakpoints.down("sm")]: { top: "80px", fontSize: "9px" },
                }}
              >
                This may take up to 1 minute.
              </Typography>
            </Box>
          )}
        </Box>

        {/* ✅ الزرار Verify Code */}
        {/* {verificationError && (
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 22,
            width: "80%",
          }}
        >
          <div style={{ flex: 1, height: 1, backgroundColor: "#EF4444" }} />
          <p
            style={{
              marginLeft: 5,
              marginRight: 5,
              fontFamily: "Inter",
              fontSize: 12,
              fontWeight: "400",
              color: "#6F7073",
              marginBottom: 7,
            }}
          >
            or
          </p>
          <div style={{ flex: 1, height: 1, backgroundColor: "#EF4444" }} />
        </Box>
      )} */}
        <Box
          sx={{
            marginTop: "70px",
            display: "flex",
            justifyContent: "center",
            [t.breakpoints.down("md")]: { marginTop: "50px" },
            [t.breakpoints.down("sm")]: { marginTop: "40px" },
          }}
        >
          <Gradient_Button
            disabled={!valid}
            size="large"
            onClick={() => {
              handleVerify();
            }}
            state={verificationError ? "danger" : "primary"}
          >
            {verificationError ? "Resend" : "Verify Code"}
          </Gradient_Button>
        </Box>
        <Box sx={{ marginTop: "10px", alignContent: "center" }}>{message}</Box>

        {/* ✅ البوكس الجديد (الهيلب) */}
        <Box
          sx={{
            width: "316px",
            height: "80px",
            borderRadius: "12px",
            background: verificationError ? "#FEE2E2" : "#DDEEFD",
            margin: "32px auto 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "12px 16px",
            gap: "10px",
            [t.breakpoints.down("md")]: { width: "280px", height: "70px" },
            [t.breakpoints.down("sm")]: { width: "260px", height: "65px" },
          }}
        >
          <QuestionMarkIcon color={verificationError ? "#EF4444" : "#136EBF"} />

          <Typography
            sx={{
              width: "256px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              lineHeight: "15px",
              color: verificationError ? "#EF4444" : "#136EBF",
              textAlign: "left",
              [t.breakpoints.down("sm")]: {
                fontSize: "9px",
                lineHeight: "13px",
              },
            }}
          >
            If you’re experiencing issues with verification, please check your
            spam folder or reach out to our support team for help.
          </Typography>
        </Box>

        {/* ✅ Contact Support */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "16px",
            cursor: "pointer",
            [t.breakpoints.down("sm")]: { marginTop: "12px" },
          }}
        >
          <PhoneIcon color={verificationError ? "#EF4444" : "#136EBF"} />
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: verificationError ? "#EF4444" : "#136EBF",
              textAlign: "center",
              verticalAlign: "middle",
              [t.breakpoints.down("sm")]: { fontSize: "14px" },
            }}
          >
            Contact Support
          </Typography>
        </Box>
      </Box>
      {isSuccess && <SuccessCard />}
    </Suspense>
  );
}
