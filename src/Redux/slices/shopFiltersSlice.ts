"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "@/features/shop/types";
import { mainCategoryType, colorType, sortOptionType, sizeType } from "@/features/shop/types";
const initialState: FiltersState = {
    mainCategory: null,
    subCategories: null,
    priceRange: [100, 800],
    stockStatus: null,
    size: null,
    colors: null,
    Search: undefined,
    SortItem: null,

};
const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setMainCategory: (state, action: PayloadAction<mainCategoryType | null>) => {
            state.mainCategory = action.payload;
        },
        setSubCategories: (state, action: PayloadAction<string | null>) => {
            if (action.payload === null) {
                state.subCategories = null;
            } else {
                state.subCategories = state.subCategories ? [...state.subCategories, action.payload] : [action.payload];
            }
        },
        setPriceRange: (state, action: PayloadAction<number[]>) => {
            state.priceRange = action.payload;
        },
        setStockStatus: (state, action: PayloadAction<string | null>) => {
            state.stockStatus = action.payload;
        },
        setColors: (state, action: PayloadAction<colorType[] | null>) => {
            state.colors = action.payload;
        },
        removeColor: (state, action: PayloadAction<colorType>) => {
            if (state.colors) {
                state.colors = state.colors.filter((color) => color.id !== action.payload.id);
            }
        },
        setSize: (state, action: PayloadAction<sizeType | null>) => {

            state.size = action.payload;

        },
        setSearch: (state, action: PayloadAction<string | undefined>) => {
            state.Search = action.payload;
        },
        setSortItem: (state, action: PayloadAction<sortOptionType | null>) => {
            state.SortItem = action.payload;
        },
        clearAllFilters: (state) => {
            state.mainCategory = null;
            state.subCategories = null;
            state.priceRange = [100, 800];
            state.stockStatus = null;
            state.colors = null;
            state.Search = "";
            state.size = null;
        }

    }
})

export default filtersSlice.reducer;
export const { setMainCategory, setSubCategories, setPriceRange, setStockStatus, setColors, setSearch, setSortItem, clearAllFilters, removeColor, setSize } = filtersSlice.actions
