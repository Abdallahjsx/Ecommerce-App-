import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  clearAll,
  getUnreadNotificationsCount,
  remove,
} from "../services";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { NotificationType } from "../types";
export function useGetNotifications(loggedIn: boolean) {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: () => getNotifications(),
    enabled: loggedIn,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
export function useUnreadNotificationCount(loggedIn: boolean) {
  return useQuery({
    queryKey: ["unread-count"],
    queryFn: () => getUnreadNotificationsCount(),
    enabled: loggedIn,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
export function useMarkAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["markAsRead"],
    mutationFn: (id: string | number) => markAsRead(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["notifications"] });
      const prev = queryClient.getQueryData(["notifications"]);
      queryClient.setQueryData(["notifications"], (oldData: any) => {
        const updated = {
          ...oldData,
          data: oldData?.data?.map((item: NotificationType) => {
            if (item.id === id) {
              return {
                ...item,
                isRead: true,
              };
            }
            return item;
          }),
        };
        return updated;
      });
      return { prev };
    },
    onError: (_err, id, context) => {
      queryClient.setQueryData(["notifications"], context?.prev);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread-count"] });
    },
  });
}
export function useMarkAllAsRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["markAllAsRead"],
    mutationFn: () => markAllAsRead(),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["notifications"] });
      const prev = queryClient.getQueryData(["notifications"]);
      queryClient.setQueryData(["notifications"], (oldData: any) => {
        return {
          ...oldData,
          data: oldData?.data?.map((item: NotificationType) => {
            return {
              ...item,
              isRead: true,
            };
          }),
        };
      });
      return { prev };
    },
    onError: (_err, id, context) => {
      queryClient.setQueryData(["notifications"], context?.prev);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread-count"] });
    },
  });
}
export function useClearAll() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["clearAll"],
    mutationFn: () => clearAll(),

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["notifications"] });
      const prev = queryClient.getQueryData(["notifications"]);
      queryClient.setQueryData(["notifications"], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: [],
        };
      });
      return { prev };
    },
    onError: (_err, id, context) => {
      queryClient.setQueryData(["notifications"], context?.prev);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread-count"] });
    },
  });
}

export function useRemove() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["remove"],
    mutationFn: (id: string | number) => remove(id),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["notifications"] });
      const prev = queryClient.getQueryData(["notifications"]);
      queryClient.setQueryData(["notifications"], (oldData: any) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          data: oldData?.data?.filter(
            (item: NotificationType) => item.id !== id,
          ),
        };
      });
      return { prev };
    },
    onError: (_err, id, context) => {
      queryClient.setQueryData(["notifications"], context?.prev);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
      queryClient.invalidateQueries({ queryKey: ["unread-count"] });
    },
  });
}
