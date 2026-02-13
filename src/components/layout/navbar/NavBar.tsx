"use client";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideBarList from "../sideBar/SideBarList";
import styles from "./navbar.module.css";
import BellIcon from "@/iconsComponents/BellIcon";
import BagIcon from "@/iconsComponents/BagIcon";
import Shape from "../../../../public/assets/images/nav-bar-shape.png";
<<<<<<< HEAD
import Side from "../../../../public/assets/icons/side-icon.svg";
import { useSelector } from "react-redux";
=======
import { useAppDispatch } from "@/Redux/store";
import { setToken } from "@/Redux/slices/authSlice";
import NotificationList from "@/features/notifications/components/NotificationList";
import ProfileCard from "@/features/user/components/ProfileCard";

import { useSelector, UseSelector } from "react-redux";
>>>>>>> development
import { RootState } from "@/Redux/store";

import UserCard from "@/features/user/components/userCard";
export default function NavBar() {
  const t = useTheme();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useAppDispatch();
  console.log("my TOken issssss ========>>>>>>>>>>" + token);
  const [loggedIn, setLoggedIn] = useState(token !== null);
  const [shown, setShown] = useState(false);
<<<<<<< HEAD
  const isDesktop = useMediaQuery("(min-width:900px)");


  useEffect(() => {
    setLoggedIn(token !== null);
  }, [token]);

  const t = useTheme();
=======
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
  }, []);
>>>>>>> development

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

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            sx={{ display: ["block", "block", "none"] }}
            onClick={() => {
              setShown(!shown);
            }}
          >
            <img
              src={"/assets/icons/side-icon.svg"}
              style={{ marginRight: "16px" }}
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
                    href={
                      l === "Contact Us"
                        ? "/support/contact-us"
                        : l === "FAQS"
                        ? "/faqs"
                        : "#"
                    }
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
              <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
                <div
                  onClick={() => {
                    setOpenNotifications(!openedNotifications);
                    setUserCard(false);
                  }}
                  style={{paddingTop:4}}
                >
                  {" "}
                  <BellIcon />{" "}
                </div>

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
                  {openedNotifications && <NotificationList />}
                </div>
                <div
                  style={{
                    position: "relative",
            
                  }}
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
                  {/* <ProfileCard /> */}
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
<<<<<<< HEAD
              {isDesktop ? "ع" : "عربي"}

=======
              {width > 900 ? "ع" : loggedIn ? "عربي" : "ع"}
>>>>>>> development
            </Typography>
          </div>
        </div>
      </Box>
<<<<<<< HEAD
=======
      {useCard && <UserCard />}
>>>>>>> development

      <SideBarList shown={shown} loggedIn={loggedIn} />
    </Box>
  );
}

