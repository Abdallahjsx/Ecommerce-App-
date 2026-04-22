"use client";

import { useState, useEffect } from "react";
import { getBrandReviews } from "../services";

export interface Review {
  reviewId: number;
  rating: number;
  comment: string;
  createdAt: string;
  numOfLikes: number;
  numOfDislikes: number;
  userDisplayName: string;
  userImageUrl: string;
  isLike: boolean;
  isDislike: boolean;
}

export function useBrandReviews(brandId: number) {
  const [data, setData] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        const response = await getBrandReviews(brandId);
        if (response.success) {
          setData(response.data);
        } else {
          setError(response.message?.en || "Failed to fetch reviews");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    if (brandId) {
      fetchReviews();
    }
  }, [brandId]);

  return { data, loading, error };
}
