"use server";
import {
  getFileUploadService,
  mutilpleFileUploadService,
} from "@/service/fileUploadService";

export const fileUploadAction = async (file) => {
  try {
    const uploadedFile = await getFileUploadService(file);
    const imageUrl = uploadedFile?.data?.imageUrl;
    return imageUrl;
  } catch (e) {
    console.log("error", e);
  }
};

// export const multipleFileUploadAction = async (formData) => {
//   const imagesData = new FormData();
//   formData.forEach((file) => imagesData.append("images", file));
//   console.log("image", imagesData); // Check if formData is being passed correctly

//   try {
//     const uploadedFiles = await mutilpleFileUploadService(imagesData);
//     console.log("uploadedFiles", uploadedFiles);
//     const imageUrls = uploadedFiles?.data?.imageUrls;
//     return imageUrls;
//   } catch (e) {
//     console.log("error", e);
//   }
// };

export const multipleFileUploadAction = async (files) => {
  const formData = new FormData();
  files.forEach((file) => formData.append("file", file));

  try {
    const response = await mutilpleFileUploadService(formData);
    return response?.data;
  } catch (error) {
    console.error("Upload error:", error);
  }
};
