import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProductsShop } from "../services";
import { useAppSelector } from "@/Redux/store";

export function useGetProducts({ pageIndex }: { pageIndex: number }) {
    const { mainCategory, subCategories, priceRange, stockStatus, colors, Search, SortItem, size } = useAppSelector((state) => state.filters);
    return useQuery({
        queryKey: ["products", pageIndex, mainCategory, subCategories, priceRange, stockStatus, colors, Search, SortItem, size],
        queryFn: () => getProductsShop({ pageIndex, filters: { mainCategory, subCategories, priceRange, stockStatus, colors, Search, SortItem, size } }),
        placeholderData: keepPreviousData,
        staleTime: 5 * 60 * 1000,
    })
}