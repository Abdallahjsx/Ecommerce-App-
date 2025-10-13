// "use client";
// import { Box } from "@mui/material";
// import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
// import TextInput from "@/components/ui/textInput/TextInput";
// import DateInput from "@/components/ui/dateInput/DateInput";
// import NavBar from "@/components/layout/navbar/NavBar";
// import Footer from "@/components/layout/footer/Footer";

// export default function Page() {
//   return (
//     <main >
//       <NavBar/>
//       {/* <SideBar/> */}
//       <Box sx={{minHeight:600}}></Box>
//       {/* <Box display="flex" flexDirection="column" gap={4} style={{ padding: "40px" }}>
//         <Gradient_Button size="large">SIGN IN</Gradient_Button>
//         <Gradient_Button size="large">LOG IN</Gradient_Button>

//         <TextInput label="First Name" placeholder="Enter your first name" />

//         <DateInput label="Birthday" />
//       </Box> */}
//       <Footer/>
//     </main>
//   );
// }

// import { useState } from "react";
// import Toast from "@/components/ui/toaster/Toast-Item";

// export default function Example() {
//   const [toast, setToast] = useState({
//     open: true,
//     type: "info" as "info" | "success" | "warning" | "error",
//     message: "This is an info message",
//   });

//   return (
//     <main style={{ padding: 40, display: "grid", gap: 16 }}>
//       <Toast
//         open={toast.open}
//         type={toast.type}
//         message={toast.message}
//         onClose={() => setToast(prev => ({ ...prev, open: false }))}
//       />
//     </main>
//   );
"use client";

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
    <main style={{ padding: 40 }}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={handleShowSuccess}>
          Show Success Toast
        </Button>

        <Button variant="contained" color="info" onClick={handleShowInfo}>
          Show Info Toast
        </Button>

        <Button variant="contained" color="warning" onClick={handleShowWarning}>
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
  );
}
