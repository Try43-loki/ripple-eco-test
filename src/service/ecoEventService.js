import { apiRequest } from "@/utils/api";
import { baseUrl } from "./constants";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6dHJ1ZSwiaXNHb29nbGUiOnRydWUsImZ1bGxOYW1lIjoiU28gY2hldHJhIiwiaWQiOiJmMDQ5ZWJjYy05NDI2LTQ4MWMtYWMzYy02YTE5YzgwNjk5MzMiLCJlbWFpbCI6Im5vcm5zb2NoZXRyYUBnbWFpbC5jb20iLCJzdWIiOiJub3Juc29jaGV0cmFAZ21haWwuY29tIiwiaWF0IjoxNzQ5NDM0NTQ4LCJleHAiOjE3NDk2OTM3NDh9.f-9Ah2WM581RrmcMTM4FiSzSz6JoOh2Inpt51okO13Y";

// get all Eco Events
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

// get Eco Event by id
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

// get all provinces
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

// get all EventTypes
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

// get all Event Categories
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

// get all ContributeTypes
export const getAllContributeTypesService = async () => {
  try {
    const res = await fetch(`${baseUrl}/contribute-types/all`);
    const data = await res.json();
    console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

// get Eco Event by tilte
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

// filter Event
export const fetchFilteredEventsService = async (filters) => {
  try {
    console.log("filterss", filters);
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    console.log("data in service", params.toString());
    const res = await fetch(`${baseUrl}/event/filter?${params.toString()}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// get all feedbacks by Eco Event id
export const getAllFeedbacksByEcoEventId = async (eventid) => {
  try {
    const res = await fetch(`${baseUrl}/feedback/${eventid}`);
    const data = await res.json();
    // console.log("Data : ", data);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

// get overall rating stats of an event
export const getOverallRatingOfEvent = async (eventid) => {
  try {
    const res = await fetch(`${baseUrl}/feedback/rating/${eventid}`);
    const data = await res.json();
    console.log("Data : ", data);
    return data;
  } catch (e) {
    console.log("error", e);
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

// Post feedback with event id
export const postFeedbackById = async (eventid) => {
  try {
    const res = await fetch(`${baseUrl}/feedback/${eventid}`);
    const data = await res.json();
    console.log("Data : ", data);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

export const checkUserJoinedEventService = async (eventId, userId) => {
  try {
    // const token = localStorage.getItem("token");
    const data = await fetch(
      `${baseUrl}/eco-event/${eventId}/joined?userId=${userId}`,
      "GET",
      null,
      token
    );
    return data;
  } catch (error) {
    console.error("Error checking user participation:", error);
    return { joined: false };
  }
};
