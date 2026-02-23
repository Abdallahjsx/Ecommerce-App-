"use client";

import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import TextInput from "@/components/ui/textInput/TextInput";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { useFormik } from "formik";

export default function ContactUsSection() {
  const theme = useTheme();

  const myform = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "1053px",
        backgroundColor: "#F6F3EC",
        overflow: "hidden",
      }}
    >
      <BackgroundShapeImage />

      <Container
        maxWidth={false}
        sx={{
          width: {
            xs: "100%",
            lg: "1269px",
          },
          minHeight: "1053px",
          margin: "0 auto",
          position: "relative",
          px: { xs: 2, sm: 3, lg: 0 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "437px" },
            height: "77px",
            mt: { xs: 4, lg: "40px" },
            ml: { xs: 0, lg: "20px" },
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: "36px",
                sm: "48px",
                lg: "64px",
              },
              lineHeight: "100%",
              background:
                "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Us
          </Typography>
        </Box>

        <Box
          sx={{
            position: {
              xs: "relative",
              lg: "absolute",
            },
            width: {
              xs: "100%",
              lg: "1167px",
            },
            height: {
              xs: "auto",
              lg: "726px",
            },
            top: {
              xs: 0,
              lg: "80px",
            },
            left: {
              xs: 0,
              lg: "98px",
            },
            display: "flex",
            flexDirection: "column",
            mt: { xs: 4, lg: 0 },
          }}
        >
          <Box
            sx={{
              width: "901px",
              height: "67px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                width: "901px",
                height: "24px",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "24px",
                color: theme.tokens.mainColors.primary,
              }}
            >
              Let’s talk With us
            </Typography>
          </Box>

          <Typography
            sx={{
              width: { xs: "100%", lg: "901px" },
              height: { xs: "auto", lg: "35px" },
              fontWeight: 400,
              fontSize: "21px",
              lineHeight: "35px",
              letterSpacing: "0.25%",
              color: theme.tokens.typographyColors.body,
              whiteSpace: {
                xs: "normal",
                lg: "nowrap",
              },
              wordBreak: "break-word",
              mt: "5px",
            }}
          >
            Questions ,Comments , or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </Typography>

          <Box
            sx={{
              width: { xs: "100%", lg: "1167px" },
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "46px",
              mt: "23px",
            }}
          >
            <form onSubmit={myform.handleSubmit} style={{ width: "100%" }}>
              <TextInput
                myform={myform}
                name="name"
                placeholder="Enter your name"
                type="text"
                hideLabel
                customSx={{
                  width: { xs: "100%", lg: "1167px" },
                  "& .MuiOutlinedInput-root": {
                    height: "73px",
                    padding: "16px 16px 16px 28px",
                    borderRadius: "8px",
                    backgroundColor: theme.tokens.mainColors.white,
                    boxShadow: `0px 4px 4px 0px ${theme.tokens.mainColors.black}40`,
                  },
                }}
              />

              <TextInput
                myform={myform}
                name="email"
                placeholder="Enter your email"
                type="email"
                hideLabel
                customSx={{
                  position: "relative",
                  top: "22px",
                  width: { xs: "100%", lg: "1167px" },
                  "& .MuiOutlinedInput-root": {
                    height: "73px",
                    padding: "16px 16px 16px 28px",
                    borderRadius: "8px",
                    backgroundColor: theme.tokens.mainColors.white,
                    boxShadow: `0px 4px 4px 0px ${theme.tokens.mainColors.black}40`,
                  },
                }}
              />

              <TextInput
                myform={myform}
                name="message"
                placeholder="Enter your message"
                type="text"
                multiline
                rows={6}
                hideLabel
                customSx={{
                  position: "relative",
                  top: "44px",
                  width: { xs: "100%", lg: "1167px" },
                  "& .MuiOutlinedInput-root": {
                    height: "296px",
                    padding: "16px 16px 16px 28px",
                    borderRadius: "8px",
                    backgroundColor: theme.tokens.mainColors.white,
                    boxShadow: `0px 4px 4px 0px ${theme.tokens.mainColors.black}40`,
                    alignItems: "flex-start",
                  },
                  "& textarea": {
                    paddingTop: "10px",
                  },
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  top: "70px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "80%",
                      md: "60%",
                      lg: "500px",
                    },
                    height: "66px",
                  }}
                >
                  <Gradient_Button
                    type="submit"
                    variant="primary"
                    sx={{
                      height: "66px",
                      borderRadius: "8px",
                      "& .MuiTypography-root": {
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "24px",
                        textAlign: "center",
                        color: theme.tokens.mainColors.white,
                      },
                    }}
                  >
                    Send message
                  </Gradient_Button>
                </Box>
              </Box>

              {/* Contact Info Section */}
              <Box
                sx={{
                  mt: 12,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  px: 2,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "18px", sm: "20px", lg: "21px" },
                    color: "#555555",
                    textAlign: "center",
                  }}
                >
                  Or reach us directly at
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ width: 32, height: 29, position: "relative" }}>
                    <Box
                      component="img"
                      src="/assets/icons/ellipse-icon.svg"
                      alt="ellipse icon"
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                      }}
                    />
                    <Box
                      component="img"
                      src="/assets/icons/mail-icon.svg"
                      alt="mail icon"
                      sx={{
                        width: 24,
                        height: 24,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </Box>

                  <Typography
                    component="a"
                    href="mailto:support@alluvo.com"
                    sx={{
                      fontSize: { xs: "16px", sm: "18px" },
                      color: theme.tokens.mainColors.primary,
                      textDecoration: "none",
                      wordBreak: "break-word",
                      textAlign: "center",
                    }}
                  >
                    support@alluvo.com
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    mt: "-10px",
                  }}
                >
                  <Box sx={{ width: 32, height: 29, position: "relative" }}>
                    <Box
                      component="img"
                      src="/assets/icons/ellipse-icon.svg"
                      alt="ellipse icon"
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                      }}
                    />
                    <Box
                      component="img"
                      src="/assets/icons/web-icon.svg"
                      alt="website icon"
                      sx={{
                        width: 24,
                        height: 24,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </Box>

                  <Typography
                    component="a"
                    href="https://www.alluvo.com"
                    target="_blank"
                    sx={{
                      fontSize: { xs: "16px", sm: "18px" },
                      color: theme.tokens.mainColors.primary,
                      textDecoration: "none",
                      wordBreak: "break-word",
                      textAlign: "center",
                    }}
                  >
                    www.alluvo.com
                  </Typography>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
