"use client";

import { Box, Typography } from "@mui/material";
import { Notification } from "../types";

interface Props {
  item: Notification;
  onRead: (id: string | number) => void;
  onRemove: (id: string | number) => void;
}

export default function NotificationCard({ item, onRead, onRemove }: Props) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",                   // ✔ Responsive
        minHeight: "82px",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "16px",

        // ✔ new colors based on unread
        background: item.unread ? "#F5F5F5" : "#F6F3EC",

        borderBottom: `1px solid ${theme.tokens.separatingColors.separator}`,
        cursor: "pointer",
      })}
      onClick={() => onRead(item.id)}     // ✔ mark as read when clicking card
    >
      {/* Icon */}
      <img
        src="/assets/icons/notification-icon.svg"
        alt="bell"
        style={{ width: "24px", height: "24px", marginTop: "12px" }}
      />

      {/* Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {/* Top row: title + dot + remove */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Title */}
          <Typography
            sx={(theme) => ({
              fontSize: "16px",
              fontWeight: 500,
              color: theme.tokens.typographyColors.body,
            })}
          >
            {item.title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Unread Dot */}
            {item.unread && (
              <img
                src="/assets/icons/dot-icon.svg"
                alt="dot"
                style={{ width: "8px", height: "8px" }}
              />
            )}
           
          </Box>
        </Box>

        {/* Time */}
        <Typography
          sx={(theme) => ({
            fontSize: "12px",
            color: theme.tokens.typographyColors.subtitle,
          })}
        >
          {item.time}
        </Typography>
      </Box>
    </Box>
  );
}



