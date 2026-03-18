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
export default function StockStatusFilter() {

    const t = useTheme()

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
                        <FormControlLabel control={<Checkbox color={"secondary"} />} label="In Stock" />
                        <FormControlLabel control={<Checkbox color={"secondary"} />} label="Out of Stock" />
                    </FormGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}