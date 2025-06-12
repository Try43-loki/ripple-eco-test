import { apiRequest } from "@/utils/api";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJTbyBDaGV0cmEga2siLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDk0Mzc5NDgsImV4cCI6MTc0OTY5NzE0OH0.mWHvh3k2gjC5U8MJQZ2tWHN2s3KIFhj0CYirya2jKhU";

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

// Search Discussion
export const getSearchDiscussionService = async (search) => {
  try {
    const res = await fetch(
      `${baseUrl}/discussions/search?titleOrTage=${search}`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Update Discussion
export const updateDiscussionService = async (updateData, discussionId) => {
  try {
    const data = await apiRequest(
      `/discussions/${discussionId}`,
      "PUT",
      updateData,
      token
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Delete Discussion
export const deleteDiscussionService = async (discussionId) => {
  try {
    const data = await apiRequest(
      `/discussions/${discussionId}`,
      "DELETE",
      null,
      token
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
