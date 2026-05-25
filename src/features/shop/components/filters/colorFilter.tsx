import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import ColorSelectionItem from '@/components/ui/special/colorSelectionItem';
import { useAppDispatch, useAppSelector } from '@/Redux/store';
import { setColors } from '@/Redux/slices/shopFiltersSlice';
import { colorType } from '@/features/shop/types';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ColorFilter({ allColors }: { allColors: colorType[] }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { colors: selectedColor } = useAppSelector((state) => state.filters);
    const dispatch = useAppDispatch();
    const t = useTheme()
    const selectedColors = searchParams.get("color")?.split(",") || []
    function handleColorChange(color: colorType) {
        if (selectedColors.includes(color.name.toLocaleLowerCase())) { // case of the color is already selected
            const params = new URLSearchParams(searchParams.toString());
            const newColors = selectedColors.filter((c: string) => c !== color.name.toLocaleLowerCase());
            if (newColors.length > 0) {
                params.set("color", newColors.join(","));
            } else {
                params.delete("color");
            }
            params.set("page", "1")
            router.push(`?${params.toString()}`);
        } else {
            const params = new URLSearchParams(searchParams.toString());
            const newColors = [...selectedColors, color.name.toLocaleLowerCase()];
            params.set("color", newColors.join(","));
            params.set("page", "1")
            router.push(`?${params.toString()}`);
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
                    {allColors.map((option: colorType, index: number) => (
                        <ColorSelectionItem key={index} color={option.hexCode} checked={selectedColors.includes(option.name.toLocaleLowerCase()) ?? false} onChange={() => {
                            handleColorChange(option)
                        }} />
                    ))} </Box>
            </AccordionDetails>
        </Accordion>
    )
}