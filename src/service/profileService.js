import { apiRequest } from "@/utils/api";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxMDg5NjIsImV4cCI6MTc0OTM2ODE2Mn0.ymgJ4AAtOUcfU6nGxm-KbQW7nw28t0-ONZVJzq5iQc8";

export const getCurrentUserProfileService = async () => {
  try {
    const data = await apiRequest("/profile", "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const editUserProfileService = async (userData) => {
  try {
    const data = await apiRequest(
      "/profile/update/user",
      "PUT",
      userData,
      token
    );
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
