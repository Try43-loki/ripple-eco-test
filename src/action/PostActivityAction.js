"use server";

import { fileUploadAction } from "./FileUploadAction";
import { postActivityService } from "@/service/PostActivityService";

export const insertPostActivityAction = async (data, id) => {
  try {
    const summaryList = await Promise.all(
      data?.activity?.map(async (entry) => {
        let imageUrl = null;

        if (entry.image) {
          imageUrl = await fileUploadAction(entry.image);
        }

        return {
          imageUrl,
          description: entry.description,
        };
      })
    );
    const result = {
      title: data.activity?.[0]?.title || "Untitled Activity",
      summaryList,
    };
    await postActivityService(result, id);
    return { success: true, result };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
