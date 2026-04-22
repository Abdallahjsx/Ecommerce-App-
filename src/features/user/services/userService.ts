import { apiCall } from "../../../services/apiClient";

// 🔹 Logout Function
export async function logoutUser() {
  const res = await apiCall.post("/api/Auth/SignOut");
  return res.data;
}

// 🔹 Get User Info
export async function getUserInfo() {
  const res = await apiCall.get("/api/Auth/UserInfo");
  return res.data;
}










