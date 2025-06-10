import { apiRequest } from "@/utils/api";
const token ='eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxNzE4NDMsImV4cCI6MTc0OTQzMTA0M30.80vn2gOL3VS4gBO24C_D-cUTG_E_34LDL6RWJ-4sbnA'
export const getAllOwnFeedBackService = async () => {
    try {
      const data = await apiRequest(`/feedback/own`, "GET", null, token);
      return data;
    } catch (e) {
      console.log("error", e);
    }
};
