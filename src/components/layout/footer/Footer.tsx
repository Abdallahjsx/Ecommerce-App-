"use client";
import React from "react";
import styles from "./footer.module.css";
import { useTheme, Typography, Box, Link } from "@mui/material";
import GooglePlay from "../../../../public/assets/images/google-play.png";
import Logo from "../../../../public/assets/images/logo.png";
import Facebook from "../../../../public/assets/icons/facebook-icon.svg";
import Linkedin from "../../../../public/assets/icons/linkedin-icon.svg";
import Twitter from "../../../../public/assets/icons/twitter-icon.svg";
import Phone from "../../../../public/assets/icons/phone-icon.svg";
import C from "../../../../public/assets/icons/c-icon.svg";
import Shadow from "../../../../public/assets/images/shadow-ellipse.png";
import AppStore from "../../../../public/assets/images/apple.png"

export default function Footer() {
  const t = useTheme();
  return (
    <Box
      className={styles.footer}
      sx={{
        bgcolor: t.tokens.backgroundColors.light,
        flexDirection: { xs: "column" },
        padding: ["48px 29px", "48px 29px", "48px 80px"],
      }}
    >
      <Box sx={{ flexDirection: ["column", "column", "row"], width: "100%" }}>
        <Typography
          className={styles.slogun}
          variant="titleSpecial"
          style={{ display: "block" }}
          sx={{
            fontSize: { md: "48px" },
            textAlign: ["center"],
            marginBottom: "50px",
          }}
        >
          All your Favorites
        </Typography>
        <Box
          className={styles.ourAppLinks}
          sx={{ gap: ["16px", "16px", "24px"] }}
        >
          <Box
            className={styles.lightVector}
            sx={{ width: ["100%", "100%", "60%"] }}
          />

          <Link
            zIndex={2}
            sx={{ textDecoration: "none" }}
            className={styles.linkBox}
            href="#"
          >
            <img
              src={AppStore.src}
              height={AppStore.height}
              width={AppStore.width}
              alt="Appstore"
            />
          </Link>
          <Link
            zIndex={2}
            sx={{ textDecoration: "none" }}
            className={styles.linkBox}
            href="#"
          >
            <img
              src={GooglePlay.src}
              height={GooglePlay.height}
              width={GooglePlay.width}
              alt="Googleplay"
            />
          </Link>
        </Box>
      </Box>
      <Box
        className={styles.footerContent}
        sx={{
          flexDirection: ["column", "column", "row"],
          gap: ["24px", "24px", "128px"],
          justifyContent: ["flex-start", "flex-start", "space-between"],
        }}
      >
        <Box className={styles.info}>
          <div style={{ display: "flex" }}>
            <img
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt=""
            />
            <Typography
              variant="titleSpecial"
              style={{ fontSize: "40px", alignSelf: "flex-end" }}
            >
              Alluvo
            </Typography>
          </div>
          <img src={Shadow.src} alt="" style={{ marginTop: "14px" }} />
          <Box
            style={{ marginTop: "20px" }}
            sx={{ textAlign: ["center", "center", "start"] }}
          >
            <Typography variant="captionSmall" fontSize={14}>
              Our platform turns shopping into an experience you’ll enjoy.
              Discover products you love, explore exciting offers, and make
              every purchase fun, easy, and rewarding.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.navs}>
          <div className={styles.column}>
            <Typography
              variant="link"
              color="#111827"
              style={{ marginBottom: 8 }}
            >
              Catigories
            </Typography>
            {[
              "Fashion",
              "Shoes",
              "Makeup",
              "Candles",
              "Perfume",
              "Jewelry",
              "Accessories",
              "Bags",
              "Handmade Crafts",
            ].map((val, index) => (
              <Typography
                key={index}
                variant="link"
                component={"a"}
                href="#"
                color="#212C2B"
                fontSize={14}
                fontWeight={400}
              >
                {val}
              </Typography>
            ))}
          </div>

          <div className={styles.column}>
            <Typography
              variant="link"
              color="#111827"
              style={{ marginBottom: 8 }}
            >
              Order & Shopping Help
            </Typography>
            {["Home", "Shop", "Reels"].map((val, index) => (
              <Typography
                key={index}
                variant="link"
                component={"a"}
                href="#"
                color="#212C2B"
                fontSize={14}
                fontWeight={400}
              >
                {val}
              </Typography>
            ))}
          </div>

          <div className={styles.column}>
            <Typography
              variant="link"
              color="#111827"
              style={{ marginBottom: 8 }}
            >
              Support
            </Typography>
            {["FAQs", "Support Center"].map((val, index) => (
              <Typography
                key={index}
                variant="link"
                component={"a"}
                href="#"
                color="#212C2B"
                fontSize={14}
                fontWeight={400}
              >
                {val}
              </Typography>
            ))}
          </div>

          <div className={styles.column}>
            <Typography
              variant="link"
              color="#111827"
              style={{ marginBottom: 8 }}
            >
              Legal
            </Typography>
            {["Terms and Conditions", "Privacy Policy"].map((val, index) => (
              <Typography
                key={index}
                variant="link"
                component={"a"}
                href="#"
                color="#212C2B"
                fontSize={14}
                fontWeight={400}
              >
                {val}
              </Typography>
            ))}
          </div>

          <div className={styles.column}>
            <Typography
              variant="link"
              color="#111827"
              style={{ marginBottom: 8 }}
            >
              Contact Us
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <img src={Phone.src} />
              <Typography
                variant="link"
                fontSize={14}
                fontWeight={400}
                color={t.tokens.typographyColors.body}
                style={{ fontSize: 16 }}
              >
                19000
              </Typography>
            </div>
            <div className={styles.social}>
              {[Facebook, Linkedin, Twitter].map((icon, index) => (
                <Typography
                  key={index}
                  component={"a"}
                  href="#"
                  color="initial"
                >
                  <div
                    className={styles.circle}
                    style={{
                      border: `1px solid ${t.tokens.separatingColors.border}`,
                    }}
                  >
                    <img
                      src={icon.src}
                      width={icon.width}
                      height={icon.height}
                      alt=""
                    />
                  </div>
                </Typography>
              ))}
            </div>
          </div>
        </Box>
      </Box>
      <hr
        className="border w-100 border-1 opacity-100"
        style={{
          width: "100%",
          border: `1px solid ${t.tokens.separatingColors.border}`,
          margin: 32,
        }}
      />

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <img src={C.src} width={C.width} height={C.height} alt="" />
        <p>Alluvo, 2026 All rights reserved.</p>
      </div>
    </Box>
  );
}
//
