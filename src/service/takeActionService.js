import { apiRequest } from "@/utils/api";
import { baseUrl } from "./constants";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjpmYWxzZSwiZnVsbE5hbWUiOiJzbyBjaGV0cmEiLCJpZCI6IjFjYzQxYzM0LTllZDgtNGI2MS04ODI1LTJiNjM3MGJmZDJlYSIsImVtYWlsIjoieWFuZWthaDQwMEBjaWdpZGVhLmNvbSIsInN1YiI6InlhbmVrYWg0MDBAY2lnaWRlYS5jb20iLCJpYXQiOjE3NDkxNzY3NjYsImV4cCI6MTc0OTQzNTk2Nn0.Ifsa-p-RG191_Tk3eXXOUnFJwIo6k_4k9h6mCZBeidY"
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
      null,
      token
    );
  console.log("take action ",data);
  
    return data;
  } catch (e) {
    console.log("error", e);
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
