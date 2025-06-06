import { apiRequest } from "@/utils/api";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4ODQ5MzI0LCJleHAiOjE3NDkxMDg1MjR9.xT38yXnRrqKXlByDQqo_pbYrX3WJI6kADd8B7PU2raY";

// Get all discussion
import { baseUrl } from "./constants";
export const getAllDiscussionsService = async () => {
  try {
    const res = await fetch(`${baseUrl}/discussions/all`, {
      next: { tags: ["discussion"] },
    });
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
export const createDiscussionService = async (discussionData) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxMDg5NjIsImV4cCI6MTc0OTM2ODE2Mn0.ymgJ4AAtOUcfU6nGxm-KbQW7nw28t0-ONZVJzq5iQc8";
  try {
    const data = await apiRequest(
      `/discussions`,
      "POST",
      discussionData,
      token
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get own discussion
export const getAllOwnDiscussionsService = async () => {
  try {
    const data = await apiRequest("/discussions/all-own", "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
