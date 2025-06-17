import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

export const createUserContributeService = async (formData) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest("/user-contributes", "POST", formData, token);
    console.log("data", data);
    return data;
  } catch (e) {
    console.error("Error in createUserContributeService:", e);
    throw e;
  }
};
