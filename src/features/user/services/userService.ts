import { apiCall } from "@/services/apiClient";

export async function getProfile(token: string) {
  try {
    const res = await apiCall.get("/api/User/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      success: true,
      data: res.data,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data || "Failed to load profile",
    };
  }
}

/** -------------------------
 *        NEW: Sign Out
 * ------------------------- */
export async function signOut(token: string) {
  try {
    const res = await apiCall.post(
      "/api/Auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      success: true,
      data: res.data,
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.response?.data || "Failed to log out",
    };
  }
}










