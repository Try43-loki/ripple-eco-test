import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";
export const getUserProfileService = async () => {
  const token = await getAuthToken();
  const res = await apiRequest(`/profile`, "GET", null, token);
  return res;
};
