import { useMutation } from "@tanstack/react-query";
import { orderService, addOrderSummaryService, payWithCard } from "../services";
import { useToast } from "@/components/ui/toaster/hooks/useToast";
import { useRouter } from "next/navigation";
export const useCreateOrder = () => {
    const { showToast } = useToast();
    const router = useRouter();

    return useMutation({
        mutationFn: (data: any) => orderService(data),
        onSuccess: (data) => {
            showToast('Order created successfully', "success");
            // router.replace(`/orders/${data?.id}`);
        },
        onError: (error: any) => {
            showToast(error?.response?.data?.message ?? "Something went wrong", "error");
        }
    });
};
export const useAddOrderSummary = () => {
    const { showToast } = useToast();
    return useMutation({
        mutationFn: (data: any) => addOrderSummaryService(data),
        onError: (error: any) => {
            showToast(error?.response?.data?.message ?? "Something went wrong", "error");
        }
    });
};
export const usePayWithCard = () => {
    const { showToast } = useToast();
    const router = useRouter();
    return useMutation({
        mutationFn: (orderId: string) => payWithCard(orderId),
        onSuccess: (data) => {
            // showToast('Order created successfully', "success");
            // router.replace(`/orders/${data?.id}`);
        },
        onError: (error: any) => {
            showToast(error?.response?.data?.message ?? "Something went wrong", "error");
        }
    });
};
