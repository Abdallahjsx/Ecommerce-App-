"use client";

import ProfileForm from "@/features/Profile/components/ProfileForm";
import ProfileTabs from "@/features/Profile/components/ProfileTabs";
import { useState } from "react";
import { Box } from "@mui/material";
import ShippingAddress from "@/features/Profile/components/ShippingAddress";
import PaymentMethod from "@/features/Profile/components/PaymentMethod";
import Reviews from "@/features/Profile/components/Reviews";
import OrderContent from "@/features/Profile/components/OrderContent";

const MyProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <ProfileForm />;
      case 1:
        return <Box sx={{ p: 4 }}><ShippingAddress/></Box>;
      case 2:
        return <Box sx={{ p: 4 }}><PaymentMethod/></Box>;
      case 3:
        return <Box sx={{ p: 4 }}><Reviews/></Box>;
      case 4:
        return <Box sx={{ p: 4 }}><OrderContent/></Box>;
      default:
        return <ProfileForm />;
    }
  };

  return (
    <Box>
      <ProfileTabs activeTab={activeTab} onChange={setActiveTab} />
      {renderContent()}
    </Box>
  );
};

export default MyProfilePage;
