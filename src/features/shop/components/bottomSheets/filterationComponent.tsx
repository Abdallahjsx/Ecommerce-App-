import { Box, Typography, Stack, Divider } from "@mui/material";
import BottomSheet from "@/components/ui/special/bottomSheet";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import CategoryFilterBottomSheet from "../filters/bottomSheetFilters/category";
import StockFilterBottomSheet from "../filters/bottomSheetFilters/stock";
import ColorFilterBottomSheet from "../filters/bottomSheetFilters/color";
import PriceFilterBottomSheet from "../filters/bottomSheetFilters/price";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { useAppDispatch } from "@/Redux/store";
import { clearAllFilters } from "@/Redux/slices/shopFiltersSlice";

export default function SmallScreenFilterationComponent({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    const t = useTheme()
    const dispatch = useAppDispatch();
    const filters = ["Category", "Stock Status", "Size", "Color", "Price"]
    const [activeFilter, setActiveFilter] = useState<string>("Category")

    return (
        <BottomSheet open={open} setOpen={setOpen}>
            <Stack bgcolor={t.tokens.backgroundColors.main} direction={"column"}>
                <Stack minHeight={"70vh"} padding={"16px"} >
                    <Stack mb={"16px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant="titleSmall" fontSize={"16px"}>Filter Results</Typography>
                        <Typography variant="captionMedium" fontWeight={"500"} color={t.palette.error.main} sx={{ cursor: "pointer" }} onClick={() => { dispatch(clearAllFilters()) }}>Reset Filters</Typography>
                    </Stack>
                    <Grid container spacing={2}>
                        <Grid size={4}>
                            {filters.map((filter, index) => (
                                <FilterationSideBarElement key={index} title={filter} active={activeFilter === filter} setActiveFilter={setActiveFilter} />
                            ))}
                        </Grid>
                        <Grid size={8}>
                            {activeFilter === "Category" && <CategoryFilterBottomSheet />}
                            {activeFilter === "Stock Status" && <StockFilterBottomSheet />}
                            {activeFilter === "Color" && <ColorFilterBottomSheet />}
                            {activeFilter === "Price" && <PriceFilterBottomSheet />}
                        </Grid>
                    </Grid>
                </Stack>
                <Divider />
                <Stack justifyContent={"center"} width={"100%"} padding={"10px 16px"}>
                    <Gradient_Button variant="primary" size="small" sx={{ width: "100%", borderWidth: "1px", borderRadius: "8px", padding: "20px 16px !important", justifyContent: "flex-start", bgcolor: t.buttonVariants.outline.hoverBg }} onClick={() => { setOpen(false) }}>
                        <Typography variant="captionSmall" fontSize={"16px"} color="white" textAlign={"center"} width={"100%"}>Search</Typography>
                    </Gradient_Button>
                </Stack>
            </Stack>
        </BottomSheet>
    )
}
function FilterationSideBarElement({ title, active, setActiveFilter }: { title: string, active: boolean, setActiveFilter: (active: string) => void }) {
    const t = useTheme()
    return (
        <Box borderLeft={active ? `3px solid ${t.palette.primary.main}` : "none"} bgcolor={active ? "#43475C1A" : "transparent"} py={"12px"} pl={"16px"} onClick={() => setActiveFilter(title)} sx={{ borderTopRightRadius: "8px", borderBottomRightRadius: "8px", cursor: "pointer" }} >
            <Typography variant="captionMedium" fontWeight={"400"} color={t.palette.text.primary}>{title}</Typography>
        </Box>
    )
}


