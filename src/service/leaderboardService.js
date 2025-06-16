import { apiRequest } from "@/utils/api";
import { baseUrl } from "./constants";
export const getAllUserRankingService = async () => {
  try {
    const res = await fetch(`${baseUrl}/leaderboard/user-rankings-leaderboard`,{
      next: { tags: ["leaderboard"] }
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

// export const getAllOrganizerRankingService = async () => {
//   try {
//     const res = await apiRequest("leaderboard/organizer-rankings-leaderboard",token );
//     const data = await res.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const getAllOrganizerRankingService = async () => {
  try{
    const res = await fetch(`${baseUrl}/leaderboard/organizer-rankings-leaderboard`);
    const data = await res.json();
    return data;
  }catch(e){
    console.log(e);
  }
}
export const getUserRankingFilterService= async(provinceId,categoryId)=>{
  try{
    const params = new URLSearchParams();
    if (provinceId) {
      params.append("provinceId", provinceId);
    }if (categoryId) {
      params.append("categoryId", categoryId);
      
    }
    const data = await apiRequest(`/leaderboard/user-rankings/filter?${params.toString()}`,"GET");
    return data;
  }catch(e){
    console.log(e);
  }
};

