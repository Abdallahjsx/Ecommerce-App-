import { apiCall } from "../../../services/apiClient";

export async function getBrandPolicy(id: number) {
  const res = await apiCall.get(`/api/Brand/BrandPolicy?id=${id}`);
  return res.data;
}

export async function getBrandInfo(brandId: number) {
  const res = await apiCall.get(`/api/Brand/BrandInfo/${brandId}`);
  return res.data;
}

export async function getBrandReviews(brandId: number) {
  const res = await apiCall.get(
    `/api/Brand/GetReviewsForBrand?brandId=${brandId}`,
  );
  return res.data;
}

export async function toggleLikeToReview(reviewId: number, isLiked: boolean) {
  const res = await apiCall.post(`/api/Brand/ToggleLikeToReview`, {
    reviewId,
    isLiked,
  });
  return res.data;
}

export async function toggleDisLikeToReview(
  reviewId: number,
  isDisliked: boolean,
) {
  const res = await apiCall.post(`/api/Brand/ToggleDisLikeToReview`, {
    reviewId,
    isDisliked,
  });
  return res.data;
}

export async function toggleFollowBrand(brandId: number) {
  const res = await apiCall.post(`/api/Brand/ToggleFollow/${brandId}`);
  return res.data;
}

export async function getBrandProducts(brandId: number) {
  const res = await apiCall.get(`/api/Product?BrandId=${brandId}`);
  return res.data;
}

export async function getBrandReels(brandId: number) {
  const res = await apiCall.get(`/api/Reel/${brandId}`);
  return res.data;
}
