import { Box, Stack } from "@mui/material";
import ColorSelectionItem from "@/components/ui/special/colorSelectionItem";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setColors } from "@/Redux/slices/shopFiltersSlice";
import { useGetColors } from "../../../hooks/useLookUps.hook";
import { colorType } from "../../../types";

export default function ColorFilterBottomSheet() {
    const dispatch = useAppDispatch();
    const { colors: selectedColor } = useAppSelector((state) => state.filters);
    const { data: colors } = useGetColors();

    function handleColorChange(color: colorType) {
        if (selectedColor?.some(c => c.id === color.id)) {
            dispatch(setColors(selectedColor.filter((c) => c.id !== color.id)));
        } else {
            dispatch(setColors(selectedColor ? [...selectedColor, color] : [color]));
        }
    }

    return (
        <Box>
            <Stack gap={"14px"} direction={"row"} flexWrap={"wrap"}>
                {colors?.data.map((option: colorType, index: number) => (
                    <ColorSelectionItem
                        key={index}
                        color={option.hexCode}
                        checked={selectedColor?.some(c => c.id === option.id) ?? false}
                        onChange={() => handleColorChange(option)}
                    />
                ))}
            </Stack>
        </Box>
    )
}