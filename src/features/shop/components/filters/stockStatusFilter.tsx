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
import { useRouter, useSearchParams } from 'next/navigation';

export default function StockStatusFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const stockStatus = searchParams.get("stockStatus")
    const t = useTheme()
    // const { stockStatus } = useAppSelector((state) => state.filters)
    const dispatch = useDispatch()
    const handleStockStatusChange = (value: string) => {
        console.log(value)
    }
    const addInStock = () => {
        if (stockStatus !== "InStock") {
            params.set("stockStatus", "InStock");
            params.set("page", "1");
            router.push(`/shop?${params.toString()}`);
        } else {
            params.delete("stockStatus");
            params.set("page", "1");
            router.push(`/shop?${params.toString()}`);
        }
    }
    const addOutOfStock = () => {
        if (stockStatus !== "OutStock") {
            params.set("stockStatus", "OutStock");
            router.push(`/shop?${params.toString()}`);
        } else {
            params.delete("stockStatus");
            router.push(`/shop?${params.toString()}`);
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
                        <FormControlLabel control={<Checkbox color={"secondary"} checked={stockStatus == "InStock"} onChange={addInStock} />} label="In Stock" />
                        <FormControlLabel control={<Checkbox color={"secondary"} checked={stockStatus == "OutStock"} onChange={addOutOfStock} />} label="Out of Stock" />
                    </FormGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}