import { Box, Stack } from "@mui/material";
import GradientFilterCheckBox from "@/components/ui/special/gradientFilterCheckBox";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setSizesSelected } from "@/Redux/slices/shopFiltersSlice";
import { sizeType } from "../../../types";


export default function SizeFilterBottomSheet({ sizes }: { sizes: sizeType[] }) {
    const dispatch = useAppDispatch();
    const { sizesSelected } = useAppSelector((state) => state.filters);
    const stockOptions = [
        { label: "In Stock", value: "InStock" },
        { label: "Out of Stock", value: "OutStock" }
    ];

    return (
        <Box>
            <Stack gap={"8px"} direction={"column"}>
                {sizes?.map((option, index) => (
                    <GradientFilterCheckBox
                        key={index}
                        label={option.name}
                        checked={sizesSelected?.includes(option)}
                        onChange={() => {
                            dispatch(setSizesSelected(option));
                        }}
                    />
                ))}
            </Stack>
        </Box>
    )
}