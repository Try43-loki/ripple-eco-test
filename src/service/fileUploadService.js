import { baseUrl } from "./constants";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxMTAwOTIsImV4cCI6MTc0OTM2OTI5Mn0.EuDDPgDyThOKXpbJPzqMh-g-TgBuXzHQmO2fNP9CYZg";

  export const getFileUploadService = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(`http://192.168.42.98:8883/upload-image`, {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      return data;
    } catch (e) {
      console.error("Upload error:", e);
      throw e;
    }
  };
  
