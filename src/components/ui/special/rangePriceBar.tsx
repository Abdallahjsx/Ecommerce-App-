import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { SxProps, Theme } from "@mui/material";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "transparent",
  padding: "13px 0",
  "&.MuiSlider-horizontal": {
    height: "3px !important",
  },
  "&.MuiSlider-vertical": {
    width: "3px !important",
    height: "100% !important",
    minHeight: "300px",
    padding: "0 13px",
  },
  "& .MuiSlider-thumb": {
    height: "20px",
    width: "20px",
    backgroundColor: "#fff",
    border: "1px solid transparent",
    background: `
      linear-gradient(#fff, #fff) padding-box,
      linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) border-box
    `,
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
  },
  "& .MuiSlider-track": {
    height: "8px",
    border: "none",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  "&.MuiSlider-vertical .MuiSlider-track": {
    width: "8px",
    height: "auto",
    background: `linear-gradient(0deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
  "& .MuiSlider-rail": {
    color: "#d8d8d8",
    opacity: 1,
    height: "8px",
    ...theme.applyStyles("dark", {
      color: "#b61b1b",
      opacity: undefined,
    }),
  },
  "&.MuiSlider-vertical .MuiSlider-rail": {
    width: "8px",
    height: "100%",
  },
}));

export default function RangePriceBar({ value, onChange, orientation = "horizontal", sx }: { value: number[] | undefined | null, onChange: (event: Event, newValue: number[]) => void, orientation?: "horizontal" | "vertical", sx?: SxProps<Theme> }) {

  return (
    <AirbnbSlider
      orientation={orientation}
      min={0}
      max={2000}
      step={5}
      defaultValue={[100, 800]}
      getAriaLabel={(index) =>
        index === 0 ? "Minimum price" : "Maximum price"
      }
      value={value ?? [0, 0]}
      onChange={(event, newValue) => {
        if (Array.isArray(newValue)) {
          onChange(event, newValue);
        }
      }}
      valueLabelDisplay="auto"
      sx={sx}
    />
  );
}
