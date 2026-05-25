import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import { useAppSelector } from '@/Redux/store';
import { useDispatch } from 'react-redux';
import { sizeType } from '../../types';
import { setSizesSelected } from '@/Redux/slices/shopFiltersSlice';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SizeFilter({ sizes }: { sizes: sizeType[] }) {

    const t = useTheme()
    const { sizesSelected } = useAppSelector((state) => state.filters)
    const dispatch = useDispatch()
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedSizes = searchParams.get("size")?.split(",") || []
    function handleSizeSelect(size: sizeType) {
        if (selectedSizes.includes(size.name)) { // case of the size is already selected
            const params = new URLSearchParams(searchParams.toString());
            const newSizes = selectedSizes.filter((c: string) => c !== size.name);
            if (newSizes.length > 0) {
                params.set("size", newSizes.join(","));

            } else {
                params.delete("size");
            }
            params.set("page", "1")
            router.push(`?${params.toString()}`);
        } else {
            const params = new URLSearchParams(searchParams.toString());
            const newSizes = [...selectedSizes, size.name];
            params.set("size", newSizes.join(","));
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
                <Typography component="span" variant="inputLabel" fontSize={"16px"} color="black">Size</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Box>
                    <FormGroup>
                        {sizes?.map((s: sizeType) => (
                            <FormControlLabel key={s.id} control={<Checkbox color={"secondary"} checked={selectedSizes?.includes(s.name)} onChange={() => handleSizeSelect(s)} />} label={s.name} />
                        ))}
                    </FormGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}