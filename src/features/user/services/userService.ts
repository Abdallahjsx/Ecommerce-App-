import { apiCall } from "../../../services/apiClient";

// 🔹 Logout Function
export async function logoutUser() {
  const res = await apiCall.post("/api/Auth/SignOut");
  return res.data;
}









