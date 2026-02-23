"use client";

import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import Gradient_Button from "@/components//ui/gradientButton/Gradient_Button";

export default function FAQsSection() {
  const [activeTab, setActiveTab] = useState<"customer" | "brand">("customer");
  const [isOpen, setIsOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    "Can I order from multiple local brands at once?",
    "Can I save an item and buy it later?",
    "Can I place an order without creating an account?",
    "How do I apply a coupon or promo code?",
  ];

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        width: "100%",
        backgroundColor: theme.tokens.backgroundColors.main,
        overflow: "hidden",
      })}
    >
      <BackgroundShapeImage />

      <Container
        maxWidth={false}
        sx={{
          width: { xs: "100%", lg: "1269px" },
          minHeight: "1053px",
          padding: "16px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", lg: "1440px" },
            height: { xs: "auto", lg: "695px" },
            paddingRight: { xs: "16px", lg: "48px" },
            paddingLeft: { xs: "16px", lg: "48px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              gap: { xs: "40px", lg: 0 },
            }}
          >
            {/* LEFT SIDE */}
            <Box sx={{ width: { xs: "100%", lg: "520px" } }}>
              <Typography
                sx={(theme) => ({
                  width: "161px",
                  height: "77px",
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 600,
                  fontSize: "64px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  background: theme.palette.gradients.primary,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mt: { xs: "20px", lg: "68px" },
                  ml: { xs: 0, lg: "-68px" },
                })}
              >
                FAQs
              </Typography>

              <Typography
                sx={(theme) => ({
                  width: "330px",
                  height: "96px",
                  fontWeight: 500,
                  fontSize: "36px",
                  lineHeight: "48px",
                  letterSpacing: "0%",
                  color: theme.tokens.mainColors.black,
                  ml: { xs: 0, lg: "-68px" },
                  mt: "28px",
                })}
              >
                Frequently Asked Question
              </Typography>

              <Typography
                sx={{
                  width: { xs: "100%", lg: "520px" },
                  height: { xs: "auto", lg: "84px" },
                  fontWeight: 400,
                  fontSize: { xs: "16px", lg: "18px" },
                  lineHeight: "28px",
                  letterSpacing: "0%",
                  color: "#5E4E5E",
                  ml: { xs: 0, lg: "-68px" },
                  mt: "20px",
                }}
              >
                Experience a wealth of powerful features that are designed to be
                accessible and easy to use for everyone, regardless of.
              </Typography>

              <Typography
                sx={(theme) => ({
                  width: "520px",
                  height: "24px",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: theme.tokens.mainColors.black,
                  ml: { xs: 0, lg: "-68px" },
                  mt: "20px",
                })}
              >
                Didn&apos;t find an answer?
              </Typography>

              <Box
                component="a"
                href="tel:19000"
                sx={{
                  width: "79px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  ml: { xs: 0, lg: "-68px" },
                  mt: "10px",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src="/assets/icons/phone-icon.svg"
                  sx={{ width: "24px", height: "24px" }}
                />
                <Typography
                  sx={(theme) => ({
                    width: "47px",
                    height: "24px",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: theme.tokens.mainColors.black,
                  })}
                >
                  19000
                </Typography>
              </Box>
            </Box>

            {/* RIGHT SIDE */}
            <Box
              sx={{
                width: { xs: "100%", lg: "658px" },
                mt: { xs: "40px", lg: "160px" },
              }}
            >
              {/* Tabs */}
              <Box
                sx={(theme) => ({
                  width: { xs: "100%", lg: "343px" },
                  height: "56px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  padding: "4px",
                  borderRadius: theme.tokens.buttons.borderRadius,
                  border: `1px solid ${theme.tokens.separatingColors.separator}`,
                  mt: "16px",
                  ml: { xs: 0, lg: "-48px" },
                })}
              >
                <Gradient_Button
                  variant={activeTab === "customer" ? "primary" : "text"}
                  onClick={() => setActiveTab("customer")}
                  sx={{
                    width: { xs: "100%", lg: "160px" },
                    height: "48px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "none" },
                    "& .MuiTypography-root": { textDecoration: "none" },
                  }}
                >
                  Customer
                </Gradient_Button>

                <Gradient_Button
                  variant={activeTab === "brand" ? "primary" : "text"}
                  onClick={() => setActiveTab("brand")}
                  sx={{
                    width: { xs: "100%", lg: "160px" },
                    height: "48px",
                    borderRadius: "8px",
                    boxShadow: "none",
                    color:
                      activeTab === "brand" ? "#FFFFFF" : "#5E4E5E",
                    "&:hover": { textDecoration: "none" },
                    "& .MuiTypography-root": {
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "22px",
                    },
                  }}
                >
                  Brand
                </Gradient_Button>
              </Box>

              {/* MAIN FAQ BOX */}
              <Box
                sx={(theme) => ({
                  width: { xs: "100%", lg: "658px" },
                  height: { xs: "auto", lg: isOpen ? "172px" : "72px" },
                  pt: "16px",
                  pr: "16px",
                  pb: { xs: "16px", lg: "60px" },
                  pl: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  borderRadius: theme.tokens.buttons.borderRadius,
                  border: `1px solid ${theme.tokens.separatingColors.separator}`,
                  backgroundColor: "#FCFBFF",
                  mt: "34px",
                  ml: { xs: 0, lg: "-195px" },
                  transition: "all 0.3s ease",
                })}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={(theme) => ({
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      background: theme.palette.gradients.primary,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    })}
                  >
                    How do I place an order on the app?
                  </Typography>

                  <Box
                    onClick={() => setIsOpen(!isOpen)}
                    sx={{
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      transform: isOpen
                        ? "rotate(360deg)"
                        : "rotate(180deg)",
                    }}
                  >
                    <Box
                      component="img"
                      src="/assets/icons/arrow-down-icon.svg"
                    />
                  </Box>
                </Box>

                {isOpen && (
                  <>
                    <Typography
                      sx={(theme) => ({
                        width: { xs: "100%", lg: "450px" },
                        height: { lg: "48px" },
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: theme.palette.primary.main,
                      })}
                    >
                      Browse reels, tap on a product to view details,
                      select your variant (if any), and tap “Add to
                      Cart.”
                    </Typography>

                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        mt: "8px",
                      }}
                    >
                      <Gradient_Button
                        sx={{
                          width: { xs: "100%", lg: "311px" },
                          minHeight: { xs: "44px", lg: "35px" },
                          height: { lg: "35px" },
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          textTransform: "none",
                          fontSize: { xs: "13px", lg: "16px" },
                          px: 2,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Box
                          component="img"
                          src="/assets/images/Play.png"
                          sx={{ width: "25px", height: "25px" }}
                        />
                        Watch how to order step-by-step
                      </Gradient_Button>
                    </Box>
                  </>
                )}
              </Box>

              {/* OTHER FAQ ITEMS */}
              <Box sx={{ mt: "24px", ml: { xs: 0, lg: "-195px" } }}>
                {faqItems.map((question, index) => {
                  const isItemOpen = openIndex === index;

                  return (
                    <Box
                      key={index}
                      sx={(theme) => ({
                        width: { xs: "100%", lg: "658px" },
                        borderRadius:
                          theme.tokens.buttons.borderRadius,
                        border: `1px solid ${theme.tokens.separatingColors.separator}`,
                        background:
                          theme.palette.gradients.primary,
                        color: theme.tokens.mainColors.white,
                        mb: "16px",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background:
                            theme.palette.gradients.primaryHover,
                        },
                      })}
                    >
                      <Box
                        onClick={() =>
                          setOpenIndex(
                            isItemOpen ? null : index
                          )
                        }
                        sx={{
                          height: "64px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          px: "16px",
                          cursor: "pointer",
                        }}
                      >
                        <Typography sx={{ fontSize: "16px" }}>
                          {question}
                        </Typography>

                        <Box
                          sx={{
                            width: "32px",
                            height: "32px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "transform 0.3s ease",
                            transform: isItemOpen
                              ? "rotate(180deg)"
                              : "rotate(360deg)",
                          }}
                        >
                          <Box
                            component="img"
                            src="/assets/icons/arrow-up-icon.svg"
                          />
                        </Box>
                      </Box>

                      {isItemOpen && (
                        <Box
                          sx={(theme) => ({
                            backgroundColor: "#FCFBFF",
                            color: theme.palette.primary.main,
                            p: "16px",
                          })}
                        >
                          <Typography sx={{ fontSize: "16px" }}>
                            I’m currently unable to access the questions from the mobile app.
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
