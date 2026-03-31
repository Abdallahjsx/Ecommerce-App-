"use client";
import { Box, Divider, Typography } from "@mui/material";
import PriceFilter from "./filters/priceFilter";
import { FilterIcon } from "@/iconsComponents/all";
import CustomDivider from "@/components/ui/special/customDivider";
import AppliedFilters from "./filters/applied";
import CategoryFilter from "./filters/categoryFilter";
import StockStatusFilter from "./filters/stockStatusFilter";
import ColorFilter from "./filters/colorFilter";
import SizeFilter from "./filters/sizeFilter";
import { useState } from "react";
export default function FilterationComponent() {
    const [selectedColor, setSelectedColor] = useState<string[]>([])
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
            {/* <CustomDivider />
            <CategoryFilter /> */}
            <CustomDivider />
            <StockStatusFilter />
            <CustomDivider />
            <SizeFilter />
            <CustomDivider />
            <ColorFilter />
            <CustomDivider />
            <PriceFilter />
        </Box>
    )
}