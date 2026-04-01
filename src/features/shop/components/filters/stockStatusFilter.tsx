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
import { setStockStatus } from '@/Redux/slices/shopFiltersSlice';
export default function StockStatusFilter() {

    const t = useTheme()
    const { stockStatus } = useAppSelector((state) => state.filters)
    const dispatch = useDispatch()
    const handleStockStatusChange = (value: string) => {
        console.log(value)
    }
    const addInStock = (checked: any) => {
        if (checked) {
            dispatch(setStockStatus("InStock"))
        } else {
            dispatch(setStockStatus(null))
        }
    }
    const addOutOfStock = (checked: any) => {
        if (checked) {
            dispatch(setStockStatus("OutStock"))
        } else {
            dispatch(setStockStatus(null))
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
                <Typography component="span" variant="inputLabel" fontSize={"16px"} color="black">Stock Status</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Box>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color={"secondary"} checked={stockStatus == "InStock"} onChange={(e) => addInStock(e.target.checked)} />} label="In Stock" />
                        <FormControlLabel control={<Checkbox color={"secondary"} checked={stockStatus == "OutStock"} onChange={(e) => addOutOfStock(e.target.checked)} />} label="Out of Stock" />
                    </FormGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}