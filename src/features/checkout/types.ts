export type AddressType = {
  name: string;
  postcode?: string;
  country: string;
  street: string;
  city: string;
  phoneNumber: string;
  isDefault: boolean;
  lastName: string;
  building?: string;
  floor?: string;
  apartment?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  user: string | null;
  userId: string;
};

export type AddAddressType = {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  streetAddress: string;
  postcode: string;
  phoneNumber: string;
  shippingBuilding?: string;
  shippingFloor?: string;
  shippingApartment?: string;
};
export interface Formik {
  values: {
    country: string;
    firstName: string;
    lastName: string;
    streetAddress: string;
    phoneNumber: string;
    city: string;
    postcode: string;
    building: string;
    apartment: string;
    floor: string;
  };
  setFieldValue: (field: string, value: any) => void;
  resetForm: () => void;
}
export type OrderSummaryProduct = {
  productId: number;
  productName: string;
  color: string;
  size: number;
  quantity: number;
  unitPrice: number;
  discountPercentage: number | null;
  priceAfterDiscount: number;
  totalItemPrice: number;
  productImages: string[];
};
export type shippingAddress = {
  name: string;
  lastName: string;
  street: string;
  building: string;
  floor: string;
  apartment: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
};
export type OrderSummaryType = {
  items: OrderSummaryProduct[];
  summary: {
    shippingAddress: shippingAddress;
    subTotal: number;
    discountAmount: number;
    shippingPrice: number;
    deliveryMethod: string;
    paymentMethod: string;
    total: number;
  };
};
