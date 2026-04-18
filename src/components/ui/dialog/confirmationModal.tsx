"use client";

import React from "react";
import { Dialog, Box, Typography, Stack, IconButton } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";

interface DeleteAccountModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isPending?: boolean;
  message?: string;
  subMessage?: string;
  actionLabel?: string;
  isPendingLabel?: string;
}

const ConfirmationModal: React.FC<DeleteAccountModalProps> = ({
  open,
  onClose,
  onConfirm,
  isPending,
  message,
  subMessage,
  actionLabel,
  isPendingLabel,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "32px",
          padding: "40px 24px",
          maxWidth: "450px",
          width: "100%",
          overflow: "visible",
        },
      }}
    >
      <Box sx={{ position: "relative", textAlign: "center" }}>
        {/* Icon Header */}
        <Box
          sx={{
            position: "absolute",
            top: "-90px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100px",
            height: "100px",
            background: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              background: "#FF3B30",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <PriorityHighIcon sx={{ fontSize: "30px", fontWeight: "bold" }} />
          </Box>
        </Box>

        {/* Content */}
        <Typography
          variant="h5"
          sx={{
            color: "#1B2351",
            fontWeight: 800,
            fontSize: "24px",
            mb: 1.5,
            mt: 2,
            lineHeight: 1.2,
          }}
        >
          {message}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#A0ABC0",
            fontWeight: 500,
            mb: 4,
          }}
        >
          {subMessage}
        </Typography>

        {/* Actions */}
        <Stack direction="row" spacing={2}>
          <Gradient_Button
            onClick={onClose}
            sx={{
              background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
              borderRadius: "20px",
              height: "56px",
              fontWeight: 700,
              flex: 1,
            }}
          >
            Cancel
          </Gradient_Button>
          <Gradient_Button
            state="danger"
            onClick={onConfirm}
            disabled={isPending}
            sx={{
              borderRadius: "20px",
              height: "56px",
              fontWeight: 700,
              flex: 1,
            }}
          >
            {isPending ? isPendingLabel : actionLabel}
          </Gradient_Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

export default ConfirmationModal;
