
"use client";
import { Box } from "@mui/material";
import Gradient_Button from "@/components/ui/buttons/Gradient_Button";
import TextInput from "@/components/ui/inputs/TextInput";
import DateInput from "@/components/ui/inputs/DateInput";

export default function Page() {
  return (
    <main style={{ padding: "40px" }}>
      <Box display="flex" flexDirection="column" gap={4}>
          <Gradient_Button size="large">SIGN IN</Gradient_Button>

          <TextInput label="First Name" placeholder="Enter your first name" />

          <DateInput label="Birthday" />
      </Box>
    </main>
  );
}




