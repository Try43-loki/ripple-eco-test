import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

export const getDashboardDataService = async () => {
  const token = await getAuthToken();
  try {
    const res = await apiRequest("/dashboard", "GET", null, token);
    return res;
  } catch (e) {
    console.log(e);
  }
};
