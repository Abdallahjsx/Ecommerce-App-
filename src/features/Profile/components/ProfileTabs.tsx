"use client";

import { Box, Tabs, Tab } from "@mui/material";


const tabs = [
  "Profile",
  "Shipping Address",
  "Payment Method",
  "Reviews",
  "My Orders",
];

export default function ProfileTabs({
  activeTab,
  onChange,
}: {
  activeTab: number;
  onChange: (newValue: number) => void;
}) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider", mb: 4 }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
            fontSize: "16px",
            minWidth: 120,
            color: "#838AB2",
            "&.Mui-selected": {
              background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
          },
          "& .MuiTabs-indicator": {
            background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
            height: 3,
            borderRadius: "4px",
          },
        }}
      >
        {tabs.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
    </Box>
  );
}
