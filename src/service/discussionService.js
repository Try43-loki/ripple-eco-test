import { apiRequest } from "@/utils/api";
const token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4ODQ5MzI0LCJleHAiOjE3NDkxMDg1MjR9.xT38yXnRrqKXlByDQqo_pbYrX3WJI6kADd8B7PU2raY"

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
export const getAllDiscussionsService = async () => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/discussions/149152e2-8b86-440e-84fa-0e504adabc9b`
    );
    const data = await res.json();
    console.log("data", data);

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
    console.log("error", e)
  }
}
