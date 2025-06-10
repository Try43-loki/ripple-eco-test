import { baseUrl } from "./constants";
export const getAllUserRankingService = async () => {
  try {
    const res = await fetch(`${baseUrl}/leaderboard/user-rankings`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllOrganizerRankingService = async () => {
  try {
    const res = await fetch(`${baseUrl}/leaderboard/organizer-rankings`);
    const data = await res.json();
    // console.log("data", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
