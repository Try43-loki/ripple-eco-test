import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";
// const token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6dHJ1ZSwiaXNHb29nbGUiOnRydWUsImZ1bGxOYW1lIjoiU28gY2hldHJhIiwiaWQiOiJmMDQ5ZWJjYy05NDI2LTQ4MWMtYWMzYy02YTE5YzgwNjk5MzMiLCJlbWFpbCI6Im5vcm5zb2NoZXRyYUBnbWFpbC5jb20iLCJzdWIiOiJub3Juc29jaGV0cmFAZ21haWwuY29tIiwiaWF0IjoxNzQ5NDM0NTQ4LCJleHAiOjE3NDk2OTM3NDh9.f-9Ah2WM581RrmcMTM4FiSzSz6JoOh2Inpt51okO13Y";

// get all volunteer requests
export const getAllVolunteerRequestService = async (eventId) => {
  try {
    const data = await apiRequest(
      `/volunteer/all/${eventId}`,
      "GET",
      null,
      token,
      {
        next: { tags: ["volunteers"] },
      }
    );
    return data;
  } catch (e) {
    console.error("Error fetching volunteers:", e);
  }
};

// Approve a volunteer request
export const approveVolunteerRequestService = async (requestId) => {
  try {
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
