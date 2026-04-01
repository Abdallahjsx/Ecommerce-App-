"use client";
import { Box, Divider, Typography, Skeleton } from "@mui/material";
import PriceFilter from "./filters/priceFilter";
import { FilterIcon } from "@/iconsComponents/all";
import CustomDivider from "@/components/ui/special/customDivider";
import AppliedFilters from "./filters/applied";
import CategoryFilter from "./filters/categoryFilter";
import StockStatusFilter from "./filters/stockStatusFilter";
import ColorFilter from "./filters/colorFilter";
import SizeFilter from "./filters/sizeFilter";
import { useState } from "react";
import { mainCategoryType, colorType, sizeType } from "../types";
export default function FilterationComponent({ categories, isLoading, allColors, sizes }: { categories: mainCategoryType[], isLoading: boolean, allColors: colorType[], sizes: sizeType[] }) {
    const [selectedColor, setSelectedColor] = useState<string[]>([])
    if (isLoading) {
        return (
            <Box height={"80vh"} borderRadius={"4px"} overflow="hidden">
                <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
            </Box>
        )

    }
    return (
        <Box width={"100%"} borderRight={"1px solid #ccc"} pr={"20px"} >
            <Box display={"flex"} flexDirection={"row"}>
                <Box>
                    <FilterIcon />
                </Box>
                <Typography variant="subTitle" color="black">
                    Filters
                </Typography>
            </Box >
            <CustomDivider />
            <AppliedFilters />
            <CustomDivider />
            <CategoryFilter categories={categories} />
            <CustomDivider />
            <StockStatusFilter />
            <CustomDivider />
            <SizeFilter sizes={sizes} />
            <CustomDivider />
            <ColorFilter allColors={allColors} />
            <CustomDivider />
            <PriceFilter />
        </Box>
    )
}