import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import ColorSelectionItem from '@/components/ui/special/colorSelectionItem';

export default function ColorFilter() {

    const t = useTheme()

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
                    <ColorSelectionItem color='red' checked={false} />
                    <ColorSelectionItem color='blue' checked={true} />
                    <ColorSelectionItem color='green' checked={false} />
                    <ColorSelectionItem color='yellow' checked={false} />
                    <ColorSelectionItem color='purple' checked={false} />
                    <ColorSelectionItem color='black' checked={false} />
                    <ColorSelectionItem color='white' checked={false} />
                    <ColorSelectionItem color='gray' checked={false} />
                    <ColorSelectionItem color='#41781d8f' checked={false} />
                    <ColorSelectionItem color='#16a6a1ff' checked={false} />
                    <ColorSelectionItem color='#e00070ff' checked={false} />


                </Box>
            </AccordionDetails>
        </Accordion>
    )
}