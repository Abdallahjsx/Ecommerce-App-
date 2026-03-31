import { Box, Typography } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { GridIcon, ListIcon, SortIcon } from "@/iconsComponents/all";
import MenuElement from "@/components/ui/special/menuElement";
import { sortOptionType } from "../types";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setSortItem } from "@/Redux/slices/shopFiltersSlice";

export default function LargeScreensControllers({ viewMode, setViewMode, totalRecords }: {
    viewMode: "grid" | "list",
    setViewMode: (viewMode: "grid" | "list") => void,
    totalRecords?: number
}) {
    const dispatch = useAppDispatch()
    const { SortItem, mainCategory } = useAppSelector((state) => state.filters)
    const sortOptions: sortOptionType[] = [
        { label: "Alphabetically, A to Z", SortBy: "name", SortOrder: "asc" },
        { label: "Alphabetically, Z to A", SortBy: "name", SortOrder: "desc" },
        { label: "Price, low to high", SortBy: "price", SortOrder: "asc" },
        { label: "Price, high to low", SortBy: "price", SortOrder: "desc" },
        { label: "Popularity", SortBy: "popularity", SortOrder: "desc" },
        { label: "Year - Newest to Oldest", SortBy: "createdat", SortOrder: "desc" },
        { label: "Year - Oldest to Newest", SortBy: "createdat", SortOrder: "asc" }
    ];
    return (
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"12px"}>
            <Box display={"flex"} flexGrow={1}>
                <Typography variant="captionSmall" fontStyle={"italic"} fontSize={"34px"}  >
                    “{mainCategory?.name || "All Products"}”
                </Typography>
                <Box alignSelf={"flex-end"} display={"flex"} alignItems={"center"} gap={"8px"}>
                    <Box width={"56px"} border={"1px solid #1E1E1E"} />
                    <Typography variant="captionSmall" fontSize={"15px"} >
                        {totalRecords || 0} Results
                    </Typography>
                </Box>

            </Box>

            <Box display={"flex"} gap={"12px"}>
                <Gradient_Button variant={viewMode === "grid" ? "primary" : "regular"}
                    sx={{ boxShadow: "none", "&:active": { boxShadow: "none" } }} onClick={() => { setViewMode("grid") }}>

                    <GridIcon fill={viewMode === "grid" ? "white" : "black"} />
                    <Typography variant="captionSmall" color={viewMode === "grid" ? "white" : "black"} fontSize={"20px"} ml={"8px"}>
                        Grid
                    </Typography>
                </Gradient_Button>
                <Gradient_Button variant={viewMode === "list" ? "primary" : "regular"} sx={{ boxShadow: "none", "&:active": { boxShadow: "none" } }} onClick={() => { setViewMode("list") }}>

                    <ListIcon fill={viewMode === "list" ? "white" : "black"} />
                    <Typography variant="captionSmall" color={viewMode === "list" ? "white" : "black"} fontSize={"20px"} ml={"8px"}>
                        List
                    </Typography>
                </Gradient_Button>
            </Box>
            <Box>
                <MenuElement<sortOptionType> options={sortOptions} value={SortItem?.label} getId={(item: sortOptionType) => item.label} getLabel={(item: sortOptionType) => item.label} onSelect={(item: sortOptionType) => {

                    dispatch(setSortItem(item))

                }}>
                    <Gradient_Button variant="gradientBorder">
                        <SortIcon />
                        <Typography variant="captionSmall" fontSize={"20px"} mx={"12px"}>
                            Sort by
                        </Typography>
                    </Gradient_Button>
                </MenuElement>
            </Box>



        </Box>
    )
}