"use client";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material";
import styles from "./navbar.module.css";
import BellIcon from "@/iconsComponents/BellIcon";
import BagIcon from "@/iconsComponents/BagIcon";
import User from "../../../../public/assets/images/user-img.jpg";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const t = useTheme();
  return (
    <header
      className={styles.header}
      style={{ backgroundColor: t.tokens.backgroundColors.main }}
    >
      <div className="app-row gap-3">
        <Typography component={"a"} href="#">
          <Typography variant="titleSpecial" >Alluvo</Typography>
        </Typography>
      </div>
      <div className={styles.links}>
        <ul>
          {["Home", "Shop", "Reels", "Orders", "Contact Us", "FAQS"].map(
            (l, index) => (
              <li key={index}>
                <Typography
                  className={styles.link}
                  component={"a"}
                  variant="link"
                  href="#"
                  color="#111827"
                  sx={{
                    "&:hover": {
                      color: t.palette.secondary.main,
                    },
                  }}
                >
                  {l}
                </Typography>
              </li>
            )
          )}
        </ul>
      </div>

      <div className={styles.actions}>
        <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
          {loggedIn ? (
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <BellIcon />
              <div
                style={{
                  position: "relative",
                  width: "35px",
                  height: "35px",
                  alignSelf:"flex-start"
                }}
              >
                <div>
                  <BagIcon />
                </div>

                <div className={styles.circle}>{1}</div>
              </div>

              <div
                className={styles.roundedImg}
                style={{
                  border: `1px solid ${t.tokens.separatingColors.border}`,
                }}
              >
                <img
                  src={User.src}
                  alt="user-image"
                  width={65}
                  height={65}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ) : (
            <Typography
              component={"a"}
              href="#"
              fontFamily={"poppins"}
              variant="subtitle1"
              onClick={() => {
                setLoggedIn(true);
              }}
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                "&:hover": {
                  color: t.palette.secondary.main,
                },
              }}
            >
              Login
            </Typography>
          )}

          <Typography
            fontFamily={"poppins"}
            variant="subtitle1"
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
              "&:hover": {
                color: t.palette.secondary.main,
              },
            }}
          >
            ع
          </Typography>
        </div>
      </div>
    </header>
  );
}
