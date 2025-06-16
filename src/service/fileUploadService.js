import { getAuthToken } from "@/utils/auth-api";
import { baseUrl } from "./constants";
import { apiRequest } from "@/utils/api";

export const getFileUploadService = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);
    const response = await fetch(
      `https://ripple-api.kshrd.app/api/v1/images/upload-image`,
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

export const mutilpleFileUploadService = async (formData) => {
  try {
    const res = await fetch(`${baseUrl}/images/upload-multiple-images`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Upload error:", e);
    throw e;
  }
};
