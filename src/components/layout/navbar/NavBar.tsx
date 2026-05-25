"use client";
import { Avatar, Box, Typography, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Modal from "@mui/material/Modal";

import SideBarList from "../sideBar/SideBarList";
import styles from "./navbar.module.css";
import BellIcon from "@/iconsComponents/BellIcon";
import BagIcon from "@/iconsComponents/BagIcon";
import Shape from "../../../../public/assets/images/nav-bar-shape.png";

import { useAppDispatch } from "@/Redux/store";

import NotificationList from "@/features/notifications/components/NotificationList";
import UserCard from "@/features/user/components/userCard";

import { routes } from "@/config/routes";
import { usePathname } from "next/navigation";
import { useUser } from "@/features/user/hooks/useUser";
import { useUnreadNotificationCount } from "@/features/notifications/hooks/useNotifications.hook";
import useSignalRConnection from "@/libs/signalRConntection";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/toaster/hooks/useToast";
import CloseIcon from '@mui/icons-material/Close';
import { NotificationType } from "@/features/notifications/types";



export default function NavBar() {
  const t = useTheme();
  const { showToast } = useToast();
  const isDesktop = useMediaQuery("(min-width:900px)");
  const isMobile = useMediaQuery('(max-width:450px)');
  const { user, isLoggedIn } = useUser();
  const dispatch = useAppDispatch();
  const { data: count, isSuccess } = useUnreadNotificationCount(!!isLoggedIn);
  const queryClient = useQueryClient();
  const connection = useSignalRConnection();

  useEffect(() => {
    if (connection) {
      const startConnection = async () => {
        try {
          if (connection.state === "Disconnected") {
            await connection.start();
            console.log("Connected to SignalR");

            connection.on("ReceiveNotification", (message: NotificationType) => {
              showToast(message.message, "notification");
              queryClient.refetchQueries({
                queryKey: ["notifications"],
              });
            });

            connection.on("UpdateUnreadCount", (count: number | string) => {
              queryClient.setQueryData(["unread-count"], (oldData: any) => {
                return {
                  ...oldData,
                  data: oldData.data + 1
                }
              });


            });
          }
        } catch (err) {
          console.error("SignalR Connection Error: ", err);
        }
      };

      startConnection();

      return () => {
        connection.off("ReceiveNotification");
        connection.off("UpdateUnreadCount");
      };
    }
  }, [connection, queryClient]);



  // ✅ FIX Hydration
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  const [openedNotifications, setOpenNotifications] = useState(false);
  const [userCard, setUserCard] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const userCardRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };
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
      document.addEventListener("click", handleClickOutside);
    }
    if (userCard) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [notificationRef, openedNotifications, userCard, userCardRef]);

  useEffect(() => {
    setMounted(true);
  }, []);



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
        padding={["16px 28px", "16px 28px", "0px 40px", "0px 80px"]}
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
            {routes.map((link, index) => {
              if (link.private && !isLoggedIn) return null;

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
            <Box sx={{ display: mounted ? 'block' : 'none' }}>
              {
                isLoggedIn && isSuccess ? (
                  <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
                    {/* Bell */}
                    {/* <div style={{ position: "relative" }}>
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
                          setUserCard(false)
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
                            padding: "3px",
                          }}
                        >
                          <Typography variant="body2" sx={{ color: "white", fontSize: "12px" }}>
                            {count?.data}
                          </Typography>
                        </Box>
                      </div>
                      {openedNotifications && !isMobile && (
                        <Box ref={notificationRef} sx={{
                          position: "absolute",
                          right: "0px",
                          top: "50px",
                        }}>

                          <NotificationList />
                        </Box>
                      )}
                    </div> */}

                    {isDesktop &&
                      <>
                        <Link href="/cart">
                          <div
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            <BagIcon />
                          </div>
                        </Link>

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
                      </>}
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
            </Box>
            {/* Language */}
            {/* {isDesktop && <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {isDesktop ? "ع" : "عربي"}
            </Typography>} */}
          </div>
        </div>






      </Box>

      <Modal open={openedNotifications && isMobile} onClose={() => setOpenNotifications(false)} sx={{ p: '10px' }}>
        <Box sx={{ position: "relative" }}>
          <CloseIcon onClick={() => setOpenNotifications(false)} sx={{ position: "absolute", top: "16px", right: "16px", cursor: "pointer", zIndex: 5555 }} />
          <NotificationList />
        </Box>
      </Modal>

      <SideBarList shown={shown} />
    </Box>
  );
}
