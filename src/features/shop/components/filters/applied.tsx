import { Box, Typography } from "@mui/material"
import { CloseIcon } from "@/iconsComponents/all";
import CloasbleBox from "@/components/ui/special/closableBox";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { clearAllFilters, removeColor, setMainCategory, setPriceRange, setStockStatus, setColors, setSearch, setSortItem, setSizesSelected } from "@/Redux/slices/shopFiltersSlice";
import { mainCategoryType } from "../../types";

export default function AppliedFilters({ smallScreen = false, categories }: { smallScreen?: boolean, categories: mainCategoryType[] }) {
    const dispatch = useAppDispatch();
    const { mainCategory, subCategories, priceRange, stockStatus, colors, Search, SortItem, sizesSelected } = useAppSelector((state) => state.filters);
    return (

        <Box>
            {!smallScreen && <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="subTitle" fontWeight={"400"} fontSize={"16px"}>
                    Applied Filters
                </Typography>
                <Typography variant="subTitle" fontSize={"12px"} fontWeight={"600"} sx={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => dispatch(clearAllFilters())}>
                    clear all
                </Typography>
            </Box>}
            <Box display={"flex"} gap={"10px"} flexWrap={"wrap"} width={"100%"} alignItems={"center"} mt={"16px"}>
                {mainCategory && mainCategory.length > 0 && mainCategory.map((category, index) => (
                    <CloasbleBox key={index} title={category.name} onClose={() => dispatch(setMainCategory(mainCategory.filter((item) => item.id !== category.id)))} />
                ))}

                {stockStatus && <CloasbleBox title={stockStatus} onClose={() => dispatch(setStockStatus(null))} />}
                {colors && colors.length > 0 && colors.map((color, index) => (
                    <CloasbleBox key={index} title={color.name} onClose={() => dispatch(removeColor(color))} />
                ))}
                {SortItem && <CloasbleBox title={SortItem.label} onClose={() => dispatch(setSortItem(null))} />}
                {sizesSelected && sizesSelected.length > 0 && sizesSelected.map((size, index) => (
                    <CloasbleBox key={index} title={size.name} onClose={() => {
                        dispatch(setSizesSelected(size))
                    }} />
                ))}

            </Box>
        </Box>


    );
}

