import axios from "axios";
export const apiCall = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json", Accept: "text/plain" },
});
apiCall.interceptors.request.use((config: any) => {
  if (typeof window !== "undefined") {
    const authAlluvo = JSON.parse(
      localStorage.getItem("persist:root")!,
    )?.authAlluvo;
    const token = JSON.parse(authAlluvo).token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
