import { Box, Stack } from "@mui/material";
import GradientFilterCheckBox from "@/components/ui/special/gradientFilterCheckBox";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setStockStatus } from "@/Redux/slices/shopFiltersSlice";

export default function StockFilterBottomSheet() {
    const dispatch = useAppDispatch();
    const { stockStatus } = useAppSelector((state) => state.filters);
    const stockOptions = [
        { label: "In Stock", value: "InStock" },
        { label: "Out of Stock", value: "OutStock" }
    ];

    return (
        <Box>
            <Stack gap={"8px"} direction={"column"}>
                {stockOptions.map((option, index) => (
                    <GradientFilterCheckBox
                        key={index}
                        label={option.label}
                        checked={stockStatus === option.value}
                        onChange={() => {
                            dispatch(setStockStatus(stockStatus === option.value ? null : option.value));
                        }}
                    />
                ))}
            </Stack>
        </Box>
    )
}