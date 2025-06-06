"use server";
import { getFileUploadService } from "@/service/fileUploadService";

export const fileUploadAction = async (file) => {
  try {
    const uploadedFile = await getFileUploadService(file);
    const imageUrl = uploadedFile?.data?.imageUrl;
    return imageUrl;
  } catch (e) {
    console.log("error", e);
  }
};
