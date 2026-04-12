export interface ApiResponse<T = null> {
  success: boolean;
  statusCode: number;
  message: {
    en: string;
    ar: string;
  };
  data: T;
  errors: string[] | null;
}

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ShippingAddress {
  id: number;
  name: string;
  postcode: string;
  country: string;
  street: string;
  city: string;
  phoneNumber: string;
  isDefault: boolean;
  shippingBuilding: string;
  shippingFloor: string;
  shippingApartment: string;
  shippingLastName: string;
}

export interface ShippingAddressRequest {
  name: string;
  postcode: string;
  country: string;
  street: string;
  city: string;
  phoneNumber: string;
  isDefault: boolean;
  shippingBuilding: string;
  shippingFloor: string;
  shippingApartment: string;
  shippingLastName: string;
}
