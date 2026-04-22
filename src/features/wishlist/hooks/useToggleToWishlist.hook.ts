import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleWishlist } from "../services";
import { WishlistItem } from "../types";
import toast from "react-hot-toast";

export const useToggleToWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: number) => toggleWishlist(productId),

    // ✅ Optimistic Update
    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: ["wishlist"] });

      const previousWishlist =
        queryClient.getQueryData<WishlistItem[]>(["wishlist"]);

      queryClient.setQueryData<WishlistItem[]>(["wishlist"], (old = []) => {
        const exists = old.find((item) => item.productId === productId);

        if (exists) {
          return old.filter((item) => item.productId !== productId);
        } else {
          return [
            ...old,
            {
              id: Date.now(),
              productId: productId,
              name: "Loading...",
              category: "",
              image: "",
              price: 0,
              isLiked: true,
            },
          ];
        }
      });

      return { previousWishlist };
    },

    // ❌ Error → rollback + toast
    onError: (_err, _productId, context) => {
      queryClient.setQueryData(["wishlist"], context?.previousWishlist);
      toast.error("Failed to update wishlist");
    },

    // ✅ Success
    onSuccess: () => {
      toast.success("Wishlist updated"); // ✅ الجديد
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },

    // ✅ اختياري (أفضل)
    retry: false,
  });
};