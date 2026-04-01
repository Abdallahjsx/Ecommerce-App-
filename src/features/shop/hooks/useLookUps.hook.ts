import { useQuery } from "@tanstack/react-query";
import { getCategories, getColors, getSizes } from "../services";
export const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: () => getCategories(),
    })
}

export const useGetColors = () => {
    return useQuery({
        queryKey: ["colors"],
        queryFn: () => getColors(),
        staleTime: Infinity,
        gcTime: Infinity,
    })
}

export const useGetSizes = () => {
    return useQuery({
        queryKey: ["sizes"],
        queryFn: () => getSizes(),
        staleTime: Infinity,
        gcTime: Infinity,
    })
}

