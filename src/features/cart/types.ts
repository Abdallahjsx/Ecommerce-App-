// 🔹 Product داخل الكارت
export type CartProduct = {
  productId: number;
  productName: string;
  category: string;
  size: string;
  color: string;
  productPrice: number;
  productMediaUrls: string[];
  quantity: number;
};

// 🔹 Response بتاع GET /api/Cart
export type CartResponse = {
  items: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
};

// 🔹 Request بتاع PUT /api/Cart (update / remove)
export type UpdateCartItem = {
  productId: number;
  quantity: number; // القيمة النهائية
  change: number; // دايمًا = 0
  color: string;
  size: string;
};

// 🔹 Request بتاع POST /api/Cart (add to cart)
export type AddToCartItem = {
  productId: number;
  color: string;
  size: string;
  quantity: number;
};
