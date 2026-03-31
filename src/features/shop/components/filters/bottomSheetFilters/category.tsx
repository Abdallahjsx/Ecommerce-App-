import React from "react";
import { Stack } from "@mui/material";
import GradientFilterCheckBox from "@/components/ui/special/gradientFilterCheckBox";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setMainCategory } from "@/Redux/slices/shopFiltersSlice";
import { useGetCategories } from "../../../hooks/useLookUps.hook";
import { mainCategoryType } from "../../../types";

export default function CategoryFilterBottomSheet() {
    const dispatch = useAppDispatch();
    const { mainCategory } = useAppSelector((state) => state.filters);
    const { data } = useGetCategories();

    return (
        <Stack gap={"8px"} direction={"column"}>
            {data?.data.map((option: mainCategoryType) => (
                <GradientFilterCheckBox
                    key={option.id}
                    label={option.name}
                    checked={mainCategory?.id === option.id}
                    onChange={() => {
                        dispatch(setMainCategory(mainCategory?.id === option.id ? null : option))
                    }}
                />
            ))}
        </Stack>
    )
}