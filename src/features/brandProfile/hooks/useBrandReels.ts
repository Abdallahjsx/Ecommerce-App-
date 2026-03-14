"use client";

import { useState, useEffect } from "react";
import { getBrandReels } from "../services";

export interface Reel {
  reelId: number;
  title: string;
  thumbnailUrl: string;
  numOfWatches: number;
  numOfLikes: number;
  createdAt: string;
  videoUrl: string;
}

export function useBrandReels(brandId: number) {
  const [data, setData] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReels() {
      try {
        setLoading(true);
        const response = await getBrandReels(brandId);
        if (response.success) {
          setData(response.data);
        } else {
          setError(response.message?.en || "Failed to fetch reels");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (brandId) {
      fetchReels();
    }
  }, [brandId]);

  return { data, loading, error };
}
