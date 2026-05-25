"use client";

import { Box, Typography } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { GridIcon, ListIcon, SortIcon } from "@/iconsComponents/all";
import ShopCard from "@/components/ui/cards/ShopCard";
import { Grid } from "@mui/material";
import MenuElement from "@/components/ui/special/menuElement";
import { useState } from "react";
import ListedShopCard from "@/components/ui/cards/listedShopCard";
import Controllers from "./largeScreensControllers";
import SmallScreensControllers from "./smallScreensControllers";
import { useAppDispatch } from "@/Redux/store";
import { setOpenAddToCartDialog, setProductId, setAvailableColors } from "@/Redux/slices/addTocartDialogSlice";
import { useUser } from "@/features/user/hooks/useUser";

export default function ProductsSection({ viewMode, products, pageIndex }: { viewMode: "grid" | "list", products: any[], pageIndex: number }) {
    const dispatch = useAppDispatch();
    function handleAddToCart(product: any) {
        dispatch(setOpenAddToCartDialog(true));
        dispatch(setProductId(product.id));
        dispatch(setAvailableColors(product.availableColors));
    }
    const { isLoggedIn } = useUser()
    return (
        <Box>

            <Box mt={"32px"}>
                <Grid container spacing={2} columns={12}>
                    {products.map((product) => (
                        <Grid key={product.id} size={viewMode === "grid" ? { xs: 12, sm: 6, md: 4, lg: 3 } : { xs: 12, md: 12 }}>
                            <ShopCard
                                id={product.id}
                                name={product.name}
                                category={product.category?.name || "Product"}
                                price={
                                    product.haveOffer ? product.discountedPrice : product.price
                                }
                                originalPrice={product.price}
                                imageUrl={product.mediaUrls[0]}
                                rating={product.reviewsSummary?.averageRating || 0}
                                reviewsCount={product.reviewsSummary?.totalReviews || 0}
                                status={
                                    product.stockStatus === "InStock"
                                        ? "In Stock"
                                        : "Out of Stock"
                                }
                                hasDiscount={product.haveOffer}
                                isSale={product.haveOffer}
                                discount={
                                    product.discountPercentage
                                        ? `${product.discountPercentage}%`
                                        : ""
                                }
                                onAddToCart={() => handleAddToCart(product)}
                                viewMode={viewMode}
                                isLoggedIn={isLoggedIn}
                            />
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </Box>

    )
}