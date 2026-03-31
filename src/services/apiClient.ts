import axios from "axios";
export const apiCall = axios.create({
  baseURL: "https://api.alluvo.life",
  timeout: 1000000,
  headers: { "Content-Type": "application/json", Accept: "text/plain" },
});
apiCall.interceptors.request.use((config: any) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
