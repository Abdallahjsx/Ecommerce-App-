"use client";

import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import ToastItem from "@/components/ui/toaster/Toast-Item";

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
    
      <main style={{ padding: 40,height:"70%",display:"flex",justifyContent:"center",alignItems:"center" }}>
      <Typography variant="titleSpecial" color="initial" fontSize={"50px"}> COMMING  SOON .</Typography>

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
      </main>
    </>
  );
}
