import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchColors, fetchSizes } from "../services";
export const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: () => fetchCategories(),
    })
}

export const useGetColors = () => {
    return useQuery({
        queryKey: ["colors"],
        queryFn: () => fetchColors(),
        staleTime: Infinity,
        gcTime: Infinity,
    })
}

export const useGetSizes = () => {
    return useQuery({
        queryKey: ["sizes"],
        queryFn: () =>  fetchSizes(),
        staleTime: Infinity,
        gcTime: Infinity,
    })
}

