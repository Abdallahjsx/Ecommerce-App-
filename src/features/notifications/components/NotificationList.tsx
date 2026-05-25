"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import NotificationCard from "./NotificationCard";
import Modal from "@mui/material/Modal";
import { useGetNotifications, useClearAll, useMarkAsRead, useMarkAllAsRead, useRemove } from "../hooks/useNotifications.hook";
import { useAppSelector } from "@/Redux/hooks";
import { NotificationType } from "../types";

import CircularProgress from "@mui/material/CircularProgress";


export default function NotificationList() {
  const isMobile = useMediaQuery('(max-width:450px)');
  const [activeTab, setActiveTab] = useState("all");
  const token = useAppSelector((state) => state.authAlluvo.token);

  const { data: notifications, isFetching, error } = useGetNotifications(!!token);
  const { mutate: markAllAsRead } = useMarkAllAsRead();
  const { mutate: clearAll } = useClearAll();
  const { mutate: markAsRead } = useMarkAsRead();
  const { mutate: remove } = useRemove();
  const [filteredNotifications, setFilteredNotifications] = useState<NotificationType[]>([]);
  useEffect(() => {
    setFilteredNotifications([]);
    if (notifications) {
      const filtered =
        activeTab === "unread"
          ? notifications?.data?.filter((n: NotificationType) => !n.isRead)
          : notifications?.data;
      setFilteredNotifications(filtered);
    }
  }, [notifications, activeTab])






  return (
    <Box p={'1px'} pt={"0px"} width={"100%"} minWidth={isMobile ? "250px" : "400px"} sx={{
      borderRadius: "12px",
    }}>
      <Box
        sx={(theme) => ({
          width: '100%',
          height: '100%',
          overflowX: 'hidden',
          margin: "0 auto",
          borderRadius: "12px",
          background: theme.tokens.backgroundColors.light,
        })}
      >
        {/* HEADER */}
        <Box
          sx={(theme) => ({
            width: "100%",
            height: "86px",
            paddingTop: "16px",
            paddingRight: "16px",
            paddingLeft: "16px",
            background: theme.tokens.backgroundColors.main,
            borderBottom: `1px solid ${theme.tokens.separatingColors.separator}`,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            borderTopLeftRadius: theme.tokens.buttons.borderRadius,
            borderTopRightRadius: theme.tokens.buttons.borderRadius,
          })}
        >
          <Box
            sx={{
              width: "100%",
              height: "24px",
              mx: "auto",
            }}
          >
            <Typography
              textAlign={"start"}
              sx={(theme) => ({
                ...theme.typography.titleSmall,
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                color: theme.tokens.typographyColors.title,
              })}
            >
              Notifications
            </Typography>
          </Box>

          {/* Tabs + Action */}
          <Box
            sx={{
              width: "100%",
              height: "36px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Tabs */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {/* ALL */}
              <Box
                onClick={() => setActiveTab("all")}
                sx={{
                  width: "42px",
                  height: "36px",
                  paddingBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: activeTab === "all" ? "3px solid #1B2351" : "0px",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={(theme) => ({
                    fontSize: "14px",
                    fontWeight: 500,
                    color: theme.tokens.typographyColors.body,
                  })}
                >
                  All
                </Typography>
              </Box>

              {/* UNREAD */}
              <Box
                onClick={() => setActiveTab("unread")}
                sx={{
                  width: "67px",
                  height: "36px",
                  paddingBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom:
                    activeTab === "unread" ? "3px solid #1B2351" : "0px",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={(theme) => ({
                    fontSize: "14px",
                    fontWeight: 500,
                    color: theme.tokens.typographyColors.body,
                  })}
                >
                  Unread
                </Typography>
              </Box>
            </Box>

            {/* RIGHT BUTTON */}
            {activeTab === "unread" ? (
              <Typography
                onClick={() => { markAllAsRead(); }}
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  textAlign: "center",
                  color: "#3E548D",
                  cursor: "pointer",
                }}
              >
                Mark all as read
              </Typography>
            ) : (
              <Typography
                onClick={() => { clearAll(); }}
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  textAlign: "center",
                  color: "#FF3B30",
                  cursor: "pointer",
                }}
              >
                Remove All
              </Typography>
            )}
          </Box>
        </Box>
        {filteredNotifications?.length === 0 && <Box sx={{
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
        }}>
          {isFetching ? <CircularProgress size={24} thickness={4} sx={{ color: "primary.main" }} /> : <Typography
            sx={(theme) => ({
              fontSize: "14px",
              fontWeight: 500,
              color: theme.tokens.typographyColors.body,
            })}
          >
            {activeTab === "unread" ? "You don't have any Unread Notifications!" : "You don't have any Notifications!"}
          </Typography>}
        </Box>}
        <Stack direction={'column'} sx={{
          maxHeight: '500px',
          overflowY: 'auto',
        }}>
          {/* LIST */}
          {filteredNotifications?.map((n) => {
            return (
              <NotificationCard
                key={n.id}
                notification={n}
                onRead={() => {
                  markAsRead(n.id)

                }}
                onRemove={() => remove(n.id)}
              />
            )
          })}
        </Stack>
      </Box>
    </Box>

  );
}
