import React from 'react'
import PriceBox from '@/components/ui/special/priceBox'
import RangePriceBar from '@/components/ui/special/rangePriceBar'
import { Typography, Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/Redux/store'
import { setPriceRange } from '@/Redux/slices/shopFiltersSlice'
export default function PriceFilter() {

    const dispatch = useAppDispatch()
    const priceRange = useAppSelector((state) => state.filters.priceRange)
    return (
        <Box padding={"0px"}>
            <Typography variant='inputLabel' fontSize={"16px"} color={"black"}>
                Price
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={"16px"} >
                <RangePriceBar value={priceRange} onChange={(event, newValue) => {
                    dispatch(setPriceRange(newValue));
                }} orientation="horizontal" />
                <Box display={"flex"} gap={{ xs: "8px", md: "24px" }} justifyContent={"space-between"} width={"100%"}>
                    <Box flex={1}>
                        <PriceBox label="From" price={Array.isArray(priceRange) ? priceRange[0] : 0} />
                    </Box>
                    <Box flex={1}>
                        <PriceBox label="To" price={Array.isArray(priceRange) ? priceRange[1] : 0} />
                    </Box>
                </Box>

            </Box>
        </Box >
    )
}