"use client";

import {
  TextField,
  InputAdornment,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import { FormikProps } from "formik";
import { ChangeEvent, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Dayjs } from "dayjs";
import { CalendarIcon } from "@/iconsComponents/all";

export type DateInputProps =
  {
    value: Dayjs | null,
    onChange: (value: Dayjs | null) => void,
    error: boolean | undefined,
    helperText: string | undefined,
    myform: FormikProps<any> | null,
    name: string
  }

export default function DateInput({
  value, onChange, error, helperText, myform, name
}: DateInputProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  // const fieldValue = myform ? myform.values[name] : undefined;
  const fieldError = myform
    ? (myform.touched[name] && myform.errors[name]) || ""
    : error;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        opacity: 1,
        marginBottom: 20,
        width: "100%",
      }}
    >
      {/* Label */}
      <Typography variant="inputLabel" color="primary">
        Date of Birth
      </Typography>

      {/* ✅ DatePicker */}
      <DatePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={value}
        onChange={(newValue) => {
          if (myform) {
            myform.setFieldValue(name, newValue);
          } else {
            onChange(newValue);
          }
        }}
        slots={{
          openPickerIcon: CalendarIcon,
        }}
        slotProps={{
          textField: {
            name,
            placeholder: "MM/DD/YYYY",
            error: !!fieldError,
            fullWidth: true,
            variant: "outlined",
            onBlur: myform ? myform.handleBlur : undefined,
            sx: {
              "& .mui-kivzo8-MuiPickersInputBase-root-MuiPickersOutlinedInput-root": {
                borderRadius: "8px",
                backgroundColor: "white",
                boxShadow: "0px 4px 4px 0px #00000040",
                "& fieldset": {
                  border: '1px solid #bdbdbdff',
                  borderColor: error ? "red" : "#bdbdbdff"
                },
                "&:hover fieldset": {
                  border: '1px solid',
                  borderColor: error ? "red" : "#1B2351"
                },
                "&:focus fieldset": {
                  border: '1px solid',
                  borderColor: error ? "red" : "#1B2351 !important"
                },
              }
            },
          },
        }} />

      {/* Error Message */}
      {error && (
        <Typography
          color={theme.tokens?.typographyColors?.danger || "red"}
          variant="inputError"
          sx={{ padding: "0 8px", marginTop: "4px" }}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
}
