import { apiCall } from "@/services/apiClient";

// 🔹 Types
type AddToCartType = {
  productId: number;
  color: string;
  size: string;
  quantity: number;
};

// 🔹 Add To Cart
export const addToCart = async (data: AddToCartType[]) => {
  return apiCall.post("api/Cart", {
    items: data,
  });
};

// 🔹 Get Cart (FIXED)
export const getCart = async () => {
  try {
    const res = await apiCall.get("api/Cart");

    return {
      data: {
        cartItems: res.data?.data?.cartItems || [],
      },
    };
  } catch (error: any) {
    // 👇 لو الكارت فاضي والـ API رجّع 404
    if (error?.response?.status === 404) {
      return {
        data: {
          cartItems: [],
        },
      };
    }

    // 👇 أي error تاني يعتبر error حقيقي
    throw error;
  }
};
// get cart for use query
export async function getCart2() {
  const res = await apiCall.get("api/Cart");
  return res.data;
}

// 🔹 Update Cart (increase / decrease / remove)
export const updateCart = async (
  items: {
    productId: number;
    quantity: number;
    change: number;
    color: string;
    size: string;
  }[],
) => {
  const res = await apiCall.put("api/Cart", {
    items,
  });
  return res.data;
};

// 🔹 Clear Cart
export const clearCart = async () => {
  const res = await apiCall.delete("api/Cart");
  return res.data;
};
