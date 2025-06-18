import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

export const getPostActivityService = async (eventId) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest(
      `/event/ended-event/${eventId}`,
      "GET",
      null,
      token,
      {
        next: {
          tags: [`post-activity-${eventId}`],
        },
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postActivityService = async (result, eventId) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest(
      `/event/ended-event/${eventId}`,
      "POST",
      result,
      token
    );
    // return data;
  } catch (e) {
    console.log(e);
  }
};
