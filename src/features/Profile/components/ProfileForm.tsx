"use client";

import { Box, Typography, Switch, Stack, CircularProgress } from "@mui/material";
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
import { useUser } from "../../user/hooks/useUser";

const validationSchema = Yup.object().shape(
  {
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone is required"),
    currentPassword: Yup.string().when("password", {
      is: (val: string) => val && val.length > 0,
      then: (schema) => schema.required("Current password is required to set a new one"),
      otherwise: (schema) => schema.notRequired(),
    }),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .when("currentPassword", {
        is: (val: string) => val && val.length > 0,
        then: (schema) => schema.required("New password is required"),
        otherwise: (schema) => schema.notRequired(),
      })
      .test(
        "passwords-match",
        "New password must be different from current password",
        function (value) {
          return !value || value !== this.parent.currentPassword;
        }
      ),
  },
  [
    ["password", "currentPassword"], // 🔹 This is how you tell Yup to resolve cyclic dependencies
  ]
);



export default function ProfileForm() {
  const [notifications, setNotifications] = useState(true);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);


  const { user, loading: isUserLoading } = useUser();
  const { mutate: updateProfile, isPending: isUpdatingProfile } = useUpdateProfile();
  const { mutate: updatePassword, isPending: isUpdatingPassword } = useUpdatePassword();
  const { mutate: deleteAccount, isPending: isDeleting } = useDeleteAccount();

  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    currentPassword: "",
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
    if (values.password && values.currentPassword) {
      updatePassword({
        currentPassword: values.currentPassword,
        newPassword: values.password,
      });
    }
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#D9EAEA",
      borderRadius: "12px",
      "& fieldset": { border: "none" },
      "&.Mui-focused": {
        backgroundColor: "#D9EAEA",
      },
    },
    "& .MuiInputBase-input": {
      color: "#1B2351",
      fontWeight: 500,
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #D9EAEA inset",
        WebkitTextFillColor: "#1B2351",
      },
    },
  };


  if (isUserLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 8 }}>
        <CircularProgress color="primary" size={40} />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
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
              disabled={true} // Email usually fixed for identity or handled separately
              customSx={{ ...inputStyle, opacity: 0.7 }}
            />
            <TextInput
              name="phoneNumber"
              placeholder="Phone Number"
              myform={formik}
              hideLabel
              customSx={inputStyle}
            />

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: showPasswordChange ? 1 : 2, mt: 3 }}
            >
              <Typography variant="body1" color="primary" fontWeight={500}>
                Change Password
              </Typography>
              <Switch
                checked={showPasswordChange}
                onChange={(e) => setShowPasswordChange(e.target.checked)}
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

            {showPasswordChange && (
              <Stack spacing={2} sx={{ mb: 2 }}>
                <TextInput
                  name="currentPassword"
                  type="password"
                  placeholder="Current Password"
                  myform={formik}
                  hideLabel
                  customSx={inputStyle}
                />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="New Password"
                  myform={formik}
                  hideLabel
                  customSx={inputStyle}
                />
              </Stack>
            )}

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 4, mt: 2 }}
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


