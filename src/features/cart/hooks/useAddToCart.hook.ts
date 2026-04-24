import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../services";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      productId: number;
      color: string;
      size: string;
      quantity: number;
    }[]) =>
      addToCart(
        data.map((item) => ({
          ...item,
          change: 0, // ✅ مهم
        }))
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      alert("Product added to cart successfully");
    },

    onError: (error: any) => {
      alert(error.message);
    },
  });
};
