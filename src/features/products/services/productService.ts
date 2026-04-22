import { apiCall } from "../../../services/apiClient";
import { ProductQueryParams, ProductResponse } from "../types";

export async function getProducts(params: ProductQueryParams = {}): Promise<ProductResponse> {
  // Filter out undefined/null values
  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v !== undefined && v !== null)
  );
  
  const res = await apiCall.get("/api/Product", { params: cleanParams });
  return res.data;
}

export async function getProductById(id: number) {
  const res = await apiCall.get(`/api/Product/${id}`);
  return res.data;
}
