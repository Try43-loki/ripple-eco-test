import { apiRequest } from "@/utils/api";
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6ZmFsc2UsImlzR29vZ2xlIjp0cnVlLCJmdWxsTmFtZSI6IktpbSBMb25nIFNSQyIsImlkIjoiZDhmYWMxMjEtMTViMC00MGNiLTk5NWEtOTY4YzEwMzIzMjg2IiwiZW1haWwiOiJ0aHVuZGVyZ29kdGhvcjk2NkBnbWFpbC5jb20iLCJzdWIiOiJ0aHVuZGVyZ29kdGhvcjk2NkBnbWFpbC5jb20iLCJpYXQiOjE3NDk1MjYwMzQsImV4cCI6MTc0OTc4NTIzNH0.D_5TDFbLoGcgQiLQnVD7La9zHsRwo8b5r3zpvaKfKtI'
export const getAllOwnFeedBackService = async () => {
    try {
      const data = await apiRequest(`/feedback/own`, "GET", null, token);
      return data;
    } catch (e) {
      console.log("error", e);
    }
};
