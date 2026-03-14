"use client";
import { Box, Divider, Grid } from "@mui/material";
import FilterationComponent from "./components/filterationComponent";
import { useTheme } from "@mui/material";
export default function ShopClient() {
    const t = useTheme()
    return (
        <Box height={"100vh"} padding={"20px"} bgcolor={t.tokens.backgroundColors.main}>
            <Grid container spacing={2} height={"100%"}>
                <Grid size={3}>
                    <FilterationComponent />
                </Grid>
                <Grid size={9}>
                    <Box height={"100%"} style={{ border: "1px solid #ccc" }}>
                        <h1>Products</h1>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}