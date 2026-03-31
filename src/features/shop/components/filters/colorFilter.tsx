import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import ColorSelectionItem from '@/components/ui/special/colorSelectionItem';
import { useGetColors } from '@/features/shop/hooks/useLookUps.hook';
import { useAppDispatch, useAppSelector } from '@/Redux/store';
import { setColors } from '@/Redux/slices/shopFiltersSlice';
import { colorType } from '@/features/shop/types';

export default function ColorFilter() {
    const { colors: selectedColor } = useAppSelector((state) => state.filters);
    const dispatch = useAppDispatch();
    const t = useTheme()
    const { data: colors, isSuccess } = useGetColors();
    function handleColorChange(color: colorType) {
        if (selectedColor?.includes(color)) {
            dispatch(setColors(selectedColor?.filter((c: colorType) => c !== color)))
        } else {
            if (selectedColor) {
                dispatch(setColors([...selectedColor, color]))
            } else {
                dispatch(setColors([color]))
            }
        }
    }

    return (
        <Accordion disableGutters sx={{ bgcolor: "transparent", border: "none", boxShadow: "none", '&:before': { display: 'none' } }} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ padding: "0px" }}
            >
                <Typography component="span" variant="inputLabel" fontSize={"16px"} color="black">Color</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Box display={"flex"} flexWrap="wrap" gap={2}>
                    {isSuccess && colors?.data.map((option: colorType, index: number) => (
                        <ColorSelectionItem key={index} color={option.hexCode} checked={selectedColor?.includes(option) ?? false} onChange={() => {
                            handleColorChange(option)
                        }} />
                    ))} </Box>
            </AccordionDetails>
        </Accordion>
    )
}