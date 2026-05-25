import * as yup from "yup";

export const addressSchema = yup.object().shape({
  country: yup.string().required("Country is required"),
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be lmore than 3 chrs."),
  lastName: yup
    .string()
    .required(`Last name is required`)
    .min(3, "username must be lmore than 3 chrs."),
  streetAddress: yup.string().required("Street address is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^(10|11|12|15)\d{8}$/, "Invalid phone number"),
  city: yup.string().required("City is required"),
  postcode: yup.string().nullable(),
  building: yup.string().nullable(),
  apartment: yup.string().nullable(),
  floor: yup.string().nullable(),
});
