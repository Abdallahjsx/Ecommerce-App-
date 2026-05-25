import ShopClient from "@/features/shop/shopClient";
import { fetchProductsOnServer, fetchCategories, fetchColors, fetchSizes } from "@/features/shop/services";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Shop",
};
export default async function Shop({ searchParams }: { searchParams: Promise<{ categoryId?: string, search?: string, minPrice?: string, maxPrice?: string, color?: string, size?: string, page?: string, stockStatus?: string, sortBy?: string, sortOrder?: string}> }) {
    const { categoryId, color, size, stockStatus, minPrice, maxPrice, page, sortBy, sortOrder, search } = await searchParams;
    const resProducts = await fetchProductsOnServer({ categoryId: categoryId?.split(","), colors: color?.split(","), sizes: size?.split(","), stockStatus: stockStatus, minPrice, maxPrice, page, sortBy: sortBy, sortOrder: sortOrder, search: search });
    const resCategories = await fetchCategories();
    const resColors = await fetchColors();
    const resSizes = await fetchSizes();
    return (
        <ShopClient trialProducts={resProducts.data} categories={resCategories?.data || []} colors={resColors?.data || []} sizes={resSizes?.data || []} pageIndex={Number(page)} />
    )
}