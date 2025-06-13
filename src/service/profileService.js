import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";


export const getCurrentUserProfileService = async () => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest("/profile", "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const viewUserProfileService = async (userId) => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest(`/profile/${userId}`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const editUserProfileService = async (userData) => {
  const token = await getAuthToken();
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
