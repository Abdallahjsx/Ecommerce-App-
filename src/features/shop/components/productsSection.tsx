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

export default function ProductsSection({ viewMode, products, pageIndex }: { viewMode: "grid" | "list", products: any[], pageIndex: number }) {

    // const sortOptions = [
    //     "Alphabetically, A to Z",
    //     "Alphabetically, Z to A",
    //     "Price, Low to High",
    //     "Price, High to Low",
    //     "Popularity",
    //     "Year - Newest to Oldest",
    //     "Year - Oldest to Newest",
    // ];
    return (
        <Box>

            <Box mt={"32px"}>
                <Grid container spacing={2} columns={12}>
                    {products.map((product) => (
                        viewMode === "grid" ? (
                            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                <ShopCard
                                    id={product.id}
                                    name={product.name}
                                    category={product.category?.name || "Product"}
                                    price={
                                        product.haveOffer ? product.discountedPrice : product.price
                                    }
                                    originalPrice={product.price}
                                    imageUrl={product.mediaUrl}
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
                                />
                            </Grid>
                        ) : (
                            <Grid key={product.id} size={12}>
                                <ListedShopCard
                                    id={product.id}
                                    name={product.name}
                                    category={product.category?.name || "Product"}
                                    price={
                                        product.haveOffer ? product.discountedPrice : product.price
                                    }
                                    originalPrice={product.price}
                                    imageUrl={product.mediaUrl}
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
                                />
                            </Grid>
                        )
                    ))}
                </Grid>

            </Box>
        </Box>

    )
}