import { apiRequest } from "@/utils/api";
import { baseUrl } from "./constants";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6dHJ1ZSwiaXNHb29nbGUiOmZhbHNlLCJmdWxsTmFtZSI6IkhlbmcgQ2hha3JpeWEiLCJpZCI6IjlkYjI2NjBjLWE2ZmEtNDk4Yy05ZGEzLWU4OWE4Yjg0YTU4YiIsImVtYWlsIjoibHlodXYyMzRAZ21haWwuY29tIiwic3ViIjoibHlodXYyMzRAZ21haWwuY29tIiwiaWF0IjoxNzQ5MTczMzAzLCJleHAiOjE3NDk0MzI1MDN9.npjkHxyXDiRY6Uj7jrA67j5zeoK8glJAr0ni8yDrpGY";
export const getAllUserRankingService = async () => {
  try {
    const res = await fetch(`${baseUrl}/leaderboard/user-rankings-leaderboard`);
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
export const getUserRankingFilterService=async()=>{
  try{
    const res = await apiRequest("/leaderboard/user-rankings-leaderboard","GET",null,token);
    const data = await res.json();
    console.log("data rea",data); 
    return data;
  }catch(e){
    console.log(e);
  }
};

export const getUserFilterService = async (province) => {
  try{
    const res = await fetch(`${baseUrl}/leaderboard/user-rankings/filter?province=${province}`);
    const data = await res.json();
    return data;
  }catch(e){
    console.log(e);
  }
}
