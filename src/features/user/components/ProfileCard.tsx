"use client";
import { Box } from "@mui/material";
import useUser  from "../hooks/useUser";
import GuestProfileCard from "./GuestProfileCard";
import LoggedInProfileCard from "./LoggedInProfileCard";

const ProfileCard = () => {
  const { isLoggedIn } = useUser();

  return (
    <Box sx={{ width: "100%" }}>
      {isLoggedIn ? <LoggedInProfileCard /> : <GuestProfileCard />}
    </Box>
  );
};

export default ProfileCard;




