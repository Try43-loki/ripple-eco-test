import { getFileUploadService } from "@/service/fileUploadService";

export const fileUploadAction = async (file) => {
    try {
      const uploadedFile = await getFileUploadService(file);
      return uploadedFile;
    } catch (e) {
      console.log("error", e);
    }
  };
  