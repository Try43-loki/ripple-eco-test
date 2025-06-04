import { baseUrl } from "./constants";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YW5la2FoNDAwQGNpZ2lkZWEuY29tIiwiaWF0IjoxNzQ4ODQ5MzI0LCJleHAiOjE3NDkxMDg1MjR9.xT38yXnRrqKXlByDQqo_pbYrX3WJI6kADd8B7PU2raY";

export const getFileUploadService = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${baseUrl}/upload-image`, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    return response;
  } catch (e) {
    console.log("Upload error:", e);
    throw e;
  }
};
