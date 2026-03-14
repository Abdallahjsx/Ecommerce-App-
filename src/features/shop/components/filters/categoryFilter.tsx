import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import useTheme from '@mui/material';
export default function CategoryFilter() {
    const t = useTheme()
    
    return (
        <Accordion disableGutters sx={{ bgcolor: "transparent", border: "none", boxShadow: "none", '&:before': { display: 'none' } }} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ padding: "0px" }}
            >
                <Typography component="span" variant="inputLabel" fontSize={"16px"} color="black">Category</Typography>
            </AccordionSummary>
            <AccordionDetails >
               <FormControlLabels
          value="bottom"
          control={<Checkbox  sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}/>}
          label="All"
          labelPlacement="right"
        />
            </AccordionDetails>
        </Accordion>
    )
}