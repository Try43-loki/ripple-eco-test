import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

export const createEventService = async (formData) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest("/event", "POST", formData, token);
    console.log("data", data);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

export const updateEventService = async (formData, eventId) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest(`/event/${eventId}`, "PUT", formData, token);
    console.log("data", data);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
