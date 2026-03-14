import axios from "axios";
export const apiCall = axios.create({
  baseURL: "https://alluvo-api-stating.runasp.net",
  timeout: 1000,
  headers: { "Content-Type": "application/json", Accept: "text/plain" },
});
apiCall.interceptors.request.use((config: any) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
