"use client";

import { Box, Typography, Stack, Grid, CircularProgress } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "@/components/ui/textInput/TextInput";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";
import { 
  useShippingAddresses, 
  useAddShippingAddress, 
  useUpdateShippingAddress, 
  useDeleteShippingAddress 
} from "../hooks/useShippingActions";
import { ShippingAddressRequest } from "../types";

const addressValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  shippingLastName: Yup.string().required("Last Name is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  street: Yup.string().required("Street address is required"),
  postcode: Yup.string().required("Postcode is required"),
  phoneNumber: Yup.string().required("Phone is required"),
});

const AddressCard = ({ 
  id, 
  initialValues, 
  isNew = false, 
  onCancel 
}: { 
  id?: number; 
  initialValues: ShippingAddressRequest; 
  isNew?: boolean;
  onCancel?: () => void;
}) => {
  const { mutate: updateAddress, isPending: isUpdating } = useUpdateShippingAddress();
  const { mutate: deleteAddress, isPending: isDeleting } = useDeleteShippingAddress();
  const { mutate: addAddress, isPending: isAdding } = useAddShippingAddress();

  const isPending = isUpdating || isDeleting || isAdding;

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#D9EAEA",
      borderRadius: "12px",
      "& fieldset": { border: "none" },
    },
    "& .MuiInputBase-input": {
      color: "#1B2351",
      fontWeight: 500,
    },
  };

  const handleSubmit = (values: ShippingAddressRequest) => {
    if (isNew) {
      addAddress(values, {
        onSuccess: () => onCancel?.()
      });
    } else if (id) {
      updateAddress({ id, data: values });
    }
  };

  return (
    <Box sx={{ mb: 4, width: "100%", position: "relative" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="h6" color="primary" fontWeight={600}>
          {isNew ? "New Address" : `Address ${id}`}
        </Typography>
        <InfoOutlinedIcon sx={{ color: "#47C0D2", fontSize: 20 }} />
      </Stack>
      <Formik
        initialValues={initialValues}
        validationSchema={addressValidationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <Grid container spacing={2}>
              <Grid size={{ xs: 6 }}>
                <TextInput name="name" placeholder="First Name" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <TextInput name="shippingLastName" placeholder="Last Name" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextInput name="country" placeholder="Country" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextInput name="street" placeholder="Street / Address" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <TextInput name="city" placeholder="Town / City" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              <Grid size={{ xs: 6 }}>
                <TextInput name="postcode" placeholder="Postcode" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextInput name="phoneNumber" placeholder="Phone Number" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              {/* Optional fields for building/floor/etc. */}
              <Grid size={{ xs: 4 }}>
                <TextInput name="shippingBuilding" placeholder="Building" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <TextInput name="shippingFloor" placeholder="Floor" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <TextInput name="shippingApartment" placeholder="Apartment" myform={formik} hideLabel customSx={inputStyle} />
              </Grid>
            </Grid>
            
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Gradient_Button
                type="submit"
                disabled={isPending}
                sx={{
                  background: "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)",
                  borderRadius: "8px",
                  flex: 2,
                  height: "40px"
                }}
              >
                {isNew ? (isAdding ? "Adding..." : "Add Address") : (isUpdating ? "Saving..." : "Save Changes")}
              </Gradient_Button>
              <Gradient_Button
                onClick={() => isNew ? onCancel?.() : (id && deleteAddress(id))}
                disabled={isPending}
                state="danger"
                sx={{
                  borderRadius: "8px",
                  flex: 1,
                  height: "40px"
                }}
              >
                {isNew ? "Cancel" : (isDeleting ? "Deleting..." : "Delete")}
              </Gradient_Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const ShippingAddress = () => {
  const { data: response, isLoading } = useShippingAddresses();
  const [isAddingNew, setIsAddingNew] = useState(false);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress color="primary" />
      </Box>
    );
  }

  const addresses = response?.data || [];

  const emptyAddress: ShippingAddressRequest = {
    name: "",
    shippingLastName: "",
    country: "",
    street: "",
    city: "",
    postcode: "",
    phoneNumber: "",
    isDefault: false,
    shippingBuilding: "",
    shippingFloor: "",
    shippingApartment: "",
  };

  return (
    <Box sx={{ maxWidth: 650, mx: "auto", mt: 2, px: { xs: 2, sm: 0 }, pb: 6 }}>
      {addresses.map((addr) => (
        <AddressCard 
          key={addr.id} 
          id={addr.id} 
          initialValues={{
            name: addr.name,
            shippingLastName: addr.shippingLastName,
            country: addr.country,
            street: addr.street,
            city: addr.city,
            postcode: addr.postcode,
            phoneNumber: addr.phoneNumber,
            isDefault: addr.isDefault,
            shippingBuilding: addr.shippingBuilding,
            shippingFloor: addr.shippingFloor,
            shippingApartment: addr.shippingApartment,
          }} 
        />
      ))}

      {isAddingNew && (
        <AddressCard 
          isNew 
          initialValues={emptyAddress} 
          onCancel={() => setIsAddingNew(false)} 
        />
      )}
      
      {!isAddingNew && (
        <Gradient_Button
          onClick={() => setIsAddingNew(true)}
          variant="primary"
          sx={{
            mt: 2,
            mb: 4,
            borderRadius: "12px",
            height: "50px",
            background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
          }}
        >
          Add New Address
        </Gradient_Button>
      )}
    </Box>
  );
};

export default ShippingAddress;

