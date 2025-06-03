import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

export const getUserProfileService = async () => {
  const token = await getAuthToken();
  const res = await apiRequest("/api/v1/profile", "GET", null, token);
  return res;
};
