"use client";

import { useState, useEffect } from "react";
import { getBrandInfo } from "../services";

interface BrandInfo {
  displayName: string;
  logoUrl: string;
  followersCount: number;
  totalReelLikes: number;
  description?: string;
}

export function useBrandInfo(brandId: number) {
  const [data, setData] = useState<BrandInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInfo() {
      try {
        setLoading(true);
        const response = await getBrandInfo(brandId);
        if (response.success) {
          setData(response.data);
        } else {
          setError(response.message?.en || "Failed to fetch brand info");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (brandId) {
      fetchInfo();
    }
  }, [brandId]);

  return { data, loading, error };
}
