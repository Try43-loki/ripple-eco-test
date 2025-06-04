import { apiRequest } from "@/utils/api";
const token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4ODQ5MzI0LCJleHAiOjE3NDkxMDg1MjR9.xT38yXnRrqKXlByDQqo_pbYrX3WJI6kADd8B7PU2raY"

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
        const data = await apiRequest("/profile/update/user", "PUT", userData, token);
        return data;
    } catch (e) {
        console.log("error", e);
    }
}