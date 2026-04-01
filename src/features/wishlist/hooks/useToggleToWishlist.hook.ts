import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleWishlist } from "../services";

export const useToggleToWishlist = (callbackOnSuccess?: () => void) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (productId: string) => toggleWishlist(productId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
            callbackOnSuccess?.();
        }, onError: () => {
            alert("Failed to toggle wishlist")
        }

    })
}
