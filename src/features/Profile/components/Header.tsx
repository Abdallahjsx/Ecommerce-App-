"use client";

import { Box, Typography, Avatar, IconButton, Stack, CircularProgress } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import userImg from "../../../../public/assets/images/user-img.png";
import { useRef } from "react";
import { useUpdateProfileImage } from "../hooks/useProfileActions";
import { useUser } from "../../user/hooks/useUser";



const recentlyViewed = [
  { id: 1, image: "/assets/images/user-img.png" },
  { id: 2, image: "/assets/images/user-img2.png" },
  { id: 3, image: "/assets/images/User.png" },
  { id: 4, image: "/assets/images/user-img.png" },
  { id: 5, image: "/assets/images/user-img2.png" },
];

const Header = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user } = useUser();
  const { mutate: updateImage, isPending: isUploading } = useUpdateProfileImage();


  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      updateImage(file);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
      {/* Profile Avatar Section */}
      <Box sx={{ position: "relative", mb: 2 }}>
        <Avatar
          src={user?.profileImageUrl || userImg.src}
          sx={{
            width: 230,
            height: 230,
            border: "14px solid white",
            boxShadow: "0px 10px 20px rgba(71, 192, 210, 0.3)",
            opacity: isUploading ? 0.6 : 1,
            transition: "opacity 0.3s ease",
          }}
        />
        {isUploading && (
          <CircularProgress
            size={60}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-30px",
              marginLeft: "-30px",
              color: "#47C0D2",
            }}
          />
        )}
        <IconButton
          onClick={handleEditClick}
          disabled={isUploading}
          sx={{
            position: "absolute",
            top: 10,
            right: 20,
            background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
            color: "white",
            "&:hover": { backgroundColor: "#3BB0C1" },
            width: 40,
            height: 40,
            zIndex: 2,
          }}
        >
          <EditIcon sx={{ fontSize: 22 }} />
        </IconButton>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />
      </Box>

      {/* Stats Section */}
      <Stack direction="row" spacing={4} sx={{ mb: 3 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="textSecondary">
            Following
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            50
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="textSecondary">
            Orders
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            5
          </Typography>
        </Box>
      </Stack>

      {/* Recently Viewed Section */}
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h6" fontSize='32px' gutterBottom color="rgba(27, 35, 81, 1)" fontWeight="bold">
          Recently viewed
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="center" sx={{ flexWrap: "wrap", gap: 2 }}>
          {recentlyViewed.map((item) => (
            <Avatar
              key={item.id}
              src={item.image}
              sx={{
                width: 100,
                height: 100,
                border: "8px solid white",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Header;

