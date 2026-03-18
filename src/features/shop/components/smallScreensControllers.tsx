import { Box, Typography, Stack, Divider } from "@mui/material";
import { FilterIcon, SortIcon } from "@/iconsComponents/all";
import { Gradient_Button } from "@/components/ui/gradientButton";
export default function SmallScreensControllers({ setOpenSorting }: { setOpenSorting: (open: boolean) => void }) {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Stack direction={"column"} gap={"5px"}>
                <Typography variant="captionSmall" fontSize={{ xs: "16px", sm: "22px" }}  >
                    “Running Shoes”
                </Typography>
                <Typography variant="captionSmall" fontSize={{ xs: "12px", sm: "16px" }} >
                    288 Results
                </Typography>
            </Stack>
            <Stack direction={"row"} gap={"12px"} alignItems={"center"} >
                <Box gap={"5px"} display={"flex"} flexDirection={"row"} alignItems={"center"} sx={{ cursor: "pointer" }}>
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
    )
}