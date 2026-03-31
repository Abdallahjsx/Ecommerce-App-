import { apiCall } from "@/services/apiClient";

export const toggleWishlist = async (productId: string) => {
    return await apiCall.post(`api/Wishlist/${productId}/toggle-love`);
}

export const getWishlist = async () => {
    return await apiCall.get(`api/Wishlist`);
}
