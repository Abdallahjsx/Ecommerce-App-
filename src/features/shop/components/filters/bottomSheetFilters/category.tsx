import React from "react";
import { Stack } from "@mui/material";
import GradientFilterCheckBox from "@/components/ui/special/gradientFilterCheckBox";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setMainCategory } from "@/Redux/slices/shopFiltersSlice";
import { useGetCategories } from "../../../hooks/useLookUps.hook";
import { mainCategoryType } from "../../../types";

export default function CategoryFilterBottomSheet({ categories }: { categories: mainCategoryType[] }) {
    const dispatch = useAppDispatch();
    const { mainCategory } = useAppSelector((state) => state.filters);

    return (
        <Stack gap={"8px"} direction={"column"}>
            {categories.map((option: mainCategoryType) => (
                <GradientFilterCheckBox
                    key={option.id}
                    label={option.name}
                    checked={mainCategory?.some((category) => category.id === option.id)}
                    onChange={() => {
                        dispatch(setMainCategory(mainCategory?.some((category) => category.id === option.id) ? mainCategory.filter((category) => category.id !== option.id) : [...mainCategory, option]))
                    }}
                />
            ))}
        </Stack>
    )
}