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

export interface DateInputProps {
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  myform?: FormikProps<any>;
}

export default function DateInput({
  name,
  label,
  placeholder = "DD/MM/YYYY",
  error,
  myform,
}: DateInputProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const fieldValue = myform ? myform.values[name] : undefined;
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
        width: "278px",
      }}
    >
      {/* Label */}
      <Typography variant="inputLabel" color="primary">
        {label}
      </Typography>

      {/* ✅ DatePicker */}
      <DatePicker
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        value={fieldValue ? dayjs(fieldValue) : null}
        onChange={(value) => {
          if (myform) {
            myform.setFieldValue(name, value ? value.toISOString() : "");
          }
        }}
        enableAccessibleFieldDOMStructure={false}
        slots={{
          textField: (params) => {
            // ✅ ناخد فقط الخصائص الآمنة
            const { inputProps, InputProps, ...rest } = params;
            return (
              <TextField
                {...rest}
                inputProps={inputProps}
                InputProps={{
                  ...InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setOpen(true)}>
                        <img
                          src={"/assets/icons/calendar-icon.svg"}
                          alt="calendar icon"
                          width={20}
                          height={20}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                name={name}
                placeholder={placeholder}
                error={!!fieldError}
                fullWidth
                variant="outlined"
                value={fieldValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  if (myform) myform.handleChange(e);
                }}
                onBlur={myform ? myform.handleBlur : undefined}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    backgroundColor: "white",
                    boxShadow: "0px 4px 4px 0px #00000040",
                    "& fieldset": { border: "none" },
                  },
                  "& input": { paddingRight: "40px" },
                }}
              />
            );
          },
        }}
      />

      {/* Error Message */}
      {fieldError && (
        <Typography
          color={theme.tokens?.typographyColors?.danger || "red"}
          variant="inputError"
          sx={{ padding: "0 8px", marginTop: "4px" }}
        >
          {fieldError as string}
        </Typography>
      )}
    </div>
  );
}
