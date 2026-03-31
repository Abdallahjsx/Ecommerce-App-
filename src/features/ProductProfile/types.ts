import { mainCategoryType } from "../shop/types";
import { ProductColorSize } from "@/types";
export type ProductDetails = {
  id: string;
  name: string;
  description: string;
  arDescription: string;
  price: number;
  haveOffer: boolean;
  discountedPrice: number;
  discountPercentage: number;
  quantity: number;
  mediaUrl: string;
  isCustomizable: boolean;
  stockStatus: string;
  brand: BrandProductType;
  category: mainCategoryType,
  reviewsSummary: reviewsSummaryType,
  isInWishlist: boolean,
  availableColors: ProductColorSize[],
  productInformations: productInformationsType[],
  reviews: reviewType[],
  relatedProducts: RelatedProductType[],
}
export type BrandProductType = {
  id: number;
  displayName: string;
  description: string;
  logoUrl: string;
  followersCount: number;
  averageRating: number
}

export type RelatedProductType = {
  id: number;
  name: string;
  pictureUrl: string;
  price: string;
  discountedPrice: number;
  discountPercentage: number;
  haveOffer: boolean;
}
export type reviewType = {
  id: number;
  rating: number;
  comment: string;
  createdAt: string;
  user: {
    id: string;
    userName: string;
    profilePictureUrl: string;
  }
}
export type productInformationsType = {
  id: number;
  key: string;
  value: string;
  arKey: string;
  arValue: string;
  type: string;
  group: string;
  arGroup: string;
  displayOrder: number
}

export type reviewsSummaryType = {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
};
