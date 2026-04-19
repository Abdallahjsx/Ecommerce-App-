import { useMutation, useQueryClient } from "@tanstack/react-query";
import { profileService } from "../services/profileService";
import { useToaster } from "@/providers/ToasterProvider";
import { useAppDispatch } from "@/Redux/hooks";
import { clearToken } from "@/Redux/slices/authSlice";
import { UpdateProfileRequest, UpdatePasswordRequest } from "../types";


export const useUpdateProfile = () => {
  const { showToast } = useToaster();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateProfileRequest) => profileService.updateProfile(data),
    onSuccess: (response) => {
      showToast(response.message.en, "success");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message?.en || "Failed to update profile";
      showToast(message, "error");
    },
  });
};

export const useUpdatePassword = () => {
  const { showToast } = useToaster();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdatePasswordRequest) => profileService.updatePassword(data),
    onSuccess: (response) => {
      showToast(response.message.en, "success");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: any) => {
      const message = error.response?.data?.message?.en || "Failed to update password";
      showToast(message, "error");
    },
  });
};

export const useUpdateProfileImage = () => {
  const { showToast } = useToaster();

  return useMutation({
    mutationFn: (image: File) => profileService.updateProfileImage(image),
    onSuccess: (response) => {
      showToast(response.message.en, "success");
    },
    onError: (error: any) => {
      const message = error.response?.data?.message?.en || "Failed to update profile image";
      showToast(message, "error");
    },
  });
};

export const useDeleteAccount = () => {
  const { showToast } = useToaster();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: () => profileService.deleteAccount(),
    onSuccess: (response) => {
      showToast(response.message.en, "success");
      dispatch(clearToken());
      // Redirect logic can be added here or in the component
    },
    onError: (error: any) => {
      const message = error.response?.data?.message?.en || "Failed to delete account";
      showToast(message, "error");
    },
  });
};
