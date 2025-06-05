import { apiRequest } from "@/utils/api";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxMDg5NjIsImV4cCI6MTc0OTM2ODE2Mn0.ymgJ4AAtOUcfU6nGxm-KbQW7nw28t0-ONZVJzq5iQc8";

// Get all discussion
import { baseUrl } from "./constants";
export const getAllDiscussionsService = async () => {
  try {
    const res = await fetch(`${baseUrl}/discussions/all`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get discussion by id
export const getDiscussionByIdService = async (discussionId) => {
  try {
    const res = await fetch(`${baseUrl}/discussions/${discussionId}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get Total Discussion
export const getTotalDiscussionService = async () => {
  try {
    const res = await fetch(`${baseUrl}/discussions/all-discussion-count`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get all Popular discussion
export const getAllPopularDiscussionService = async () => {
  try {
    const res = await fetch(`${baseUrl}/discussions/popular`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Create Discussion
export const createDiscussionService = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxMTAwOTIsImV4cCI6MTc0OTM2OTI5Mn0.EuDDPgDyThOKXpbJPzqMh-g-TgBuXzHQmO2fNP9CYZg";
  try {
    const res = await fetch(`${baseUrl}/discussions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "*/*",
      },
      body: JSON.stringify(),
    });
    if (!res.ok) throw new Error("Failed to create discussion");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getAllOwnDiscussionsService = async () => {
  try {
    const data = await apiRequest("/discussions/all-own", "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
