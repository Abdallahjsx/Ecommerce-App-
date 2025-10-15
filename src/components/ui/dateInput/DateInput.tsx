"use client";

import {
  TextField,
  InputAdornment,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import calendarIcon from "../../../../public/assets/icons/calendar-icon.svg"; // موجود في src/icons/calendar.svg

export interface DateInputProps {
  label: string;
  placeholder?: string;
  error?: string;
}

export default function DateInput({
  label,
  placeholder = "DD/MM/YYYY",
  error,
}: DateInputProps) {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        opacity: 1,
        marginBottom: 20,
        width: "50%",
        margin: 12,
      }}
    >
      {/* Label */}
      <Typography variant="inputLabel">{label}</Typography>

      {/* Input with static Calendar Icon */}
      <TextField
        type="date"
        placeholder={placeholder}
        error={!!error}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: theme.tokens.inputsColors.background,
            border:"none",
            "& fieldset": {
              borderColor: theme.tokens.inputsColors.border,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.primary.main,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
              boxShadow: "0px 4px 8px rgba(27,35,81,0.4)",
            },
          },
          "& input": {
            paddingRight: `${theme.tokens.icons.calendar.width + 20}px`, // مساحة للأيقونة
            color: theme.tokens.typographyColors.body,
          },
          "& input::placeholder": {
            color: "red",
            opacity: 1,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Image
                src={calendarIcon}
                alt="calendar icon"
                width={theme.tokens.icons.calendar.width}
                height={theme.tokens.icons.calendar.height}
              />
            </InputAdornment>
          ),
        }}
      />

      {/* Error Message */}
      {error && (
        <Typography
          color={theme.tokens.typographyColors.danger}
          variant="inputError"
          sx={{
            padding: "0 8px",
            marginTop: "4px",
          }}
        >
          {error}
        </Typography>
      )}
    </div>
  );
}
