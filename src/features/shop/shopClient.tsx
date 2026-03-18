"use client";
import { Box, Divider, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import FilterationComponent from "./components/filterationComponent";
import { useTheme } from "@mui/material";
import SearchBar from "./components/searchBar";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import ProductsSection from "./components/productsSection";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProductsShop } from "./services";
import { useEffect, useState } from "react";
import PaginationComponent from "@/components/ui/special/paginationComponent";
import LargeScreensControllers from "./components/largeScreensControllers";
import SmallScreensControllers from "./components/smallScreensControllers";
import SortComponent from "./components/bottomSheets/sortComponent";
export default function ShopClient() {
    const t = useTheme()
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const { data, isLoading, isFetching, isSuccess } = useQuery<any>({
        queryKey: ["products", pageIndex],
        queryFn: () => getProductsShop({ pageIndex }),
        placeholderData: keepPreviousData,
        staleTime: 5 * 60 * 1000,
    })
    const [openSorting, setOpenSorting] = useState<boolean>(false);
    return (
        <Box minHeight={"100vh"} padding={{ xs: "16px", md: "40px" }} bgcolor={t.tokens.backgroundColors.main} overflow="hidden" position="relative">
            <BackgroundShapeImage />

            <Box position="relative" zIndex={1} height="100%" minHeight={"calc(100vh - 80px)"}>
                <SearchBar />
                <Grid container spacing={2} height={"100%"}>
                    <Grid size={{ xs: 0, lg: 3 }} display={{ xs: "none", lg: "block" }}>
                        <FilterationComponent />
                    </Grid>
                    <Grid size={{ xs: 12, lg: 9 }} height={"100%"} minHeight={"calc(100vh - 80px)"}>
                        <Box display={"flex"} flexDirection={"column"} gap={"20px"} height={"100%"}>
                            <Box display={{ xs: "none", lg: "block" }}>
                                <LargeScreensControllers viewMode={viewMode} setViewMode={setViewMode} />
                            </Box>
                            <Box display={{ xs: "block", lg: "none" }}>
                                <SmallScreensControllers setOpenSorting={setOpenSorting} />
                            </Box>
                            {data && < ProductsSection viewMode={viewMode} products={data.data.data} pageIndex={pageIndex} />}
                            {isFetching && <CircularProgress color="primary" sx={{ margin: "auto" }} />}
                            {data && data?.data.meta.totalRecords > 0 && (
                                <Box mt="auto" pt="20px">
                                    <PaginationComponent pageIndex={pageIndex} setPageIndex={setPageIndex} totalPages={Math.ceil(data.data.meta.totalRecords / 10)} />
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <SortComponent open={openSorting} setOpen={setOpenSorting} />
        </Box>
    )
}




