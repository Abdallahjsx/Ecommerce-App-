import { Box, Typography } from "@mui/material"
import { CloseIcon } from "@/iconsComponents/all";
import CloasbleBox from "@/components/ui/special/closableBox";
export default function AppliedFilters() {
    return (

        <Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="subTitle" fontWeight={"400"} fontSize={"16px"}>
                    Applied Filters
                </Typography>
                <Typography variant="subTitle" fontSize={"12px"} fontWeight={"600"} sx={{ textDecoration: "underline", cursor: "pointer" }}>
                    clear all
                </Typography>
            </Box>
            <Box display={"flex"} gap={"10px"} flexWrap={"wrap"} width={"100%"} alignItems={"center"} mt={"16px"}>
                <CloasbleBox title="All" />
                <CloasbleBox title="Red" />
                <CloasbleBox title="Running Shoes" />
                <CloasbleBox title="Red" />

                <CloasbleBox title="Running Shoes" />
                <CloasbleBox title="Running Shoes" />
                <CloasbleBox title="Red" />

                <CloasbleBox title="Running Shoes" />
            </Box>
        </Box>


    );
}

