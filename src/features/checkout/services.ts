import { apiCall } from "@/services/apiClient";
export const orderService = async (data: any) => {
  const res = await apiCall.post("/api/order", data);
  return res.data;
};
export const addOrderSummaryService = async (data: any) => {
  const res = await apiCall.post("/api/Order/Summary", data);
  return res.data;
};
export const payWithCard = async (orderId: string) => {
  const res = await apiCall.post("/api/Payment/pay", {
    orderId,
  });
  return res.data;
};
