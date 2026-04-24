import { apiCall } from "@/services/apiClient";
import { WishlistItem } from "../types";

const BASE_URL = "https://alluvo-api-stating.runasp.net/";

export const getWishlist = async (): Promise<WishlistItem[]> => {
  const response = await apiCall.get("api/Wishlist");

  return response.data.data.products.map((item: any) => ({
    id: item.productId,
    productId: item.productId,
    name: item.name,
    category: item.category,

    // ✅ fix image
    image: item.imageUrl
      ? BASE_URL + encodeURI(item.imageUrl.replace(/^\/+/, ""))
      : "/assets/images/placeholder.png",

    price: item.price ?? 0,
    isLiked: true,
  }));
};

// Toggle Wishlist
export const toggleWishlist = async (productId: number) => {
  const response = await apiCall.post(
    `api/Wishlist/${productId}/toggle-love`
  );
  return response.data;
};
