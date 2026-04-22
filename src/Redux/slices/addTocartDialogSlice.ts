import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductColorSize } from "@/types";
const initialState: {
    openAddToCartDialog: boolean;
    productId: string | null;
    availableColors: ProductColorSize[];
} = {
    openAddToCartDialog: false,
    productId: null,
    availableColors: [],
};
const addToCartDialogSlice = createSlice({
    name: "addToCartDialog",
    initialState,
    reducers: {
        setOpenAddToCartDialog: (state, action: PayloadAction<boolean>) => {
            state.openAddToCartDialog = action.payload;
        },
        setProductId: (state, action: PayloadAction<string | null>) => {
            state.productId = action.payload;
        },
        setAvailableColors: (state, action: PayloadAction<ProductColorSize[]>) => {
            state.availableColors = action.payload;
        },
    }
})

export default addToCartDialogSlice.reducer;
export const { setOpenAddToCartDialog, setProductId, setAvailableColors } = addToCartDialogSlice.actions
