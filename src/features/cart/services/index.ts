import { apiCall } from "@/services/apiClient";
type addToCartType = {
    productId: string;
    color: string;
    size: string;
    quantity: number;
}
export const addToCart = async (data: addToCartType[]) => {
    return apiCall.post(`api/Cart`, {
        items: data,
    });
};