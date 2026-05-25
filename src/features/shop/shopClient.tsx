"use client";
import { Box, Stack, Grid, Skeleton } from "@mui/material";
import FilterationComponent from "./components/filterationComponent";
import { useTheme } from "@mui/material";
import SearchBar from "./components/searchBar";
import BackgroundShapeImage from "@/components/ui/BackgroundShape/BackgroundShapeImage";
import ProductsSection from "./components/productsSection";
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
import { mainCategoryType, colorType, sizeType } from "./types";

export default function ShopClient({ trialProducts, categories, colors, sizes, pageIndex }: { trialProducts: any, categories: mainCategoryType[], colors: colorType[], sizes: sizeType[], pageIndex: number }) {
    // const filters = useAppSelector((state) => state.filters);
    const token = useAppSelector((state) => state.authAlluvo.token);
    const t = useTheme()
    const router = useRouter();
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const { mutateAsync: addToCart } = useAddToCart();
    const [openSorting, setOpenSorting] = useState<boolean>(false);
    const [openFilteration, setOpenFilteration] = useState<boolean>(false);
    // useEffect(() => {
    //     setPageIndex(1);
    // }, [filters]);
    // console.log("meta", trialProducts?.meta)

    const totalRecords = trialProducts?.meta.totalRecords;
    return (
        <Box minHeight={"100vh"} paddingX={{ xs: "16px", md: "80px" }} paddingY={{ xs: "16px", md: "20px" }} bgcolor={t.tokens.backgroundColors.main} overflow="hidden" position="relative">
            <BackgroundShapeImage />

            <Box position="relative" zIndex={1} height="100%" minHeight={"calc(100vh - 80px)"}>
                <SearchBar categories={categories} isLoading={categories?.length === 0} />
                <Grid container spacing={2} height={"100%"} >
                    <Grid size={{ xs: 0, lg: 3 }} display={{ xs: "none", lg: "block" }} >
                        <FilterationComponent categories={categories} isLoading={categories?.length === 0 || colors?.length === 0 || sizes?.length === 0} allColors={colors} sizes={sizes} />
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
                                {trialProducts && < ProductsSection viewMode={viewMode} products={trialProducts?.data} pageIndex={pageIndex} />}
                            </Box>


                            {trialProducts?.data.length < 1 && <Grid container spacing={3}>
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <Grid key={i} size={{ xs: 6, sm: 4, md: 3 }}>
                                        <Skeleton variant="rectangular" width="100%" height={350} sx={{ borderRadius: "16px" }} />
                                    </Grid>
                                ))}
                            </Grid>}


                        </Box>
                    </Grid>
                </Grid>
                {trialProducts && (trialProducts?.meta.hasNextPage || trialProducts?.meta.hasPreviousPage) && (
                    <Stack mt="auto" pt="20px" direction={"row"} justifyContent={"flex-end"}>
                        <PaginationComponent totalPages={trialProducts?.meta.totalPages} />
                    </Stack>
                )}
            </Box>
            <SmallScreenFilterationComponent open={openFilteration} setOpen={setOpenFilteration} categories={categories} allColors={colors} sizes={sizes} />
            <SortComponent open={openSorting} setOpen={setOpenSorting} />
            <AddToCartDialog
                onAdd={(productId, color, size, quantity) => {
                    if (token) {
                        addToCart([{ productId: Number(productId), color, size, quantity }]);
                    } else {
                        router.push("/login");
                    }

                }}
            />
        </Box >
    )
}




