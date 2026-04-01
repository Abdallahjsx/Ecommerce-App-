"use client";
import { Box, Stack, Grid, Typography } from "@mui/material";
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
import SmallScreenFilterationComponent from "./components/bottomSheets/filterationComponent";
import { useGetProducts } from "./hooks/useGetProducts.hook";
import { useAppSelector } from "@/Redux/store";
import AddToCartDialog from "@/components/ui/dialog/addToCartDialog";
import { useAddToCart } from "../cart/hooks/useAddToCart.hook";
import { useRouter } from "next/navigation";
import { useGetCategories, useGetColors, useGetSizes } from "./hooks/useLookUps.hook";

export default function ShopClient() {
    const filters = useAppSelector((state) => state.filters);
    const token = useAppSelector((state) => state.auth.token);
    const t = useTheme()
    const router = useRouter();
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const { data, isLoading, isFetching, isSuccess } = useGetProducts({ pageIndex });
    const { data: categories, isLoading: categoriesLoading, isFetching: categoriesFetching, isSuccess: categoriesSuccess } = useGetCategories();
    const { data: colors, isLoading: colorsLoading, isFetching: colorsFetching, isSuccess: colorsSuccess } = useGetColors();
    const { data: sizes, isLoading: sizesLoading, isFetching: sizesFetching, isSuccess: sizesSuccess } = useGetSizes();
    const { mutateAsync: addToCart } = useAddToCart();
    const [openSorting, setOpenSorting] = useState<boolean>(false);
    const [openFilteration, setOpenFilteration] = useState<boolean>(false);
    useEffect(() => {
        setPageIndex(1);
    }, [filters]);

    const totalRecords = data?.data.meta.totalRecords;
    return (
        <Box minHeight={"100vh"} paddingX={{ xs: "16px", md: "80px" }} paddingY={{ xs: "16px", md: "20px" }} bgcolor={t.tokens.backgroundColors.main} overflow="hidden" position="relative">
            <BackgroundShapeImage />

            <Box position="relative" zIndex={1} height="100%" minHeight={"calc(100vh - 80px)"}>
                <SearchBar categories={categories?.data} isLoading={categoriesLoading} />
                <Grid container spacing={2} height={"100%"} >
                    <Grid size={{ xs: 0, lg: 3 }} display={{ xs: "none", lg: "block" }} >
                        <FilterationComponent categories={categories?.data} isLoading={categoriesLoading || sizesLoading || colorsLoading} allColors={colors?.data} sizes={sizes?.data} />
                    </Grid>
                    <Grid size={{ xs: 12, lg: 9 }} height={"100%"}  >
                        <Box display={"flex"} flexDirection={"column"} gap={"20px"} minHeight={"calc(100vh - 80px)"} >
                            <Box display={{ xs: "none", lg: "block" }}>
                                <LargeScreensControllers viewMode={viewMode} setViewMode={setViewMode} totalRecords={totalRecords} />
                            </Box>
                            <Box display={{ xs: "block", lg: "none" }}>
                                <SmallScreensControllers viewMode={viewMode} setViewMode={setViewMode} setOpenSorting={setOpenSorting} setOpenFilteration={setOpenFilteration} totalRecords={totalRecords} />
                            </Box>
                            <Box height={"100%"} flexGrow={1}>
                                {data && < ProductsSection viewMode={viewMode} products={data.data.data} pageIndex={pageIndex} />}
                            </Box>


                            {isLoading && <CircularProgress color="primary" sx={{ margin: "auto", alignSelf: "center", position: "absolute", top: "50%", left: "60%" }} />}


                        </Box>
                    </Grid>
                </Grid>
                {data && (data?.data.meta.hasNextPage || data?.data.meta.hasPreviousPage) && (
                    <Stack mt="auto" pt="20px" direction={"row"} justifyContent={"flex-end"}>
                        <PaginationComponent pageIndex={pageIndex} setPageIndex={setPageIndex} totalPages={Math.ceil(data.data.meta.totalRecords / 10)} />
                    </Stack>
                )}
            </Box>
            <SmallScreenFilterationComponent open={openFilteration} setOpen={setOpenFilteration} categories={categories?.data} allColors={colors?.data} sizes={sizes?.data} />
            <SortComponent open={openSorting} setOpen={setOpenSorting} />
            <AddToCartDialog
                onAdd={(productId, color, size, quantity) => {
                    if (token) {
                        addToCart([{ productId, color, size, quantity }]);
                    } else {
                        router.push("/login");
                    }

                }}
            />
        </Box >
    )
}




