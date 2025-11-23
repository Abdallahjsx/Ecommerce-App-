"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useNotifications } from "@/features/notifications/hooks/useNotifications";
import NotificationCard from "./NotificationCard";

export default function NotificationList() {
  const [activeTab, setActiveTab] = useState("all");

  const { notifications, markAsRead, clearAll, markAllAsRead, remove } =
    useNotifications();

  const filtered =
    activeTab === "unread"
      ? notifications.filter((n) => n.unread)
      : notifications;

  return (
    <Box
      sx={(theme) => ({
        width: "375px",
        height: "812px",
        margin: "0 auto",
        borderRadius: theme.tokens.buttons.borderRadius,
        background: theme.tokens.backgroundColors.light,
        overflow: "hidden",
        position: "relative",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: theme.tokens.buttons.borderRadius,
          padding: "1px",
          background: "linear-gradient(180deg, #47C0D2 0%, #1B2351 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        },
      })}
    >
      {/* HEADER */}
      <Box
        sx={(theme) => ({
          width: "375px",
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
            width: "343px",
            height: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: "auto",
          }}
        >
          <Typography
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
            width: "343px",
            height: "36px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mx: "auto",
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
                borderBottom:
                  activeTab === "all" ? "3px solid #1B2351" : "0px",
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
              onClick={markAllAsRead}
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
              onClick={clearAll}
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

      {/* LIST */}
      {filtered.map((item) => (
        <NotificationCard
          key={item.id}
          item={item}
          onRead={markAsRead}
          onRemove={remove}
        />
      ))}
    </Box>
  );
}






















