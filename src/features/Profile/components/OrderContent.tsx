"use client";

import { Box, Typography, Stack, Paper, IconButton, Grid, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import BlockIcon from "@mui/icons-material/Block";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";

const ProductCollage = ({ images }: { images: string[] }) => {
  return (
    <Box
      sx={{
        width: 140,
        height: 140,
        borderRadius: "12px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "2px",
        backgroundColor: "#fff",
        flexShrink: 0,
      }}
    >
      {images.slice(0, 4).map((src, idx) => (
        <Box key={idx} sx={{ position: "relative", width: "100%", height: idx === 0 && images.length === 3 ? "100%" : "100%", gridRow: idx === 0 && images.length === 3 ? "span 1" : "span 1" }}>
           <Image src={src} fill style={{ objectFit: "cover" }} alt="product" />
        </Box>
      ))}
    </Box>
  );
};

const OrderItem = ({ id, delivery, status, items, images }: { id: string; delivery: string; status: string; items: number; images: string[] }) => {
  const isPacked = status === "Packed";

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: "16px",
        backgroundColor: "#E4F0F0",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "stretch" },
        gap: 2,
        position: "relative",
      }}
    >
      <ProductCollage images={images} />
      
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", py: 0.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="body1" fontWeight={800} color="primary" sx={{ mb: 1.5 }}>
              Order #{id}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1.5, fontWeight: 500 }}>
              {delivery}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#fff",
              px: 1.5,
              py: 0.5,
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <Typography variant="caption" fontWeight={600} color="primary">
              {items} items
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ mt: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1" fontWeight={800} color="primary">
              {status}
            </Typography>
            {status === "Delivered" && <CheckCircleIcon sx={{ fontSize: 20, color: "#47C0D2" }} />}
          </Stack>
          
          {isPacked ? (
            <Gradient_Button
              variant="primary"
              sx={{
                borderRadius: "100px",
                height: "36px",
                width: "120px",
                fontSize: "14px",
                fontWeight: 600,
                background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
              }}
            >
              Track
            </Gradient_Button>
          ) : (
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                textTransform: "capitalize",
                borderColor: "#1B2351",
                color: "#1B2351",
                fontWeight: 600,
                px: 3,
                "&:hover": {
                  borderColor: "#47C0D2",
                  color: "#47C0D2",
                }
              }}
            >
              Review
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};

const OrderContent = () => {
  const [activeFilter, setActiveFilter] = React.useState<"delivery" | "box" | "cancelled">("box");

  const allOrders = [
    {
      id: "92287157",
      delivery: "Standard Delivery",
      status: "Delivered",
      items: 3,
      images: ["/assets/images/user-img.png", "/assets/images/user-img2.png", "/assets/images/Woman Bag.png"],
      type: "box",
    },
    {
      id: "92287157",
      delivery: "Standard Delivery",
      status: "Packed",
      items: 4,
      images: ["/assets/images/Shoes1.png", "/assets/images/shoes2.png", "/assets/images/user-img2.png", "/assets/images/Woman Bag.png"],
      type: "box",
    },
    {
      id: "92287157",
      delivery: "Bike Delivery",
      status: "On the way",
      items: 4,
      images: ["/assets/images/Shoes1.png", "/assets/images/shoes2.png", "/assets/images/user-img2.png", "/assets/images/user-img.png"],
      type: "delivery",
    },
    {
      id: "92287159",
      delivery: "Cancelled",
      status: "Rejected",
      items: 1,
      images: ["/assets/images/Shoes1.png"],
      type: "cancelled",
    },
  ];

  const filteredOrders = allOrders.filter(order => order.type === activeFilter);

  return (
    <Box sx={{ maxWidth: 850, mx: "auto",  px: { xs: 2, sm: 0 } }}>
      {/* Filter Bar */}
      <Stack direction="row" spacing={4} sx={{ mb: 4, borderBottom: "1px solid rgba(0,0,0,0.05)", pb: 1 }}>
        <Box sx={{ borderBottom: activeFilter === "delivery" ? "3px solid #1B2351" : "none", pb: 1, mb: "-5px" }}>
          <IconButton size="small" onClick={() => setActiveFilter("delivery")}>
            <TwoWheelerIcon sx={{ color: activeFilter === "delivery" ? "#1B2351" : "rgba(0,0,0,0.3)" }} />
          </IconButton>
        </Box>
        <Box sx={{ borderBottom: activeFilter === "box" ? "3px solid #1B2351" : "none", pb: 1, mb: "-5px" }}>
          <IconButton size="small" onClick={() => setActiveFilter("box")}>
            <Inventory2Icon sx={{ color: activeFilter === "box" ? "#1B2351" : "rgba(0,0,0,0.3)" }} />
          </IconButton>
        </Box>
        <Box sx={{ borderBottom: activeFilter === "cancelled" ? "3px solid #1B2351" : "none", pb: 1, mb: "-5px" }}>
          <IconButton size="small" onClick={() => setActiveFilter("cancelled")}>
            <BlockIcon sx={{ color: activeFilter === "cancelled" ? "#1B2351" : "rgba(0,0,0,0.3)" }} />
          </IconButton>
        </Box>
      </Stack>

      <Box>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order, idx) => (
            <OrderItem key={idx} {...order} />
          ))
        ) : (
          <Typography variant="body2" sx={{ textAlign: "center", py: 4, color: "textSecondary" }}>
            No orders found for this category.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default OrderContent;
