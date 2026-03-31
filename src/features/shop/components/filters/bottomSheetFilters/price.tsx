import RangePriceBar from "@/components/ui/special/rangePriceBar";
import { Box, Stack } from "@mui/material";
import React from "react";
import PriceBox from "@/components/ui/special/priceBox";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setPriceRange } from "@/Redux/slices/shopFiltersSlice";

export default function PriceFilterBottomSheet() {
    const dispatch = useAppDispatch();
    const priceRange = useAppSelector((state) => state.filters.priceRange);

    return (
        <Stack gap={"40px"} direction={"row"} justifyContent={"space-around"} alignItems={"center"}>
            <RangePriceBar
                value={priceRange}
                onChange={(event, newValue) => {
                    dispatch(setPriceRange(newValue));
                }}
                orientation="vertical"
                sx={{ height: "300px" }}
            />
            <Stack direction={"column"} gap={"12px"} flex={1}>
                <PriceBox price={priceRange?.[0]} label="From" />
                <PriceBox price={priceRange?.[1]} label="To" />
            </Stack>
        </Stack>
    )
}