import { useMutation, useQueryClient } from "@tanstack/react-query"

import { addToCart } from "../services"

export const useAddToCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: { productId: string, color: string, size: string, quantity: number }[]) => addToCart(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            alert("Product added to cart successfully");
        },
        onError: (error) => {
            alert(error.message);
        },
    })
}