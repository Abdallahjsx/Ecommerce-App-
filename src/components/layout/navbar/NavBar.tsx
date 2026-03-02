"use client";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

import SideBarList from "../sideBar/SideBarList";
import styles from "./navbar.module.css";
import BellIcon from "@/iconsComponents/BellIcon";
import BagIcon from "@/iconsComponents/BagIcon";
import Shape from "../../../../public/assets/images/nav-bar-shape.png";

import { useAppDispatch } from "@/Redux/store";
import { setToken } from "@/Redux/slices/authSlice";

import NotificationList from "@/features/notifications/components/NotificationList";
import ProfileCard from "@/features/user/components/ProfileCard";
import UserCard from "@/features/user/components/userCard";

import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

export default function NavBar() {
  const t = useTheme();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useAppDispatch();

  const [loggedIn, setLoggedIn] = useState(token !== null);
  const [shown, setShown] = useState(false);
  const [width, setWidth] = useState(0);
  const [openedNotifications, setOpenNotifications] = useState(false);
  const [useCard, setUserCard] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setLoggedIn(token !== null);
  }, [token]);

  useEffect(() => {
    function detection() {
      const token = localStorage.getItem("token");
      if (token !== null) {
        dispatch(setToken(token));
      }
    }

    window.addEventListener("storage", detection);

    return () => {
      window.removeEventListener("storage", detection);
    };
  }, [dispatch]);

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 4,
        "&::before": {
          content: '""',
          display: "block",
          height: "80px",
          width: "100%",
        },
      }}
    >
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

        {/* Logo and menu */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{ display: ["block", "block", "none"] }}
            onClick={() => setShown(!shown)}
          >
            <img
              src={"/assets/icons/side-icon.svg"}
              style={{ marginRight: "16px" }}
              alt=""
            />
          </IconButton>

          <Typography
            component={"a"}
            href="/"
            sx={{ cursor: "pointer" }}
            variant="titleSpecial"
          >
            Alluvo
          </Typography>
        </div>

        {/* Links */}
        <Box
          className={styles.links}
          sx={{ display: ["none", "none", "flex"] }}
        >
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

        {/* Actions */}
        <div className={styles.actions}>
          <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
            {loggedIn ? (
              <div style={{ display: "flex", gap: 9, alignItems: "center" }}>

                {/* Bell */}
                <div
                  style={{ paddingTop: 4, cursor: "pointer" }}
                  onClick={() => {
                    setOpenNotifications(!openedNotifications);
                    setUserCard(false);
                  }}
                >
                  <BellIcon />
                </div>

                {/* Bag */}
                <Link href="/cart">
                  <div
                    style={{
                      position: "relative",
                      width: "35px",
                      height: "35px",
                      cursor: "pointer",
                    }}
                  >
                    <BagIcon />

                    <div className={styles.circle}>
                      {1}
                    </div>
                  </div>
                </Link>

                {openedNotifications && <NotificationList />}

                {/* Avatar */}
                <div
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={() => {
                    setUserCard(!useCard);
                    setOpenNotifications(false);
                  }}
                >
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

              </div>
            ) : (
              <Typography
                component={"a"}
                color={t.tokens.typographyColors.title}
                href="/login"
                fontFamily={"poppins"}
                variant="subtitle1"
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

            {/* Language */}
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
              {width > 900 ? "ع" : loggedIn ? "عربي" : "ع"}
            </Typography>

          </div>
        </div>

      </Box>

      {useCard && <UserCard />}

      <SideBarList shown={shown} loggedIn={loggedIn} />

    </Box>
  );
}