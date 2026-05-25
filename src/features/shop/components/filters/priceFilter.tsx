import React from 'react'
import PriceBox from '@/components/ui/special/priceBox'
import RangePriceBar from '@/components/ui/special/rangePriceBar'
import { Typography, Box } from '@mui/material'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { useState, useEffect } from 'react'
export default function PriceFilter() {
    const [priceValue, setPriceValue] = useState([100, 500])
    const [debouncedPriceValue] = useDebounce(priceValue, 2000);
    const searchParams = useSearchParams()
    const minPrice = searchParams.get("minPrice") || 100
    const maxPrice = searchParams.get("maxPrice") || 500
    const router = useRouter()
    const handlePriceChange = (newValue: number[]) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("minPrice", newValue[0].toString());
        params.set("maxPrice", newValue[1].toString());
        params.set("page", "1")
        router.push(`?${params.toString()}`);
    }
    useEffect(() => {
        handlePriceChange(debouncedPriceValue as number[])
    }, [debouncedPriceValue])

    useEffect(() => {
        setPriceValue([+minPrice, +maxPrice])
    }, [])
    return (
        <Box padding={"0px"}>
            <Typography variant='inputLabel' fontSize={"16px"} color={"black"}>
                Price
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={"16px"} >
                <RangePriceBar value={priceValue} onChange={(event, newValue) => {
                    setPriceValue(newValue as number[]);
                }} orientation="horizontal" />
                <Box display={"flex"} gap={{ xs: "8px", md: "24px" }} justifyContent={"space-between"} width={"100%"}>
                    <Box flex={1}>
                        <PriceBox label="From" price={Array.isArray(priceValue) ? priceValue[0] : 0} />
                    </Box>
                    <Box flex={1}>
                        <PriceBox label="To" price={Array.isArray(priceValue) ? priceValue[1] : 0} />
                    </Box>
                </Box>

            </Box>
        </Box >
    )
}