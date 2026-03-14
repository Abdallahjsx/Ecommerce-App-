"use client";

import { Box } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";

interface ReelOlderPopularProps {
  selected: "Older" | "Popular";
  setSelected: (value: "Older" | "Popular") => void;
}

export default function ReelOlderPopular({
  selected,
  setSelected,
}: ReelOlderPopularProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px 15px",
        borderWidth: "1px",
        borderColor: "rgba(27, 35, 81, 1)",
        borderStyle: "solid",
        borderRadius: "10px",
        gap: 2,
        width: "fit-content",
        ml: { md: "auto" },
      }}
    >
      <Gradient_Button
        variant={selected === "Older" ? "primary" : "text"}
        onClick={() => setSelected("Older")}
        sx={{
          minWidth: "80px",
          color: selected === "Older" ? "white" : "inherit",
        }}
      >
        Older
      </Gradient_Button>

      <Gradient_Button
        variant={selected === "Popular" ? "primary" : "text"}
        onClick={() => setSelected("Popular")}
        sx={{
          minWidth: "80px",
          color: selected === "Popular" ? "white" : "inherit",
        }}
      >
        Popular
      </Gradient_Button>
    </Box>
  );
}
