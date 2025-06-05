import { apiRequest } from "@/utils/api";
const token ="eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxMTAwOTIsImV4cCI6MTc0OTM2OTI5Mn0.EuDDPgDyThOKXpbJPzqMh-g-TgBuXzHQmO2fNP9CYZg"

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
}
export const editUserProfileService = async (userData) => {
    try {
        const data = await apiRequest("/profile/update/user", "PUT", userData, token);
        return data;
    } catch (e) {
        console.log("error", e);
    }
}