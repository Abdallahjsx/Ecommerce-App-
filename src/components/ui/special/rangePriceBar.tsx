import * as React from "react";
import Slider from "@mui/material/Slider";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "transparent",
  height: 3,
  padding: "13px 0",
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
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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
}));
// interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

// function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
//   const { children, ...other } = props;
//   return (
//     <SliderThumb {...other}>
//       {children}
//       <span className="airbnb-bar" />
//       <span className="airbnb-bar" />
//       <span className="airbnb-bar" />
//     </SliderThumb>
//   );
// }
export default function RangePriceBar({ value, onChange }: { value: number[], onChange: (event: Event, newValue: number[]) => void }) {

  return (
    <>
      <AirbnbSlider
        min={0}
        max={2000}
        step={5}
        defaultValue={[100, 800]}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        value={value}
        onChange={(event, newValue) => onChange(event, newValue as number[])}
        valueLabelDisplay="auto"


      />
    </>
  );
}
