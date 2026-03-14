import React from 'react'
import PriceBox from '@/components/ui/special/priceBox'
import RangePriceBar from '@/components/ui/special/rangePriceBar'
import { Typography, Box } from '@mui/material'
export default function PriceFilter() {

    const [value, setValue] = React.useState<number[]>([100, 800]);
    return (
        <Box padding={"0px"}>
            <Typography variant='inputLabel' fontSize={"16px"} color={"black"}>
                Price
            </Typography>
            <Box display={"flex"} flexDirection={"column"} gap={"16px"} >
                <RangePriceBar value={value} onChange={(event, newValue) => {
                    setValue(newValue);
                }} />
                <Box display={"flex"} gap={"24px"} justifyContent={"space-between"}>
                    <PriceBox label="From" price={value[0]} />
                    <PriceBox label="To" price={value[1]} />
                </Box>

            </Box>
        </Box >
    )
}