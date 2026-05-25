import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { addToCart, getCart2 } from "../services";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      data: {
        productId: number;
        color: string;
        size: string;
        quantity: number;
      }[],
    ) =>
      addToCart(
        data.map((item) => ({
          ...item,
          change: 0, // ✅ مهم
        })),
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
export const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart2,
  });
};
