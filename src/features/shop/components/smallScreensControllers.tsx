import { Box, Typography, Stack, Divider } from "@mui/material";
import { FilterIcon, SortIcon, GridIcon, ListIcon } from "@/iconsComponents/all";
import AppliedFilters from "./filters/applied";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { useAppSelector } from "@/Redux/store";

export default function SmallScreensControllers({ setOpenSorting, setOpenFilteration, viewMode, setViewMode, totalRecords }: {
    setOpenSorting: (open: boolean) => void,
    setOpenFilteration: (open: boolean) => void,
    viewMode: "grid" | "list",
    setViewMode: (viewMode: "grid" | "list") => void,
    totalRecords?: number
}) {
    const { mainCategory } = useAppSelector((state) => state.filters);

    return (
        <Stack direction={"column"}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Stack direction={"column"} gap={"5px"}>
                    <Typography variant="captionSmall" fontSize={{ xs: "16px", sm: "22px" }}  >
                        “{mainCategory?.length > 0 ? mainCategory.map((category) => category.name).join(", ") : "All Products"}”
                    </Typography>
                    <Typography variant="captionSmall" fontSize={{ xs: "12px", sm: "16px" }} >
                        {totalRecords || 0} Results
                    </Typography>
                </Stack>
                <Stack direction={"row"} gap={"12px"} alignItems={"center"} >
                    <Box gap={"5px"} display={"flex"} flexDirection={"row"} alignItems={"center"} sx={{ cursor: "pointer" }} onClick={() => { setOpenFilteration(true) }}>
                        <Box >
                            <FilterIcon sx={{ mt: "5px" }} />
                        </Box>
                        <Typography variant="bodyMedium" color="black" fontSize={{ xs: "13px", sm: "18px" }} >
                            Filter
                        </Typography>
                    </Box >
                    <Divider orientation="vertical" variant="fullWidth" flexItem sx={{ bgcolor: "#7C7C7C" }} />
                    <Box gap={"5px"} display={"flex"} flexDirection={"row"} alignItems={"center"} sx={{ cursor: "pointer" }} onClick={() => { setOpenSorting(true) }}>
                        <Box>
                            <SortIcon />
                        </Box>
                        <Typography variant="bodyMedium" color="black" fontSize={{ xs: "13px", sm: "18px" }} >
                            Sort By
                        </Typography>

                    </Box>
                </Stack>

            </Stack>
            {/* Applied Filters */}
            <Stack direction={"column"}>
                {/* <AppliedFilters smallScreen={true} /> */}
                <Box mt={"14px"} display={"flex"} justifyContent={"flex-end"} gap={"12px"}>
                    <Gradient_Button variant={viewMode === "grid" ? "primary" : "regular"}
                        sx={{ boxShadow: "none", "&:active": { boxShadow: "none" }, width: "fit-content" }} onClick={() => { setViewMode("grid") }}>

                        <GridIcon fill={viewMode === "grid" ? "white" : "black"} />
                    </Gradient_Button>
                    <Gradient_Button variant={viewMode === "list" ? "primary" : "regular"} sx={{ boxShadow: "none", "&:active": { boxShadow: "none" }, width: "fit-content" }} onClick={() => { setViewMode("list") }}>

                        <ListIcon fill={viewMode === "list" ? "white" : "black"} />

                    </Gradient_Button>
                </Box>
            </Stack>
        </Stack>

    )
}