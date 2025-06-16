import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

// get all volunteer requests
export const getAllVolunteerRequestService = async (eventId) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest(
      `/volunteer/all/${eventId}`,
      "GET", // method
      null,
      token
    );

    return data;
  } catch (e) {
    console.error("Error fetching volunteers:", e);
  }
};

// Approve a volunteer request
export const approveVolunteerRequestService = async (requestId) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest(
      `/volunteer/${requestId}`,
      "PUT",
      null,
      token
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Reject volunteer request
export const rejectVolunteerRequestService = async (requestId) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest(
      `/volunteer/${requestId}`,
      "DELETE",
      null,
      token
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

// create volunteer request
export const createVolunteerRequestService = async (formData) => {
  try {
    const token = await getAuthToken();
    const data = await apiRequest(`/volunteer`, "POST", formData, token);
    return data;
  } catch (e) {
    console.error("Error creating volunteer request:", e);
    throw e; // Re-throw to handle in action
  }
};
