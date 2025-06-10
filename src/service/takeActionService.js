import { apiRequest } from "@/utils/api";

import { baseUrl } from "./constants";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjp0cnVlLCJmdWxsTmFtZSI6IktpbSBMb25nIFNSQyIsImlkIjoiZDhmYWMxMjEtMTViMC00MGNiLTk5NWEtOTY4YzEwMzIzMjg2IiwiZW1haWwiOiJ0aHVuZGVyZ29kdGhvcjk2NkBnbWFpbC5jb20iLCJzdWIiOiJ0aHVuZGVyZ29kdGhvcjk2NkBnbWFpbC5jb20iLCJpYXQiOjE3NDk1MjYwMzQsImV4cCI6MTc0OTc4NTIzNH0.D_5TDFbLoGcgQiLQnVD7La9zHsRwo8b5r3zpvaKfKtI"
export const getAllTakeActionService = async () => {
  try {
    const data = await apiRequest("/takeActions/all", "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const getTakeActionByIDService = async (takeActionID) => {
    try {
      const data = await apiRequest(`/takeActions/${takeActionID}`, "GET", null, token);
      return data;
    } catch (e) {
      console.log("error", e);
    }
  };
export const getTakeActionByTitleService = async (title) => {
  try {
    const data = await apiRequest(`/takeActions/search/${title}`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const getOwnTakeActionService = async () => {
  try {
    const data = await apiRequest(`/takeActions/own`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const markAsCompletedTakeActionService = async (takeActionId) => {
  try {
    const data = await apiRequest(
      `/takeActions/${takeActionId}`,
      "PUT",
      null,
      token
    );
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

export const deleteTakeActionService = async (takeActionId) => {
  try {
    const data = await apiRequest(
      `/takeActions/${takeActionId}`,
      "PATCH",
      null, // no body
      token
    );
    return data;
  } catch (e) {
    console.error("Delete failed:", e);
    throw e;
  }
};

export const createTakeActionService = async (takeActionData) => {
  try {
    const data = await apiRequest(
      `/takeActions`,
      "POST",
      takeActionData,
      token
    );
    return data;
  } catch (e) {
    console.log("error", e);
  }
};

export const submitTakeActionAnswerService = async (answerData) => {
  try {
    const data = await apiRequest(
      `/takeActionAnswer`,
      "POST",
      answerData,
      token
    );
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
