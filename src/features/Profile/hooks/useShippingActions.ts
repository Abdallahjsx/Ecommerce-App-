import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { profileService } from "../services/profileService";
import { useToaster } from "@/providers/ToasterProvider";
import { ShippingAddressRequest } from "../types";

const SHIPPING_ADDRESSES_QUERY_KEY = ["shippingAddresses"];

export const useShippingAddresses = () => {
  return useQuery({
    queryKey: SHIPPING_ADDRESSES_QUERY_KEY,
    queryFn: () => profileService.getShippingAddresses(),
  });
};

export const useAddShippingAddress = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToaster();

  return useMutation({
    mutationFn: (data: ShippingAddressRequest) => profileService.addShippingAddress(data),
    onSuccess: (response) => {
      showToast(response.message.en, "success");
      queryClient.invalidateQueries({ queryKey: SHIPPING_ADDRESSES_QUERY_KEY });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message?.en || "Failed to add shipping address";
      showToast(message, "error");
    },
  });
};

export const useUpdateShippingAddress = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToaster();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: ShippingAddressRequest }) =>
      profileService.updateShippingAddress(id, data),
    onSuccess: (response) => {
      showToast(response.message.en, "success");
      queryClient.invalidateQueries({ queryKey: SHIPPING_ADDRESSES_QUERY_KEY });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message?.en || "Failed to update shipping address";
      showToast(message, "error");
    },
  });
};

export const useDeleteShippingAddress = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToaster();

  return useMutation({
    mutationFn: (id: number) => profileService.deleteShippingAddress(id),
    onSuccess: (response) => {
      showToast(response.message.en, "success");
      queryClient.invalidateQueries({ queryKey: SHIPPING_ADDRESSES_QUERY_KEY });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message?.en || "Failed to delete shipping address";
      showToast(message, "error");
    },
  });
};
