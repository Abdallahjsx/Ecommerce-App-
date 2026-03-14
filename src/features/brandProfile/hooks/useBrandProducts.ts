"use client";

import { useState, useEffect } from "react";
import { getBrandProducts } from "../services";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  haveOffer: boolean;
  discountPercentage?: number;
  mediaUrl: string;
  stockStatus: string;
  category: {
    id: number;
    name: string;
  };
  reviewsSummary: {
    averageRating: number;
    totalReviews: number;
  };
}

export function useBrandProducts(brandId: number) {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await getBrandProducts(brandId);
        if (response.success) {
          setData(response.data.data); 
        } else {
          setError(response.message?.en || "Failed to fetch products");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (brandId) {
      fetchProducts();
    }
  }, [brandId]);

  return { data, loading, error };
}
