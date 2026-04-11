import { apiCall } from "@/services/apiClient";
import { 
  ApiResponse, 
  UpdateProfileRequest, 
  UpdatePasswordRequest,
  ShippingAddress,
  ShippingAddressRequest
} from "../types";

export const profileService = {
  updateProfile: async (data: UpdateProfileRequest) => {
    const response = await apiCall.put<ApiResponse>("/api/UserProfile/UpdateProfile", data);
    return response.data;
  },

  updatePassword: async (data: UpdatePasswordRequest) => {
    const response = await apiCall.put<ApiResponse>("/api/UserProfile/UpdatePassword", data);
    return response.data;
  },

  updateProfileImage: async (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    
    const response = await apiCall.put<ApiResponse>("/api/UserProfile/UpdateProfileImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },

  deleteAccount: async () => {
    const response = await apiCall.delete<ApiResponse>("/api/UserProfile/DeleteAccount");
    return response.data;
  },

  getShippingAddresses: async () => {
    const response = await apiCall.get<ApiResponse<ShippingAddress[]>>("/api/UserProfile/ShippingAddress");
    return response.data;
  },

  addShippingAddress: async (data: ShippingAddressRequest) => {
    const response = await apiCall.post<ApiResponse<ShippingAddress>>("/api/UserProfile/ShippingAddress", data);
    return response.data;
  },

  updateShippingAddress: async (id: number, data: ShippingAddressRequest) => {
    const response = await apiCall.patch<ApiResponse<ShippingAddress>>(`/api/UserProfile/ShippingAddress/${id}`, data);
    return response.data;
  },

  deleteShippingAddress: async (id: number) => {
    const response = await apiCall.delete<ApiResponse>(`/api/UserProfile/ShippingAddress/${id}`);
    return response.data;
  },
};
