"use client";

import { Box, Typography, Switch, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/ui/textInput/TextInput";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  useUpdateProfile,
  useUpdatePassword,
  useDeleteAccount
} from "../hooks/useProfileActions";
import ConfirmationModal from "../../../components/ui/dialog/confirmationModal";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters"),
});

export default function ProfileForm() {
  const [notifications, setNotifications] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { mutate: updateProfile, isPending: isUpdatingProfile } = useUpdateProfile();
  const { mutate: updatePassword, isPending: isUpdatingPassword } = useUpdatePassword();
  const { mutate: deleteAccount, isPending: isDeleting } = useDeleteAccount();

  const initialValues = {
    firstName: "Ashrakat",
    lastName: "Rafaat",
    email: "gmail@example.com",
    phoneNumber: "+20 125555500",
    password: "",
  };

  const handleSubmit = (values: any) => {
    // Update Profile Info
    updateProfile({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
    });

    // If password is provided, update it
    if (values.password) {
      updatePassword({
        currentPassword: "Ash 1234", // This needs to be captured or coming from somewhere
        newPassword: values.password,
      });
    }
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#D9EAEA",
      borderRadius: "12px",
      "& fieldset": { border: "none" },
    },
    "& .MuiInputBase-input": {
      color: "#1B2351",
      fontWeight: 500,
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <Stack direction="row" spacing={2}>
              <TextInput
                name="firstName"
                placeholder="First Name"
                myform={formik}
                hideLabel
                customSx={inputStyle}
              />
              <TextInput
                name="lastName"
                placeholder="Last Name"
                myform={formik}
                hideLabel
                customSx={inputStyle}
              />
            </Stack>
            <TextInput
              name="email"
              placeholder="Email"
              myform={formik}
              hideLabel
              customSx={inputStyle}
            />
            <TextInput
              name="phoneNumber"
              placeholder="Phone Number"
              myform={formik}
              hideLabel
              customSx={inputStyle}
            />
            <TextInput
              name="password"
              type="password"
              placeholder="New Password (optional)"
              myform={formik}
              hideLabel
              customSx={inputStyle}
            />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 4 }}
            >
              <Typography variant="body1" color="primary" fontWeight={500}>
                Notifications
              </Typography>
              <Switch
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: "#47C0D2",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#47C0D2",
                  },
                }}
              />
            </Stack>

            <Stack spacing={2}>
              <Gradient_Button
                type="submit"
                variant="primary"
                disabled={isUpdatingProfile || isUpdatingPassword}
                sx={{
                  background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
                  boxShadow: "none",
                  borderRadius: "12px",
                  height: "56px",
                }}
              >
                {isUpdatingProfile || isUpdatingPassword ? "Saving..." : "Save Changes"}
              </Gradient_Button>

              <Gradient_Button
                variant="primary"
                state="danger"
                onClick={() => setIsDeleteModalOpen(true)}
                sx={{
                  borderRadius: "12px",
                  height: "56px",
                }}
              >
                Delete Account
              </Gradient_Button>
            </Stack>
          </Form>
        )}
      </Formik>

      <ConfirmationModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          deleteAccount();
          setIsDeleteModalOpen(false);
        }}
        isPending={isDeleting}
        message="You are going to delete your account"
        subMessage="You won't be able to restore your data"
        actionLabel="Delete"
        isPendingLabel="Deleting..."
      />
    </Box>
  );
}

