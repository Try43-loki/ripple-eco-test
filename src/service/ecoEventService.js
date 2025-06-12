import { apiRequest } from "@/utils/api";
import { baseUrl } from "./constants";
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
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    // console.log("data in service", params.toString());
    const res = await fetch(`${baseUrl}/event/filter?${params.toString()}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

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

// Get upcoming event
export const getOwnUpComingEventService = async () => {
  try {
    const data = await apiRequest("/event/own-upcoming", "GET", null, token);
    return data;
  } catch (e) {
    console.log(e);
  }
};
