"use client";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
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
import UserCard from "@/features/user/components/userCard";

import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { routes } from "@/config/routes";
import { truncate } from "fs";
import { usePathname } from "next/navigation";
import { useUser } from "@/features/user/hooks/useUser";


export default function NavBar() {
  const t = useTheme();
  const isDesktop = useMediaQuery("(min-width:900px)");
  const { user } = useUser();

  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useAppDispatch();

  // ✅ FIX Hydration
  const [mounted, setMounted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [shown, setShown] = useState(false);
  const [openedNotifications, setOpenNotifications] = useState(false);
  const [userCard, setUserCard] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const userCardRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    // Remove trailing slash for comparison if necessary, but usually pathname is controlled
    return pathname === path || pathname.startsWith(path + "/");
  };
  // useEffect(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setOpenNotifications(false);
      }
      if (
        userCardRef.current &&
        !userCardRef.current.contains(event.target as Node)
      ) {
        setUserCard(false);
      }
    }
    if (openedNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    if (userCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef, openedNotifications, userCard, userCardRef]);

  useEffect(() => {
    setLoggedIn(token !== null);
  }, [token]);

  // 👇 optional sync token من localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);

  // 👇 close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setOpenNotifications(false);
      }
      if (
        userCardRef.current &&
        !userCardRef.current.contains(event.target as Node)
      ) {
        setUserCard(false);
      }
    }

    // window.addEventListener("storage", detection);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openedNotifications, userCard]);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ❗ مهم جدًا
  if (!mounted) return null;

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
            sx={{ display: ["block", "block", "block", "none"] }}
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
          sx={{ display: ["none", "none", "none", "flex"] }}
        >
          <ul>
            {routes.map((link, index) => {
              if (link.private && !loggedIn) return null;

              const active = isActive(link.path);

              return (
                <li
                  key={index}
                  className={`${styles.navItem} ${active ? styles.activeLi : ""}`}
                >
                  <Link href={link.path} passHref>
                    <Typography
                      className={`${styles.link} ${active ? styles.active : ""}`}
                      component="span" // Using span because Link adds the <a> or behaves like one
                      variant="link"
                      sx={{
                        color: active ? t.palette.secondary.main : "#111827",
                        cursor: "pointer",
                        display: "inline-block",
                        "&:hover": {
                          color: t.palette.secondary.main,
                        },
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Box>

        {/* Actions */}
        <div className={styles.actions}>
          <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
            {loggedIn ? (
              <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
                {/* Bell */}
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "relative",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "5px",
                    }}
                    onClick={() => {
                      setOpenNotifications(true);
                    }}
                  >
                    <BellIcon />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "1px",
                        right: "3px",
                        backgroundColor: "#47C0D2",
                        borderRadius: "50%",
                        width: "15px",
                        height: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        fontSize: "12px",
                      }}
                    >
                      {3}
                    </Box>
                  </div>
                  {openedNotifications && (
                    <div ref={notificationRef}>
                      <NotificationList />
                    </div>
                  )}
                </div>

                {/* Bag */}
                <Link href="/cart">
                  <div
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <BagIcon />
                  </div>
                </Link>

                {/* Avatar */}
                <div
                  style={{ position: "relative", cursor: "pointer" }}
                  onClick={() => {
                    setUserCard(true);
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
                      src={user?.profileImageUrl || "/assets/images/user-img.png"}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  {userCard && (
                    <div ref={userCardRef}>
                      <UserCard setUserCard={setUserCard} />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Typography
                component={"a"}
                href="/login"
                variant="subtitle1"
                sx={{
                  display: ["none", "none", "block"],
                  fontSize: "16px",
                  fontWeight: 500,
                  cursor: "pointer",
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
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {isDesktop ? "ع" : "عربي"}
            </Typography>
          </div>
        </div>
      </Box>

      <SideBarList shown={shown} loggedIn={loggedIn} />
    </Box>
  );
}
