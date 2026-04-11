"use client";

import React from "react";
import { Dialog, Box, Typography, Stack, IconButton } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";
import TextInput from "@/components/ui/textInput/TextInput";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";

interface CardValues {
  id?: string;
  brand: "visa" | "mastercard";
  last4: string;
  name: string;
  expiry: string;
  cardNumber?: string;
  cvv?: string;
}

interface CardModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  initialValues?: CardValues | null;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Cardholder name is required"),
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^\d{16}$/, "Must be 16 digits"),
  expiry: Yup.string()
    .required("Required")
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "MM/YY"),
  cvv: Yup.string()
    .required("Required")
    .matches(/^\d{3,4}$/, "3-4 digits"),
});

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#F0F9FA",
    borderRadius: "12px",
    "& fieldset": { border: "none" },
  },
  "& .MuiInputBase-input": {
    color: "#1B2351",
    fontWeight: 500,
  }
};

const CardModal: React.FC<CardModalProps> = ({
  open,
  onClose,
  onSubmit,
  initialValues,
}) => {
  const isEdit = !!initialValues;

  const defaultValues = {
    name: initialValues?.name || "",
    cardNumber: initialValues?.cardNumber || "",
    expiry: initialValues?.expiry || "",
    cvv: initialValues?.cvv || "",
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "32px",
          padding: "32px",
          maxWidth: "500px",
          width: "100%",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: -10,
            top: -10,
            color: "#838AB2",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h5"
          sx={{
            color: "#1B2351",
            fontWeight: 800,
            mb: 3,
            textAlign: "center"
          }}
        >
          {isEdit ? "Edit Card" : "Add New Card"}
        </Typography>

        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSubmit(values);
            onClose();
          }}
          enableReinitialize
        >
          {(formik) => (
            <Form>
              <Stack spacing={0.5}>
                <TextInput
                  name="name"
                  label="Cardholder Name"
                  placeholder="e.g. AMANDA MORGAN"
                  myform={formik}
                  customSx={inputStyle}
                />
                
                <TextInput
                  name="cardNumber"
                  label="Card Number"
                  placeholder="**** **** **** ****"
                  myform={formik}
                  customSx={inputStyle}
                />

                <Stack direction="row" spacing={2}>
                  <Box sx={{ flex: 1 }}>
                    <TextInput
                      name="expiry"
                      label="Expiry Date"
                      placeholder="MM/YY"
                      myform={formik}
                      customSx={inputStyle}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <TextInput
                      name="cvv"
                      label="CVV"
                      placeholder="***"
                      type="password"
                      myform={formik}
                      customSx={inputStyle}
                    />
                  </Box>
                </Stack>

                <Gradient_Button
                  type="submit"
                  variant="primary"
                  sx={{
                    mt: 3,
                    background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
                    borderRadius: "12px",
                    height: "56px",
                    fontWeight: 700,
                  }}
                >
                  {isEdit ? "Save Changes" : "Add Card"}
                </Gradient_Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Dialog>
  );
};

export default CardModal;
