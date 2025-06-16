import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";
export const getAllOwnFeedBackService = async () => {
    const token = await getAuthToken();
    try {
      const data = await apiRequest(`/feedback/own`, "GET", null, token);
      return data;
    } catch (e) {
      console.log("error", e);
    }
};

export const getAllFeedBackByUserIDService = async (userID) => {
    const token = await getAuthToken();
    try {
      const data = await apiRequest(`/feedback/${userID}/all`, "GET", null, token);
      return data;
    } catch (e) {
      console.log("error", e);
    }
};
