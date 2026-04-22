"use client";

import { Box, Typography, Stack, Container, Skeleton, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { useProducts } from "../../products/hooks/useProducts";
import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/navigation";

// Mock data for multiple brand offers
const OFFERS_DATA = [
  {
    id: "nike-offer",
    brandName: "Nike",
    officialText: "OFFICIAL PARTNER",
    title: "30% OFF",
    subTitle: "Spring Tech Essentials",
    buttonText: "Unlock Exclusive Access",
    bannerImage: "/assets/images/shoes2.png",
    accentColor: "#006874",
    bgGradient: "linear-gradient(90deg, rgba(4, 12, 60, 1) 0%, rgba(4, 12, 60, 0.4) 100%, rgba(4, 12, 60, 0.1) 100%)",
  },
  {
    id: "adidas-offer",
    brandName: "Adidas",
    officialText: "PREMIUM PARTNER",
    title: "UP TO 40%",
    subTitle: "Ultraboost Collection",
    buttonText: "Shop the Collection",
    bannerImage: "/assets/images/shoes2.png", 
    accentColor: "#1B2351",
    bgGradient: "linear-gradient(90deg, rgba(20, 20, 20, 1) 0%, rgba(20, 20, 20, 0.4) 100%, rgba(20, 20, 20, 0.1) 100%)",
  }
];

export default function OffersSection() {
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  
  // States
  const [mainOfferIndex, setMainOfferIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);
  
  // Data Fetching (fetching all offers for simplicity, then we can filter)
  const { data: allProducts, loading } = useProducts({ HaveOffer: true, PageSize: 20 });

  const activeOffer = OFFERS_DATA[mainOfferIndex];

  // Logic for responsive card count in the inner slider
  const visibleCount = isDesktop ? 2 : 1.5;
  
  // Filter products for the active offer if possible, or just slice for demo
  const displayProducts = useMemo(() => {
    if (!allProducts) return [];
    // In a real app, filter by brand/category: allProducts.filter(p => p.brand === activeOffer.brandName)
    // For now, we'll just show different slices to simulate different content
    return mainOfferIndex === 0 ? allProducts.slice(0, 8) : allProducts.slice(4, 12);
  }, [allProducts, mainOfferIndex]);

  const maxProductIndex = Math.max(0, displayProducts.length - Math.floor(visibleCount));

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Skeleton variant="rectangular" width="100%" height={452} sx={{ borderRadius: "48px" }} />
      </Container>
    );
  }

  // Navigation handlers
  const nextMainOffer = () => {
    setMainOfferIndex((prev) => (prev + 1) % OFFERS_DATA.length);
    setProductIndex(0); // Reset inner slider
  };
  const prevMainOffer = () => {
    setMainOfferIndex((prev) => (prev - 1 + OFFERS_DATA.length) % OFFERS_DATA.length);
    setProductIndex(0);
  };

  const nextProduct = () => setProductIndex((prev) => Math.min(prev + 1, maxProductIndex));
  const prevProduct = () => setProductIndex((prev) => Math.max(prev - 1, 0));

  return (
    <Box id="offers-section" sx={{ py: 12, backgroundColor: "#FCFAF2" }}>
      <Container maxWidth="lg">
        {/* Header with Integrated Navigation */}
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 6 }}>
          <Stack spacing={1}>
            <Typography variant="h2" sx={{ fontWeight: 400, color: "#1B2351", fontSize: { xs: "32px", md: "48px" }, fontFamily: "var(--font-manrope)" }}>
              Today's Offers
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 400,color: "rgba(27, 35, 81, 0.4)", fontSize: "16px" }}>
              Limited time editorial exclusives for our community.
            </Typography>
          </Stack>

          {/* Main Offers Navigation Arrows (Under/Near Header) */}
          <Stack direction="row" spacing={1.5} sx={{ mb: 1 }}>
            <IconButton 
              onClick={prevMainOffer} 
              sx={{ 
                border: "1px solid rgba(27, 35, 81, 0.1)",
                backgroundColor: "white",
                "&:hover": { backgroundColor: "#f0f0f0" }
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton 
              onClick={nextMainOffer} 
              sx={{ 
                border: "1px solid rgba(27, 35, 81, 0.1)",
                backgroundColor: "white",
                "&:hover": { backgroundColor: "#f0f0f0" }
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </Stack>

        {/* Main Slider Wrapper */}
        <Box sx={{ position: "relative", width: "100%", overflow: "visible" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeOffer.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Main Wrapper Box: Width 1216, Height 452 */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", lg: "7fr 5fr" },
                  width: "100%",
                  minHeight: "452px",
                  borderRadius: "48px",
                  border: "1px solid #E5E2DB",
                  overflow: "hidden",
                  backgroundColor: "#F6F3EC",
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.03)"
                }}
              >
                {/* Left Side (Banner) */}
                <Box
                  sx={{
                    position: "relative",
                    minHeight: "450px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    p: "85px 48px",
                    background: `${activeOffer.bgGradient}, url('${activeOffer.bannerImage}')`,
                    backgroundSize: "cover, contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center, right center",
                    overflow: "hidden"
                  }}
                >
                  {/* Brand Header */}
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                    <Box 
                      sx={{ 
                        width: 48, height: 48, 
                        backgroundColor: "white", 
                        borderRadius: "50%", 
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <Typography sx={{ fontWeight: 900, color: "#040C3C", fontSize: "10px" }}>
                        {activeOffer.brandName.toUpperCase()}
                      </Typography>
                    </Box>

                    <Typography 
                      sx={{ 
                        color: "white", 
                        fontWeight: 700, 
                        fontSize: "18px", 
                        fontFamily: "var(--font-manrope)",
                        letterSpacing: "0.5px"
                      }}
                    >
                      {activeOffer.brandName}
                    </Typography>
                  </Stack>

                  <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", mb: 1 }}>
                    {activeOffer.officialText}
                  </Typography>

                  <Typography sx={{ color: "white", fontWeight: 900, fontSize: { xs: "60px", md: "110px" }, lineHeight: 0.8, mb: 1, letterSpacing: "-2px" }}>
                    {activeOffer.title}
                  </Typography>

                  <Typography sx={{ color: "white", fontSize: "28px", fontWeight: 500, opacity: 0.9, mb: 6 }}>
                    {activeOffer.subTitle}
                  </Typography>

                  <Box
                    component="button"
                    sx={{
                      width: "253px",
                      height: "56px",
                      backgroundColor: activeOffer.accentColor,
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "0.3s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": { opacity: 0.9 }
                    }}
                  >
                    {activeOffer.buttonText}
                  </Box>
                </Box>

                {/* Right Side (Product Slider) */}
                <Box sx={{ p: { xs: 3, md: "60px 24px", lg: "60px 40px" }, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                    <Typography sx={{ fontWeight: 800, color: "#040C3C", fontSize: "18px" }}>
                      Featured items in offer
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <IconButton 
                        onClick={prevProduct} 
                        disabled={productIndex === 0} 
                        sx={{ 
                          width: 31, height: 31,
                          border: "1px solid rgba(4, 12, 60, 0.1)",
                          p: 0,
                          "& .MuiSvgIcon-root": { fontSize: "18px", color: "#1C1C18" }
                        }}
                      >
                        <ChevronLeftIcon />
                      </IconButton>
                      <IconButton 
                        onClick={nextProduct} 
                        disabled={productIndex >= maxProductIndex} 
                        sx={{ 
                          width: 31, height: 31,
                          border: "1px solid rgba(4, 12, 60, 0.1)",
                          p: 0,
                          "& .MuiSvgIcon-root": { fontSize: "18px", color: "#1C1C18" }
                        }}
                      >
                        <ChevronRightIcon />
                      </IconButton>
                    </Stack>
                  </Stack>

                  <Box sx={{ overflow: "hidden", flex: 1, position: "relative" }}>
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: -maxProductIndex * 208, right: 0 }}
                      animate={{ x: -productIndex * 208 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ display: "flex", gap: "16px", cursor: "grab" }}
                      whileTap={{ cursor: "grabbing" }}
                    >
                      {displayProducts.map((product) => (
                        <Box 
                          key={product.id} 
                          sx={{ 
                            minWidth: "192px",
                            width: "192px",
                            height: "276px",
                            backgroundColor: "white", 
                            borderRadius: "16px", 
                            p: "16px",
                            boxShadow: "0px 1px 2px rgba(0,0,0,0.05)",
                            display: "flex",
                            flexDirection: "column",
                            userSelect: "none"
                          }}
                          onClick={() => router.push(`/products/${product.id}`)}
                        >
                          <Box
                            sx={{
                              width: "160px",
                              height: "160px",
                              borderRadius: "12px",
                              backgroundColor: "#F1EEE7",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mb: 1.5,
                              overflow: "hidden"
                            }}
                          >
                            <img 
                              src={product.mediaUrl} 
                              alt={product.name} 
                              style={{ width: "90%", height: "90%", objectFit: "contain", pointerEvents: "none" }} 
                            />
                          </Box>

                          <Typography sx={{ color: activeOffer.accentColor, fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", mb: 0.5 }}>
                            {product.category?.name || activeOffer.brandName}
                          </Typography>

                          <Typography sx={{ fontWeight: 600, color: "#040C3C", fontSize: "13px", height: "36px", overflow: "hidden", lineHeight: 1.2, mb: 1 }}>
                            {product.name}
                          </Typography>

                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography sx={{ fontWeight: 800, color: "#040C3C", fontSize: "14px" }}>
                              ${product.discountedPrice}
                            </Typography>
                            <Typography sx={{ fontSize: "11px", color: "#767680", textDecoration: "line-through" }}>
                              ${product.price}
                            </Typography>
                          </Stack>
                        </Box>
                      ))}
                    </motion.div>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
}


