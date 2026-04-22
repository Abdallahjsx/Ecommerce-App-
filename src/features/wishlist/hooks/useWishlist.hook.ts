import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../services";
import { WishlistItem } from "../types";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useWishlist = () => {
  const query = useQuery<WishlistItem[]>({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
    retry: 1, // ✅ اختياري
  });

  // ✅ handle error هنا بدل onError
  useEffect(() => {
    if (query.isError) {
      toast.error("Failed to load wishlist");
    }
  }, [query.isError]);

  return query;
};