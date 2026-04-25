"use client";

import { Box, Typography } from "@mui/material";
import { useFormik } from "formik";
import TextInput from "@/components/ui/textInput/TextInput";

export default function CheckoutForm() {
  const formik = useFormik({
    initialValues: {
      country: "Egypt",
      firstName: "",
      lastName: "",
      streetAddress: "",
      phoneNumber: "",
      city: "",
      postcode: "",
    },
    onSubmit: () => {},
  });

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "664px",
      }}
    >
     
      <Box
        sx={{
          width: "664px",
          height: "36px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Manrope",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "36px",
            letterSpacing: "-0.75px",
            color: "#040C3C",
          }}
        >
          Shipping details
        </Typography>
      </Box>

     
      <Box sx={{ marginTop: "32px" }}>
        <TextInput
          myform={formik}
          name="country"
          label="COUNTRY / REGION"
          placeholder=""
          disabled
          customSx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(120, 234, 253, 0.2)",
              borderRadius: "8px",
              height: "56px",
              padding: "16px",
              boxShadow: "none",
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
      </Box>

      
      <Box
        sx={{
          marginTop: "24px",
          display: "flex",
          gap: "24px",
        }}
      >
        <Box sx={{ width: "320px" }}>
          <TextInput
            myform={formik}
            name="firstName"
            label="FIRST NAME"
            placeholder="e.g. Adam"
            customSx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(120, 234, 253, 0.2)",
                borderRadius: "8px",
                height: "56px",
                padding: "16px",
              },
            }}
          />
        </Box>

        <Box sx={{ width: "320px" }}>
          <TextInput
            myform={formik}
            name="lastName"
            label="LAST NAME"
            placeholder="e.g. Smith"
            customSx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(120, 234, 253, 0.2)",
                borderRadius: "8px",
                height: "56px",
                padding: "16px",
              },
            }}
          />
        </Box>
      </Box>

     
      <Box
        sx={{
          marginTop: "24px",
          display: "flex",
          gap: "24px",
        }}
      >
        <Box sx={{ width: "320px" }}>
          <TextInput
            myform={formik}
            name="streetAddress"
            label="STREET ADDRESS"
            placeholder="Street name and house number"
            customSx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(120, 234, 253, 0.2)",
                borderRadius: "8px",
                height: "56px",
                padding: "16px",
              },
            }}
          />
        </Box>

        <Box sx={{ width: "320px" }}>
          <TextInput
            myform={formik}
            name="phoneNumber"
            label="PHONE NUMBER"
            placeholder="e.g. +20 100 000 0000"
            customSx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(120, 234, 253, 0.2)",
                borderRadius: "8px",
                height: "56px",
                padding: "16px",
              },
            }}
          />
        </Box>
      </Box>

    
      <Box
        sx={{
          marginTop: "24px",
          display: "flex",
          gap: "24px",
        }}
      >
        <Box sx={{ width: "320px" }}>
          <TextInput
            myform={formik}
            name="city"
            label="TOWN / CITY"
            placeholder="e.g. Cairo"
            customSx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(120, 234, 253, 0.2)",
                borderRadius: "8px",
                height: "56px",
                padding: "16px",
              },
            }}
          />
        </Box>

        <Box sx={{ width: "320px" }}>
          <TextInput
            myform={formik}
            name="postcode"
            label="POSTCODE (OPTIONAL)"
            placeholder="e.g. 12345"
            customSx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "rgba(120, 234, 253, 0.2)",
                borderRadius: "8px",
                height: "56px",
                padding: "16px",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
