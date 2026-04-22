"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { ProductDetails } from "../types";



export default function ProductImagesSlider({ product }: { product: ProductDetails }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    product.mediaUrl,
    product.mediaUrl,
    product.mediaUrl,
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: "500px",
          md: "600px",
          lg: "646px",
        },
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          width: "fit-content",
          borderRadius: "5px",
          border: "1px solid #D0D5DD",
          boxShadow: "0px 4px 4px 0px #00000040",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={images[currentIndex]}
          alt="product"
          width={646}
          height={310.22}
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Dots */}
      <Box
        sx={{
          width: "99px",
          height: "33px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "26px",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: "9px",
              height: "9px",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor:
                currentIndex === index ? "#1B2351" : "transparent",
              border: "1px solid #1B2351",
              transition: "0.2s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}