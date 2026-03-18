import { Box, Typography, Stack, Divider } from "@mui/material";
import BottomSheet from "@/components/ui/special/bottomSheet";
import { useTheme } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
import { useState } from "react";
export default function SortComponent({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    const t = useTheme()
    const [sort, setSort] = useState<string>("Alphabetically, A to Z");
    return (
        <BottomSheet open={open} setOpen={setOpen}>
            <Box bgcolor={t.tokens.backgroundColors.main} minHeight={"70vh"} padding={"16px"} >
                <Typography variant="titleSmall" fontSize={"16px"}>Sort By</Typography>
                <Stack mt={"16px"} direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={"8px"}>
                    {sortOptions.map((option, index) => (
                        <SortingOptionElement key={index} selected={sort === option} option={option} setSort={setSort} />
                    ))}


                </Stack>
            </Box>
        </BottomSheet>
    )
}
const sortOptions = ["Alphabetically, A to Z", "Alphabetically, Z to A", "Price, low to high", "Price, high to low", "Popularity", "Year - Newest to Oldest", "Year - Oldest to Newest"];

function SortingOptionElement({ selected, option, setSort }: {
    selected: boolean,
    option: string,
    setSort: (sort: string) => void
}) {
    const t = useTheme()
    if (selected) {
        return (
            <Gradient_Button variant="gradientBorder" size="small" sx={{ width: "100%", borderWidth: "1px", borderRadius: "8px", padding: "20px 16px !important", justifyContent: "flex-start", bgcolor: t.buttonVariants.outline.hoverBg }} ><Typography variant="captionSmall" fontSize={"16px"}>{option}</Typography></Gradient_Button>
        )
    }
    else {
        return (
            <Box width={"100%"} border={"1px solid #D0D5DD"} borderRadius={"8px"} padding={"12px 16px"} sx={{ "&:hover": { bgcolor: t.buttonVariants.outline.hoverBg }, cursor: "pointer" }} onClick={() => { setSort(option) }}>
                <Typography variant="captionSmall" fontSize={"16px"}>{option}</Typography>
            </Box>
        )
    }
}

