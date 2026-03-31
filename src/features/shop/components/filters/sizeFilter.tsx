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
import { useGetSizes } from '../../hooks/useLookUps.hook';
import { sizeType } from '../../types';
import { setSize } from '@/Redux/slices/shopFiltersSlice';
export default function SizeFilter() {

    const t = useTheme()
    const { size } = useAppSelector((state) => state.filters)
    const dispatch = useDispatch()
    const { data, isLoading, isFetching, isSuccess } = useGetSizes()
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
                        {data?.data.map((s: sizeType) => (
                            <FormControlLabel key={s.id} control={<Checkbox color={"secondary"} checked={s.id === size?.id} onChange={(e) => dispatch(setSize(s))} />} label={s.name} />
                        ))}
                    </FormGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}