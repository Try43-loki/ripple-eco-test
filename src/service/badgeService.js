import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

export const getBadgeByUserIDService = async (userID) => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest(`/badge/${userID}`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const getAllBagdeService = async () => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest("/badge", "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

export const getAllBagdeByIDService = async (badgeID) => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest(`/badge/${badgeID}`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};