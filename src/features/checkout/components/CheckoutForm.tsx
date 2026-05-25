"use client";

import { Box, Typography, Grid } from "@mui/material";
import { useFormik } from "formik";
import TextInput from "@/components/ui/textInput/TextInput";
import { addressSchema } from "../schema/addressSchema";
import { useState, useEffect } from "react";
import type { AddressType, AddAddressType, Formik } from "@/features/checkout/types";

export default function CheckoutForm({ selectedAddress, formik, disabled }: { selectedAddress: AddressType | null, formik: Formik, disabled: boolean }) {
  const [editMode, setEditMode] = useState(false)
  useEffect(() => {
    if (!selectedAddress) {
      setEditMode(true);
      formik.resetForm();
    }
    else {

      formik.setFieldValue("country", selectedAddress.country);
      formik.setFieldValue("firstName", selectedAddress.name);
      formik.setFieldValue("lastName", selectedAddress.lastName);
      formik.setFieldValue("streetAddress", selectedAddress.street);
      formik.setFieldValue("phoneNumber", selectedAddress.phoneNumber);
      formik.setFieldValue("city", selectedAddress.city);
      formik.setFieldValue("postcode", selectedAddress.postcode || selectedAddress.postcode?.trim() === '' ? 'N/A' : selectedAddress.postcode);
      formik.setFieldValue("building", selectedAddress.building || selectedAddress.building?.trim() === '' ? 'N/A' : selectedAddress.building);
      formik.setFieldValue("apartment", selectedAddress.apartment || selectedAddress.apartment?.trim() === '' ? 'N/A' : selectedAddress.apartment);
      formik.setFieldValue("floor", selectedAddress?.floor || selectedAddress.floor?.trim() === '' ? 'N/A' : selectedAddress.floor);
      setEditMode(false);
    }
  }, [selectedAddress]);


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
      <Grid container spacing={3} mt={"50px"}>
        <Grid width={"100%"} >
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="country"
            label="COUNTRY / REGION"
            placeholder="e.g. Egypt"
          />
        </Grid>
        <Grid width={"100%"} sx={{
          display: "flex", justifyContent: "space-between", gap: "32px", flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}>
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="firstName"
            label="FIRST NAME"
            placeholder="e.g. Adam"
          />
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="lastName"
            label="LAST NAME"
            placeholder="e.g. Smith"
          />
        </Grid>



        <Grid width={"100%"} sx={{
          display: "flex", justifyContent: "space-between", gap: "32px", flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}>
          <CustomTextInput
            disabled={disabled}
            type={editMode ? "tel" : "text"}
            editMode={editMode}
            myform={formik}
            name="phoneNumber"
            label="PHONE NUMBER"
            placeholder="e.g. 100 000 0000"
          />
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="postcode"
            label="POSTCODE (OPTIONAL)"
            placeholder="e.g. 12345"
          />
        </Grid>


        <Grid width={"100%"} sx={{
          display: "flex", justifyContent: "space-between", gap: "32px", flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}>
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="city"
            label="TOWN / CITY"
            placeholder="e.g. Cairo"
          />
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="streetAddress"
            label="STREET"
            placeholder="Street name and house number"
          />
        </Grid>
        <Grid width={"100%"} sx={{
          display: "flex", justifyContent: "space-between", gap: "32px", flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}>
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="building"
            label="BUILDING (OPTIONAL)"
            placeholder="12"
          />
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="floor"
            label="FLOOR (OPTIONAL) "
            placeholder="12"
          />
          <CustomTextInput
            disabled={disabled}
            editMode={editMode}
            myform={formik}
            name="apartment"
            label="APARTMENT (OPTIONAL)"
            placeholder="12"
          />
        </Grid>
      </Grid>
    </Box>
  );
}


function CustomTextInput({ label, placeholder, myform, name, editMode, type = "text", disabled }: { label: string, placeholder: string, myform: any, name: string, editMode: boolean, type?: string, disabled: boolean }) {
  return (
    <Box sx={{ width: "100%" }}>
      <TextInput
        type={type}
        myform={myform}
        name={name}
        label={label}
        placeholder={placeholder}
        disabled={disabled || !editMode}
        customSx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: editMode ? "rgba(120, 234, 253, 0.2)" : "white",
            borderRadius: "8px",
            height: "56px",
            padding: "16px",
          },
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: editMode ? "" : "none"
          }
        }}
      />
    </Box>
  )
}
