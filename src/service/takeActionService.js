import { apiRequest } from "@/utils/api";
import { getAuthToken } from "@/utils/auth-api";

export const getAllTakeActionService = async () => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest("/takeActions/all", "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const getTakeActionByIDService = async (takeActionID) => {
  const token = await getAuthToken();
    try {
      const data = await apiRequest(`/takeActions/${takeActionID}`, "GET", null, token);
      return data;
    } catch (e) {
      console.log("error", e);
    }
  };
export const getTakeActionByTitleService = async (title) => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest(`/takeActions/search/${title}`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const getOwnTakeActionService = async () => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest(`/takeActions/own`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
export const markAsCompletedTakeActionService = async (takeActionId) => {
  const token = await getAuthToken();
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
  const token = await getAuthToken();
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
  const token = await getAuthToken();
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
  const token = await getAuthToken();
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

export const getTakeActionByUserIdService = async (userId) => {
  const token = await getAuthToken();
  try {
    const data = await apiRequest(`/takeActions/${userId}/all`, "GET", null, token);
    return data;
  } catch (e) {
    console.log("error", e);
  }
};
