import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

// const token = getAuthToken();
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJTbyBDaGV0cmEga2siLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDk0Mzc5NDgsImV4cCI6MTc0OTY5NzE0OH0.mWHvh3k2gjC5U8MJQZ2tWHN2s3KIFhj0CYirya2jKhU";
// console.log("token",token);
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

export const verifyOrganizerService = async (formData) => {
  const token = getAuthToken();
  try {
    const data = await apiRequest(`/auths/verify-org`, "POST", formData, token);
    return data;
  } catch (e) {
    console.log("errors", e);
  }
};
