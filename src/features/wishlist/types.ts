export type WishlistItem = {
  id: number;
  productId: number; // ✅ بدل string
  name: string;
  category: string;
  image: string;
  price: number;
  isLiked: boolean;
};