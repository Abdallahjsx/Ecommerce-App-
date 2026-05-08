"use client";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { Box, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useForgetPasswordEmail } from "@/features/auth/hooks/useForgetPassword";
import ErrorBox from "@/components/ui/special/errorBox";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux/store";
import { setEmail } from "@/Redux/slices/otpVerificationSlice";
import { setSource } from "@/Redux/slices/otpVerificationSlice";

export default function EmailStep() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const t = useTheme();
    const [emailField, setEmailField] = useState("");
    const { mutate: forgetPasswordEmail, errorMessage, isError, isPending } = useForgetPasswordEmail(CallBackOnSuccess);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailField(e.target.value);
    };

    const isDisabled = emailField.trim() === "";
    function CallBackOnSuccess() {
        dispatch(setEmail(emailField));
        dispatch(setSource("forgotPassword"));
        router.push("/verification");
    }

    return (
        <Box
            sx={{
                marginBottom: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginX: "30px",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    mt: "45px",
                    width: ["90%", "90%", "70%"],
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        color: t.tokens.mainColors.primary,
                        fontSize: "25px",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontStyle: "normal",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                        textAlign: "center",
                        mb: 3,
                    }}
                >
                    Forget Password
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        marginTop: 5,
                        width: "100%"
                    }}
                >
                    <Typography
                        component="label"
                        htmlFor="email"
                        sx={{
                            color: t.tokens.mainColors.primary,
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "20px",
                            lineHeight: "100%",
                            mb: 1.5,
                        }}
                    >
                        Email
                    </Typography>

                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={emailField}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            height: "47px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            outline: "none",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "15px",
                            lineHeight: "100%",
                            padding: "16px",
                            gap: "10px",
                            transition: "0.3s",
                        }}
                        onFocus={(e) =>
                            (e.target.style.border = `1px solid ${t.tokens.mainColors.primary}`)
                        }
                        onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                    />
                    {isError && (
                        <ErrorBox errorMessage={errorMessage && errorMessage !== " " ? errorMessage : "Something went wrong. Please try again later."} />
                    )}
                    <Box
                        sx={{
                            mt: 3,
                            width: "100%",
                            opacity: isDisabled ? 0.6 : 1,
                            background: isDisabled
                                ? "linear-gradient(90deg, #d3d3d3, #b0b0b0)"
                                : "linear-gradient(90deg, #6a11cb, #2575fc)",
                            borderRadius: "8px",
                            pointerEvents: isDisabled ? "none" : "auto",
                            transition: "0.3s ease",
                        }}
                    >
                        <Gradient_Button
                            size="large"
                            variant="primary"
                            onClick={() => {
                                forgetPasswordEmail(emailField);
                            }}
                        >
                            {isPending ? <CircularProgress size={30} sx={{ color: "white", p: "5px" }} /> : "Send Email"}
                        </Gradient_Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
