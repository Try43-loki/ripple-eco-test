import { apiRequest } from "@/utils/api";
import { baseUrl } from "./constants";
import { getAuthToken } from "@/utils/auth-api";
export const getAllEcoEventService = async () => {
  try {
    const res = await fetch(`${baseUrl}/event/all`);
    const data = await res.json();
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
    return data;
  } catch (e) {
    console.log(e);
  }
};

// filter Event
export const fetchFilteredEventsService = async (filters) => {
  try {
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

export const fetchFilteredEventsHistoryService = async (userID, filters) => {
  try {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    // console.log("params", params.toString());
    // console.log("data in service", params.toString());
    // const res = await fetch(`${baseUrl}/event/filter?${params.toString()}`);
    const data = await apiRequest(
      `/event/${userID}/filter-event-history?${params.toString()}`,
      "GET",
      null,
      token
    );
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
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

// Get upcoming event
export const getOwnUpComingEventService = async () => {
  try {
    const token = await getAuthToken();
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

export const checkUserJoinedEventService = async (userId) => {
  try {
    // const token = localStorage.getItem("token");
    const res = await fetch(
      `${baseUrl}/event/joining?userId=${userId}`
      // "GET",
      // null,
      // token
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error checking user participation:", error);
    return { joined: false };
  }
};

export const rateFeedbackService = async (formData, eventId) => {
  const token = await getAuthToken();
  const data = await apiRequest(
    `/feedback/${eventId}`,
    "POST",
    formData,
    token
  );

  return data;
};

export const getAllEventHistoryService = async () => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest("/event/own-history", "GET", null, token);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllOwnEventService = async () => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest("/event/own", "GET", null, token);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllEcoEventByUserIDService = async (userID) => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest(`/event/${userID}/all`, "GET", null, token);
    return data;
  } catch (e) {
    console.log(e);
  }
};
