"use client";

import NavBar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";



import { useState } from "react";
import { Button, Stack } from "@mui/material";
import ToastItem from "@/components/ui/toaster/Toast-Item";

export default function Page() {
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
    
      <main style={{ padding: 40 }}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="success"
            onClick={handleShowSuccess}
          >
            Show Success Toast
          </Button>

          <Button variant="contained" color="info" onClick={handleShowInfo}>
            Show Info Toast
          </Button>

          <Button
            variant="contained"
            color="warning"
            onClick={handleShowWarning}
          >
            Show Warning Toast
          </Button>

          <Button variant="contained" color="error" onClick={handleShowError}>
            Show Error Toast
          </Button>
        </Stack>

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
