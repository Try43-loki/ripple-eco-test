import { getAuthToken } from "@/utils/auth-api";
import { baseUrl } from "./constants";
import { apiRequest } from "@/utils/api";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxMTAwOTIsImV4cCI6MTc0OTM2OTI5Mn0.EuDDPgDyThOKXpbJPzqMh-g-TgBuXzHQmO2fNP9CYZg";

export const getFileUploadService = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    const response = await fetch(
      `https://ripple-api.kshrd.app/api/v1/images/upload-image`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Upload error:", e);
    throw e;
  }
};

export const mutilpleFileUploadService = async (formData) => {
  try {
    const res = await fetch(`${baseUrl}/images/upload-multiple-images`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Upload error:", e);
    throw e;
  }
};
