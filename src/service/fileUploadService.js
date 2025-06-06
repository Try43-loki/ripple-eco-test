import { baseUrl } from "./constants";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4ODQ5MzI0LCJleHAiOjE3NDkxMDg1MjR9.xT38yXnRrqKXlByDQqo_pbYrX3WJI6kADd8B7PU2raY";

export const getFileUploadService = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    const response = await fetch(
      `http://34.101.216.70:8883/api/v1/images/upload-image`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log("Upload error:", e);
    throw e;
  }
};
