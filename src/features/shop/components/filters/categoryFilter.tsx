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
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CategoryFilter({ categories }: { categories: mainCategoryType[] }) {

    const t = useTheme()
    const router = useRouter()
    const searchParams = useSearchParams()
    const selectedCategories = searchParams.get("categoryId")?.split(",") || []
    function handleAddCategoryToSelctedCategories(categoryId: string) {
        const params = new URLSearchParams(searchParams.toString());
        selectedCategories.push(categoryId)
        params.set("categoryId", selectedCategories.join(","))
        params.set("page", "1")
        router.push(`/shop?${params}`)
    }
    function handleRemoveFromSelectedCategories(categoryId: string) {
        const params = new URLSearchParams(searchParams.toString());
        const newCategories = selectedCategories.filter((item) => item !== categoryId)
        if (newCategories.length === 0 || newCategories[0] === "") {
            params.delete("categoryId")
        } else {
            params.set("categoryId", newCategories.join(","))
        }
        params.set("page", "1")
        router.push(`/shop?${params}`)
    }
    useEffect(() => {
        console.log("searchParams", searchParams.get("categoryId")?.split(","))
    }, [searchParams])
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
                            <FormControlLabel key={category.id} control={<Checkbox color={"secondary"} checked={selectedCategories.includes(category.id.toString())} onChange={(e) => {
                                if (e.target.checked) {
                                    // dispatch(setMainCategory([...mainCategory, category]))
                                    handleAddCategoryToSelctedCategories(category.id.toString())
                                } else {
                                    // dispatch(setMainCategory(mainCategory.filter((item) => item.id !== category.id)))
                                    handleRemoveFromSelectedCategories(category.id.toString())
                                }
                            }} />} label={category.name} />
                        ))}

                    </FormGroup>
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}