"use client";
import { Box } from "@mui/material";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import TextInput from "@/components/ui/textInput/TextInput";
import DateInput from "@/components/ui/dateInput/DateInput";
import NavBar from "@/components/layout/navbar/NavBar";
import Footer from "@/components/layout/footer/Footer";

export default function Page() {
  return (
    <main >
      <NavBar/>
      {/* <SideBar/> */}
      <Box sx={{minHeight:600}}></Box>
      {/* <Box display="flex" flexDirection="column" gap={4} style={{ padding: "40px" }}>
        <Gradient_Button size="large">SIGN IN</Gradient_Button>
        <Gradient_Button size="large">LOG IN</Gradient_Button>

        <TextInput label="First Name" placeholder="Enter your first name" />

        <DateInput label="Birthday" />
      </Box> */}
      <Footer/>
    </main>
  );
}
