import { Box, Typography } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { GridIcon, ListIcon, SortIcon } from "@/iconsComponents/all";
import MenuElement from "@/components/ui/special/menuElement";

export default function LargeScreensControllers({ viewMode, setViewMode }: {
    viewMode: "grid" | "list",
    setViewMode: (viewMode: "grid" | "list") => void
}) {
    const sortOptions = ["Alphabetically, A to Z", "Alphabetically, Z to A", "Price, low to high", "Price, high to low", "Popularity", "Year - Newest to Oldest", "Year - Oldest to Newest"];
    return (
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={"12px"}>
            <Box display={"flex"} flexGrow={1}>
                <Typography variant="captionSmall" fontStyle={"italic"} fontSize={"34px"}  >
                    “Running Shoes”
                </Typography>
                <Box alignSelf={"flex-end"} display={"flex"} alignItems={"center"} gap={"8px"}>
                    <Box width={"56px"} border={"1px solid #1E1E1E"} />
                    <Typography variant="captionSmall" fontSize={"15px"} >
                        288 Results
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
                <MenuElement options={sortOptions} value={"Shoes"}>
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