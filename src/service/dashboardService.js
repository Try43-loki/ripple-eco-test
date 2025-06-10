import { apiRequest } from "@/utils/api";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc09yZ2FuaXplciI6dHJ1ZSwiaXNHb29nbGUiOmZhbHNlLCJmdWxsTmFtZSI6Ik5vcnkgTWVuZ2xlYW5nIiwiaWQiOiI4YWJhNDYzNS04ZTdhLTQ2ZWUtODFlZC1mZjBjNTc1MjZmOGEiLCJlbWFpbCI6Im5vcnltZW5nbGVhbmdAZ21haWwuY29tIiwic3ViIjoibm9yeW1lbmdsZWFuZ0BnbWFpbC5jb20iLCJpYXQiOjE3NDk0MzMwMjAsImV4cCI6MTc0OTY5MjIyMH0.EDM_R1waqQHW6IcP1oBT_mgdZujdDI4Gi8n99iHQ9Oo";

export const getDashboardDataService = async () => {
  try {
    const res = await apiRequest("/dashboard", "GET", null, token);
    return res;
  } catch (e) {
    console.log(e);
  }
};
