import { apiRequest } from "@/utils/api";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4ODQ5MzI0LCJleHAiOjE3NDkxMDg1MjR9.xT38yXnRrqKXlByDQqo_pbYrX3WJI6kADd8B7PU2raY";

// Get all discussion
const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
export const getAllDiscussionsService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/discussions/all`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get discussion by id
export const getDiscussionByIdService = async (discussionId) => {
  try {
    const res = await fetch(`${API_BASE_URL}/discussions/${discussionId}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get Total Discussion
export const getTotalDiscussionService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/discussions/all-discussion-count`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get all Popular discussion
export const getAllPopularDiscussionService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/discussions/popular`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Create Discussion
export const createDiscussionService = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4ODM4OTgzLCJleHAiOjE3NDkwOTgxODN9.BwCNyKQXUnzKuKbATP6L5qX0ml5rgoBOriAtPDrNHuY";
  try {
    const res = await fetch(`${API_BASE_URL}/discussions`, {
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
