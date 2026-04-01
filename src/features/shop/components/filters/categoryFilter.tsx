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
import { mainCategoryType } from '../../types';
import { useAppDispatch, useAppSelector } from '@/Redux/store';
import { setMainCategory } from '@/Redux/slices/shopFiltersSlice';
export default function CategoryFilter({ categories }: { categories: mainCategoryType[] }) {

    const t = useTheme()
    const dispatch = useAppDispatch()
    const { mainCategory } = useAppSelector((state) => state.filters)
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
                <Box>
                    <FormGroup>
                        {categories?.map((category) => (
                            <FormControlLabel key={category.id} control={<Checkbox color={"secondary"} checked={mainCategory?.some((item) => item.id === category.id)} onChange={(e) => {
                                if (e.target.checked) {
                                    dispatch(setMainCategory([...mainCategory, category]))
                                } else {
                                    dispatch(setMainCategory(mainCategory.filter((item) => item.id !== category.id)))
                                }
                            }} />} label={category.name} />
                        ))}

                    </FormGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}