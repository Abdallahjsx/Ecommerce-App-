import { apiCall } from "@/services/apiClient";
export const getProductDetails = async (id: string) => {
    const res = await apiCall.get(`api/Product/${id}`);
    return res.data;
};
