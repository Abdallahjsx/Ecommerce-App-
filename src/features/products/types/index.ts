export interface Brand {
  id: number;
  displayName: string;
  description: string;
  logoUrl: string;
  followersCount: number;
  averageRating: number;
}

export interface Category {
  id: number;
  name: string;
  arName: string;
}

export interface ReviewsSummary {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: Record<string, number>;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  arDescription: string | null;
  price: number;
  haveOffer: boolean;
  discountedPrice: number | null;
  discountPercentage: number | null;
  quantity: number;
  mediaUrl: string;
  isCustomizable: boolean;
  stockStatus: string;
  brand: Brand;
  category: Category;
  reviewsSummary: ReviewsSummary;
  isInWishlist: boolean;
  mediaUrls: string[];
}

export interface ProductResponse {
  success: boolean;
  statusCode: number;
  message: {
    en: string;
    ar: string;
  };
  data: {
    meta: {
      pageNumber: number;
      pageSize: number;
      totalRecords: number;
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      totalPages: number;
    };
    data: Product[];
  };
}

export interface ProductQueryParams {
  Search?: string;
  Category?: string;
  Color?: string;
  BrandId?: number;
  Size?: string;
  StockStatus?: string;
  MinPrice?: number;
  MaxPrice?: number;
  HaveOffer?: boolean;
  SortBy?: string;
  SortOrder?: string;
  PageIndex?: number;
  PageSize?: number;
}
