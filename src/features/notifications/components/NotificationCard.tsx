"use client";

import { Box, Typography, Stack } from "@mui/material";
import { NotificationType } from "../types";
import { fromTimeToRelativeString } from "@/libs/helpers/timeFormatter";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface Props {
  notification: NotificationType;
  onRead: () => void;
  onRemove: () => void;
}

export default function NotificationCard({ notification, onRead, onRemove }: Props) {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",                   // ✔ Responsive
        // minHeight: "82px",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "16px",

        // ✔ new colors based on unread
        background: notification.isRead ? "#F5F5F5" : "#F6F3EC",

        borderBottom: `1px solid ${theme.tokens.separatingColors.separator}`,
        cursor: "pointer",

      })}
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
            alignItems: "flex-start",
            gap: '12px',
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
            {notification.message}
          </Typography>
          <Stack mt={'8px'} direction="row" spacing={2} justifyContent="center" alignItems="center">
            {!notification.isRead &&
              <Tooltip title="Mark as read">
                <Box

                  bgcolor={'primary.main'}
                  onClick={() => onRead()}
                  width={'12px'}
                  height={'12px'}
                  sx={{
                    background: 'primary.main',
                    borderRadius: "50%",
                    "&:hover": {
                      background: '#1b23517c',
                      cursor: "pointer"
                    }
                  }}
                />
              </Tooltip>

            }
            <Tooltip title="Remove">
              <DeleteOutlineIcon sx={{ fontSize: "18px", color: 'primary.main', transition: '0.3s ease-in-out', '&:hover': { color: 'error.main', cursor: 'pointer' } }} onClick={() => onRemove()} />
            </Tooltip>
          </Stack>




        </Box>

        {/* Time */}
        <Typography
          sx={(theme) => ({
            fontSize: "12px",
            color: theme.tokens.typographyColors.subtitle,
          })}
        >
          {fromTimeToRelativeString(notification.createdAt)}
        </Typography>
      </Box>
    </Box >
  );
}



