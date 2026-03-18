import { apiCall } from "@/services/apiClient";

export const getProductsShop = async ({ pageIndex }: { pageIndex: number }) => {
    const response = await apiCall.get(`/api/Product?PageIndex=${pageIndex}&PageSize=10`);
    return response.data;
}