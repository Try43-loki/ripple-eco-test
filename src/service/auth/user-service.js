import { apiRequest } from "@/utils/api";
import { getAuthToken, getAuthTokenGoogle } from "@/utils/auth-api";
export const getUserProfileService = async () => {
  const token = await getAuthToken();
  const customToken = await getAuthTokenGoogle();
  const res = await apiRequest(`/profile`, "GET", null, token || customToken);
  // console.log("getUserProfileService", res);
  return res;
};
