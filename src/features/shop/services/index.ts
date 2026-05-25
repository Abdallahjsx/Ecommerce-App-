import { apiCall } from "@/services/apiClient";
import { getProductsShopParams, mainCategoryType } from "../types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

function getCategoryIds(categories: mainCategoryType[]) {
  return categories.map((category) => category.id).join(",");
}
export const getProductsShop = async ({
  pageIndex,
  filters,
}: getProductsShopParams) => {
  const sizes = filters?.sizesSelected?.map((size) => {
    return { Sizes: size.name };
  });
  const response = await apiCall.get(`/api/Product`, {
    params: {
      PageIndex: pageIndex,
      PageSize: 10,
      category: getCategoryIds(filters?.mainCategory || []),
      //  subCategories:filters?.subCategories,
      MinPrice: filters?.priceRange?.[0],
      MaxPrice: filters?.priceRange?.[1],
      StockStatus: filters?.stockStatus,
      Color: filters?.colors?.[0].name,
      Search: filters?.Search,
      SortBy: filters?.SortItem?.SortBy,
      SortOrder: filters?.SortItem?.SortOrder,
    },
  });
  return response.data;
};

export const fetchProductsOnServer = async ({
  categoryId,
  colors,
  sizes,
  stockStatus,
  minPrice,
  maxPrice,
  page = "1",
  sortBy,
  sortOrder,
  search,
}: {
  categoryId?: string[];
  colors?: string[];
  sizes?: string[];
  stockStatus?: string;
  minPrice?: string;
  maxPrice?: string;
  page?: string;
  sortBy?: string;
  sortOrder?: string;
  search?: string;
}) => {
  const params = new URLSearchParams();
  if (categoryId) {
    params.set("Category", categoryId[0]);
  }
  if (colors) {
    params.set("Colors", colors[0]);
  }
  if (sizes) {
    params.set("Sizes", sizes[0]);
  }
  if (stockStatus) {
    params.set("StockStatus", stockStatus);
  }
  if (minPrice) {
    params.set("MinPrice", minPrice);
  }
  if (maxPrice) {
    params.set("MaxPrice", maxPrice);
  }
  if (sortBy) {
    params.set("SortBy", sortBy);
  }
  if (sortOrder) {
    params.set("SortOrder", sortOrder);
  }
  if (search) {
    params.set("Search", search);
  }
  params.set("PageIndex", page);
  params.set("PageSize", "10");

  const response = await fetch(`${baseUrl}/api/Product?${params.toString()}`);
  return response.json();
};
export async function fetchCategories() {
  const response = await fetch(`${baseUrl}/api/Product/categories`);
  return response.json();
}

export async function fetchColors() {
  const response = await fetch(`${baseUrl}/api/Lookup/colors`);
  return response.json();
}

export async function fetchSizes() {
  const response = await fetch(`${baseUrl}/api/Lookup/sizes`);
  return response.json();
}
