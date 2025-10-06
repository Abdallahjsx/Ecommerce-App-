"use client";
import React from "react";
import styles from "./footer.module.css";
import { useTheme, Typography } from "@mui/material";
import Apple from "../../../../public/assets/images/Apple.png";
import GooglePlay from "../../../../public/assets/images/googlePlay.png";
import Logo from "../../../../public/assets/images/logo.png";
import Facebook from "../../../../public/assets/icons/facebook-icon.svg";
import Linkedin from "../../../../public/assets/icons/linkedin-icon.svg";
import Twitter from "../../../../public/assets/icons/twitter-icon.svg";
import Phone from "../../../../public/assets/icons/phone-icon.svg";
import C from "../../../../public/assets/icons/c-icon.svg";

export default function Footer() {
  const t = useTheme();
  return (
    <footer>
      <div
        className={styles.footer}
        style={{ backgroundColor: t.tokens.backgroundColors.light }}
      >
        <div className="l-footer--ourapplinks">
          <Typography variant="titleSpecial" style={{ fontSize: "48px" }}>
            All your Favorites
          </Typography>
          <div className={styles.ourAppLinks}>
            {/* <div className={styles.lightVector}></div> */}

            <a className={styles.linkBox} href="#">
              <img
                src={Apple.src}
                height={Apple.height}
                width={Apple.width}
                alt="Appstore"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="download">Download on the</Typography>
                <Typography
                  variant="download"
                  color="black"
                  style={{ fontSize: "14px" }}
                >
                  App Store
                </Typography>
              </div>
            </a>
            <a className={styles.linkBox} href="#">
              <img
                src={GooglePlay.src}
                height={GooglePlay.height}
                width={GooglePlay.width}
                alt="Appstore"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography variant="download">Download on the</Typography>
                <Typography
                  variant="download"
                  color="black"
                  style={{ fontSize: "14px" }}
                >
                  Google
                </Typography>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.footerContent}>
          <section className={styles.info}>
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
            <p style={{ marginTop: 24 }}>
              Our platform turns shopping into an experience you’ll enjoy.
              Discover products you love, explore exciting offers, and make
              every purchase fun, easy, and rewarding.
            </p>
            {/* <ul className="social app-row justify-content-start p-0">
              <li>
                <a href="#">
                  <img
                    src="../images/Icons/ic_baseline-whatsapp.svg"
                    alt="whatsapp"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../images/Icons/carbon_logo-instagram.svg"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../images/Icons/mingcute_youtube-line.svg"
                    alt="youtube"
                  />
                </a>
              </li>
            </ul> */}
          </section>
          <section className={styles.navs}>
            <div className={styles.column}>
              <Typography
                variant="link"
                color="black"
                style={{ marginBottom: 8 }}
              >
                Company
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
                  variant="navCol"
                  component={"a"}
                  href="#"
                  color="black"
                >
                  {val}
                </Typography>
              ))}
            </div>

            <div className={styles.column}>
              <Typography
                variant="link"
                color="black"
                style={{ marginBottom: 8 }}
              >
                Order & Shopping Help
              </Typography>
              {["Home", "Shop", "Reels"].map((val, index) => (
                <Typography
                  key={index}
                  variant="navCol"
                  component={"a"}
                  href="#"
                  color="black"
                >
                  {val}
                </Typography>
              ))}
            </div>

            <div className={styles.column}>
              <Typography
                variant="link"
                color="black"
                style={{ marginBottom: 8 }}
              >
                Support
              </Typography>
              {["FAQs", "Support Center"].map((val, index) => (
                <Typography
                  key={index}
                  variant="navCol"
                  component={"a"}
                  href="#"
                  color="black"
                >
                  {val}
                </Typography>
              ))}
            </div>

            <div className={styles.column}>
              <Typography
                variant="link"
                color="black"
                style={{ marginBottom: 8 }}
              >
                Legal
              </Typography>
              {["Terms and Conditions", "Privacy Policy"].map((val, index) => (
                <Typography
                  key={index}
                  variant="navCol"
                  component={"a"}
                  href="#"
                  color="black"
                >
                  {val}
                </Typography>
              ))}
            </div>

            <div className={styles.column}>
              <Typography
                variant="link"
                color="black"
                style={{ marginBottom: 8 }}
              >
                Contact Us
              </Typography>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <img src={Phone.src} />
                <Typography
                  variant="navCol"
                  color="black"
                  style={{ fontSize: 16 }}
                >
                  19000
                </Typography>
              </div>
              <div className={styles.social}>
                {[Facebook, Linkedin, Twitter].map((icon) => (
                  <Typography component={"a"} href="#" color="initial">
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
          </section>
        </div>
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
      </div>
    </footer>
  );
}
