"use client";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import SideBarList from "../sideBar/SideBarList";
import styles from "./navbar.module.css";
import BellIcon from "@/iconsComponents/BellIcon";
import BagIcon from "@/iconsComponents/BagIcon";
import Shape from "../../../../public/assets/images/nav-bar-shape.png";
import Side from "../../../../public/assets/icons/side-icon.svg";

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [shown, setShown] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const t = useTheme();
  return (
    <Box
      className={styles.header}
      style={{ backgroundColor: t.tokens.backgroundColors.main }}
      padding={["16px 28px", "16px 28px", "0px 80px"]}
    >
      <img
        src={Shape.src}
        alt=""
        style={{ position: "absolute", right: "0px", pointerEvents: "none" }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          sx={{ display: ["block", "block", "none"] }}
          onClick={() => {
            setShown(!shown);
          }}
        >
          <img
            src={Side.src}
            width={Side.width}
            style={{ marginRight: "16px" }}
            height={Side.height}
            alt=""
          />
        </IconButton>

        <Typography
          component={"a"}
          href="#"
          sx={{ cursor: "pointer" }}
          variant="titleSpecial"
        >
          Alluvo
        </Typography>
      </div>
      <Box className={styles.links} sx={{ display: ["none", "none", "flex"] }}>
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
      </Box>

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
                  alignSelf: "flex-start",
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
                <Avatar
                  style={{ width: "100%", height: "100%" }}
                  src="/assets/images/user-img.png"
                />
              </div>
            </div>
          ) : (
            <Typography
              component={"a"}
              color={t.tokens.typographyColors.title}
              href="#"
              fontFamily={"poppins"}
              variant="subtitle1"
              onClick={() => {
                setLoggedIn(true);
              }}
              sx={{
                display: ["none", "none", "block"],
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
            {width > 900 ? "ع" : "عربي"}
          </Typography>
        </div>
      </div>
      <SideBarList shown={shown} />
    </Box>
  );
}
