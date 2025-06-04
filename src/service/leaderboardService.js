const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getAllUserRankingService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/leaderboard/user-rankings`);
    const data = await res.json();
    // console.log("data : ", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getAllOrganizerRankingService = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/leaderboard/organizer-rankings`);
    const data = await res.json();
    // console.log("data", data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
