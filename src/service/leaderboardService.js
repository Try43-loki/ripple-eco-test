import { apiRequest } from "@/utils/api";
import { baseUrl } from "./constants";
export const getAllUserRankingService = async () => {
  try {
    const res = await fetch(`${baseUrl}/leaderboard/organizer-rankings-leaderboard`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllOrganizerRankingService = async () => {
  try {
    // const res = await fetch(`${baseUrl}/leaderboard/organizer-rankings-leaderboard`);

    const data = apiRequest(
      `/leaderboard/organizer-rankings-leaderboard`,
      "GET",
      null,
      null
    )
    // console.log("data", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
