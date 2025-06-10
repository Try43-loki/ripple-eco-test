import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

const token = getAuthToken();
console.log("token",token);
export const getCurrentUserProfileService = async () => {
  try {
    const data = await apiRequest("/profile", "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const viewUserProfileService = async (userId) => {
  try {
    const data = await apiRequest(`/profile/${userId}`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const editUserProfileService = async (userData) => {
  try {
    const data = await apiRequest(
      `/profile/update/user`,
      "PUT",
      userData,
      token
    );
    
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
