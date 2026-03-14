"use client";

import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";
import ToastItem from "@/components/ui/toaster/Toast-Item";
import NotificationList from "@/features/notifications/components/NotificationList";
import RangePriceBar from "@/components/ui/special/rangePriceBar";
import PriceFilter from "@/features/shop/components/filters/priceFilter";
export default function HomePage() {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [openWarning, setOpenWarning] = useState(false); // ✅ الحالة الجديدة للـ warning

  const handleShowSuccess = () => setOpenSuccess(true);
  const handleCloseSuccess = () => setOpenSuccess(false);

  const handleShowInfo = () => setOpenInfo(true);
  const handleCloseInfo = () => setOpenInfo(false);

  const handleShowError = () => setOpenError(true);
  const handleCloseError = () => setOpenError(false);

  const handleShowWarning = () => setOpenWarning(true); // ✅ فتح warning
  const handleCloseWarning = () => setOpenWarning(false); // ✅ غلق warning

  return (
    <>
      <main
        style={{
          padding: 100,
          height: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="titleSpecial" color="initial" fontSize={"50px"}>
          {" "}
          COMMING SOON .
        </Typography>

        {/* ✅ التوستات */}
        <ToastItem
          open={openSuccess}
          onClose={handleCloseSuccess}
          message="this is an success message"
          type="success"
        />

        <ToastItem
          open={openInfo}
          onClose={handleCloseInfo}
          message="this is an info message"
          type="info"
        />

        <ToastItem
          open={openWarning}
          onClose={handleCloseWarning}
          message="this is an warning message"
          type="warning"
        />

        <ToastItem
          open={openError}
          onClose={handleCloseError}
          message="this is an error message"
          type="error"
        />
         <Stack direction="column" spacing={2} mt={4}>
          <Button variant="contained" onClick={() => window.location.href = '/brandProfile'}>
            Go To Brand Profile
          </Button>
          </Stack>
   
      </main>
    </>
  );
}
