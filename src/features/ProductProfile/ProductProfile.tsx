"use client";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import ProductImagesSlider from "./components/ProductImagesSlider";
import ProductInfoSection from "./components/ProductInfoSection";
import AdditionalInfo from "./components/AdditionalInfo";
import ProductBottomSection from "./components/ProductBottomSection";
import { ProductDetails } from "./types";
import AddToCartDialog from "@/components/ui/dialog/addToCartDialog";

export default function ProductProfile({ product }: { product: ProductDetails }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: theme.tokens.backgroundColors.main,
        overflow: "hidden",
      }}
    >
      <BackgroundShapeImage />

      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          maxWidth: "1269px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          py: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 🔵 Big Box (Slider + Info) */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1348px",
            // height: { xs: "auto", md: "521px" }, // ✅ Responsive fix
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: "26px",
          }}
        >
          {/* 🟣 Left Column (Slider Section) */}
          <Box
            sx={{
              width: { xs: "100%", md: "646px" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "100%",
                  sm: 500,
                  md: 600,
                  lg: 646,
                },
                display: "flex",
                flexDirection: "column",
                gap: 4,
                ml: { xs: "auto", md: -4 },
                mr: { xs: "auto", md: "auto" },
              }}
            >
              {/* Brand Section */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,

                }}
              >
                <Box sx={{ width: "47px", height: "47px", borderRadius: "50%", overflow: "hidden" }}>
                  <Image
                    onError={(e) => {
                      e.currentTarget.src = "/assets/icons/brand-logo-icon.svg";
                    }}
                    src={product?.brand?.logoUrl || "/assets/icons/brand-logo-icon.svg"}
                    alt="Brand Logo"
                    width={47}
                    height={47}
                    style={{ objectFit: "contain" }}
                  />
                </Box>


                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: "36px",
                    background: theme.palette.gradients.primary,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {product?.brand?.displayName}
                </Typography>
              </Box>

              {/* Product Images Slider */}
              <ProductImagesSlider product={product} />
            </Box>
          </Box>

          {/* 🟢 Right Column (Product Info Section) */}
          <Box
            sx={{
              width: { xs: "100%", md: "676px" },
            }}
          >
            <ProductInfoSection product={product} />
          </Box>
        </Box>
        <Box sx={{ borderTop: `1px solid ${theme.tokens.separatingColors.border}`, pt: "25px", mt: 5 }}>
          {/* {product.productInformations.length > 0 && <AdditionalInfo product={product} />} */}
          <ProductBottomSection product={product} />
        </Box>


      </Container>
      <AddToCartDialog onAdd={() => {
        alert("added")
      }} />
    </Box>
  );
}