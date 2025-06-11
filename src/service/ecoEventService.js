import { apiRequest } from "@/utils/api";
import { baseUrl } from "./constants";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6dHJ1ZSwiaXNHb29nbGUiOnRydWUsImZ1bGxOYW1lIjoiU28gY2hldHJhIiwiaWQiOiJmMDQ5ZWJjYy05NDI2LTQ4MWMtYWMzYy02YTE5YzgwNjk5MzMiLCJlbWFpbCI6Im5vcm5zb2NoZXRyYUBnbWFpbC5jb20iLCJzdWIiOiJub3Juc29jaGV0cmFAZ21haWwuY29tIiwiaWF0IjoxNzQ5NDM0NTQ4LCJleHAiOjE3NDk2OTM3NDh9.f-9Ah2WM581RrmcMTM4FiSzSz6JoOh2Inpt51okO13Y";
export const getAllEcoEventService = async () => {
  try {
    const res = await fetch(`${baseUrl}/event/all`);
    const data = await res.json();
    // console.log("Event : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getEcoEventByIdService = async (eventid) => {
  try {
    const res = await fetch(`${baseUrl}/event/${eventid}`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllProvincesService = async () => {
  try {
    // const res = await fetch(`${baseUrl}/provinces/all`);
    const res = await fetch(`${baseUrl}/provinces/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllEventTypesService = async () => {
  try {
    const res = await fetch(`${baseUrl}/event-types/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllEventCategoriesService = async () => {
  try {
    const res = await fetch(`${baseUrl}/event-categories/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllContributeTypesService = async () => {
  try {
    const res = await fetch(`${baseUrl}/contribute-types/all`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getEcoEventByTitleService = async (title) => {
  try {
    const res = await fetch(`${baseUrl}/event/search?title=${title}`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchFilteredEventsService = async (filters) => {
  try {
    // const query = new URLSearchParams(filters).toString();
    const res = await fetch(
      `${baseUrl}/event/filter?${query}`
      // , { cache: "no-store", }
    );
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

// Get upcoming event
export const getOwnUpComingEventService = async () => {
  try {
    const data = await apiRequest("/event/own-upcoming", "GET", null, token);
    return data;
  } catch (e) {
    console.log(e);
  }
};
