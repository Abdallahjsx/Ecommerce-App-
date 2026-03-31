"use client";

import { Gradient_Button } from "@/components/ui/gradientButton";
import { Button, Typography, IconButton, Rating } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { StarIcon, OfferIcon, OutlineHeartIcon, FilledHeartIcon } from "../../../features/brandProfile/Icons";
import { Product } from "./ShopCard";
import { useState } from "react";
import { useToggleToWishlist } from "@/features/wishlist/hooks/useToggleToWishlist.hook";
import { useRouter } from "next/navigation";

export default function ListedShopCard({
    name,
    category,
    price,
    originalPrice,
    rating = 5.0,
    reviewsCount = 0,
    imageUrl,
    status = "In Stock",
    discount,
    hasDiscount = false,
    isSale = false,
    id,
    isInWishlist,
    onAddToCart
}: Product & { onAddToCart: () => void }) {
    const router = useRouter();
    const [isLiked, setIsLiked] = useState(isInWishlist)
    const { mutate: toggleToWishlist } = useToggleToWishlist(() => {
        setIsLiked(!isLiked)
    })
    return (
        <Box
            sx={{
                backgroundColor: "#E7E9E5",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                position: "relative",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                px: 1,
                cursor: "pointer",
            }}
            onClick={() => router.push(`/products/${id}`)}
        >
            {/* Badge */}
            {(hasDiscount || isSale) && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        zIndex: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {isSale && !discount ? (
                        <Box
                            sx={{
                                backgroundColor: "#47C0D2",
                                color: "white",
                                padding: "4px 12px",
                                borderRadius: "20px",
                                fontSize: "12px",
                                fontWeight: 600,
                                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                            }}
                        >
                            Sale
                        </Box>
                    ) : (
                        <Box sx={{ position: "relative" }}>
                            <OfferIcon
                                sx={{ width: 65, height: 60, transform: "scaleX(-1)" }}
                            />
                            <Typography
                                sx={{
                                    position: "absolute",
                                    top: "45%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%) rotate(31deg)",
                                    color: "white",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    pointerEvents: "none",
                                }}
                            >
                                {discount}
                            </Typography>
                        </Box>
                    )}
                </Box>
            )}

            {/* Product Image Container */}
            <Box
                sx={{
                    width: { xs: "120px", sm: "180px", md: "220px" },
                    minWidth: { xs: "120px", sm: "180px", md: "220px" },
                    position: "relative",
                    backgroundColor: "#E7E9E5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                }}
            >
                <img
                    src={imageUrl}
                    alt={name}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>

            {/* Content */}
            <Box sx={{ p: { xs: 1.5, md: 3 }, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography
                    sx={{
                        color: "#1B2351",
                        fontWeight: 700,
                        fontSize: { xs: "16px", md: "20px" },
                        mb: 0.5,
                    }}
                >
                    {name}
                </Typography>

                <Typography
                    sx={{
                        color: "rgba(27, 35, 81, 0.6)",
                        fontSize: { xs: "12px", md: "14px" },
                        fontStyle: "italic",
                        mb: { xs: 1, md: 1.5 },
                    }}
                >
                    {category}
                </Typography>

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: { xs: 1, md: 2 } }}
                >
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <StarIcon
                            sx={{ fontSize: { xs: "16px", md: "18px" }, color: "#47C0D2" }}
                        />
                        <Typography
                            sx={{
                                fontSize: { xs: "12px", md: "14px" },
                                color: "#1B2351",
                                fontWeight: 500,
                            }}
                        >
                            {rating.toFixed(1)}{" "}
                            <span style={{ color: "rgba(27, 35, 81, 0.5)" }}>
                                ({reviewsCount})
                            </span>
                        </Typography>
                    </Stack>

                    <Typography
                        sx={{
                            fontSize: { xs: "11px", md: "13px" },
                            fontWeight: 500,
                            color: status === "In Stock" ? "green" : "#EF4444",
                        }}
                    >
                        {status}
                    </Typography>
                </Stack>



            </Box>
            <Stack direction={"column"} justifyContent={"space-between"} flexGrow={1}>
                <Stack
                    direction={"row-reverse"}
                    spacing={1}
                    // sx={{ mb: { xs: 1.5, md: 2 } }}
                    width={"fit-content"}
                    alignSelf={"flex-end"}
                    alignItems={"center"}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "30px", md: "40px" },
                            fontWeight: 600,
                            color: "black",
                        }}
                    >
                        ${price}
                    </Typography>
                    {hasDiscount && originalPrice && (
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                color: "rgba(27, 35, 81, 0.4)",
                                textDecoration: "line-through",
                            }}
                        >
                            ${originalPrice}
                        </Typography>
                    )}
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: "0px", maxWidth: "400px", pt: 1 }}>

                    <IconButton
                        sx={{
                            bgcolor: "#F3F4F6",
                            borderRadius: "8px",
                            p: { xs: 1, md: 1.5 },
                            width: { xs: "40px", md: "48px" },
                            height: { xs: "40px", md: "48px" },
                            "& svg": {
                                width: { xs: 20, md: 24 },
                                height: { xs: 20, md: 24 },
                            },
                        }}
                        onClick={(e) => {
                            toggleToWishlist(id)
                            e.stopPropagation();
                        }}
                    >
                        {isLiked ? <FilledHeartIcon /> : <OutlineHeartIcon />}
                    </IconButton>
                    <Gradient_Button
                        variant="primary"
                        sx={{
                            flexGrow: 1,
                            borderRadius: "8px",
                            py: { xs: 1, md: 1.5 },
                            fontSize: { xs: "14px", md: "16px" },
                            fontWeight: 600,
                            textTransform: "none",
                            height: { xs: "40px", md: "48px" },
                        }}
                        onClick={(e) => {
                            e?.stopPropagation?.();
                            onAddToCart()
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "inherit",
                                fontWeight: "inherit",
                                color: "inherit",
                            }}
                        >
                            + Add To Cart
                        </Typography>
                    </Gradient_Button>


                </Stack>
            </Stack>
        </Box>
    );
}
