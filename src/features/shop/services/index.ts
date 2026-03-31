import { apiCall } from "@/services/apiClient";
import { getProductsShopParams } from "../types";
export const getProductsShop = async ({ pageIndex, filters }: getProductsShopParams) => {
    const response = await apiCall.get(`/api/Product`, {
        params: {
            PageIndex: pageIndex,
            PageSize: 10,
            category: filters?.mainCategory?.id,
            //  subCategories:filters?.subCategories,
            MinPrice: filters?.priceRange?.[0],
            MaxPrice: filters?.priceRange?.[1],
            // StockStatus: filters?.stockStatus,
            Size: filters?.size?.name,
            Color: filters?.colors?.[0].name,
            Search: filters?.Search,
            SortBy: filters?.SortItem?.SortBy,
            SortOrder: filters?.SortItem?.SortOrder,


        }
    });
    return response.data;
}

export const getCategories = async () => {
    const response = await apiCall.get(`/api/Product/Categories`);
    return response.data;
}

export const getColors = async () => {
    const response = await apiCall.get(`/api/Lookup/colors`);
    return response.data;
}

export const getSizes = async () => {
    const response = await apiCall.get(`/api/Lookup/sizes`);
    return response.data;
}


