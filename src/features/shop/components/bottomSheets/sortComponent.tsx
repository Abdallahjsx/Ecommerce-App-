import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setSortItem } from "@/Redux/slices/shopFiltersSlice";
import { sortOptionType } from "../../types";
import { useTheme } from "@mui/material";
import { Box, Typography, Stack } from "@mui/material";
import { Gradient_Button } from "@/components/ui/gradientButton";
import BottomSheet from "@/components/ui/special/bottomSheet";

export default function SortComponent({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    const t = useTheme()
    const dispatch = useAppDispatch();
    const { SortItem: sort } = useAppSelector((state) => state.filters);

    const sortOptions: sortOptionType[] = [
        { label: "Alphabetically, A to Z", SortBy: "name", SortOrder: "asc" },
        { label: "Alphabetically, Z to A", SortBy: "name", SortOrder: "desc" },
        { label: "Price, low to high", SortBy: "price", SortOrder: "asc" },
        { label: "Price, high to low", SortBy: "price", SortOrder: "desc" },
        { label: "Popularity", SortBy: "popularity", SortOrder: "desc" },
        { label: "Year - Newest to Oldest", SortBy: "createdat", SortOrder: "desc" },
        { label: "Year - Oldest to Newest", SortBy: "createdat", SortOrder: "asc" }
    ];

    const handleSelect = (option: sortOptionType) => {
        dispatch(setSortItem(option));
        setOpen(false);
    };

    return (
        <BottomSheet open={open} setOpen={setOpen}>
            <Box bgcolor={t.tokens.backgroundColors.main} minHeight={"70vh"} padding={"16px"} >
                <Typography variant="titleSmall" fontSize={"16px"}>Sort By</Typography>
                <Stack mt={"16px"} direction={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={"8px"}>
                    {sortOptions.map((option, index) => (
                        <SortingOptionElement
                            key={index}
                            selected={sort?.label === option.label}
                            option={option}
                            onSelect={handleSelect}
                        />
                    ))}
                </Stack>
            </Box>
        </BottomSheet>
    )
}

function SortingOptionElement({ selected, option, onSelect }: {
    selected: boolean,
    option: sortOptionType,
    onSelect: (sort: sortOptionType) => void
}) {
    const t = useTheme()
    if (selected) {
        return (
            <Gradient_Button variant="gradientBorder" size="small" sx={{ width: "100%", borderWidth: "1px", borderRadius: "8px", padding: "20px 16px !important", justifyContent: "flex-start", bgcolor: t.buttonVariants.outline.hoverBg }} >
                <Typography variant="captionSmall" fontSize={"16px"}>{option.label}</Typography>
            </Gradient_Button>
        )
    }
    else {
        return (
            <Box width={"100%"} border={"1px solid #D0D5DD"} borderRadius={"8px"} padding={"12px 16px"} sx={{ "&:hover": { bgcolor: t.buttonVariants.outline.hoverBg }, cursor: "pointer" }} onClick={() => { onSelect(option) }}>
                <Typography variant="captionSmall" fontSize={"16px"}>{option.label}</Typography>
            </Box>
        )
    }
}

