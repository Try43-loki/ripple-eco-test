"use server";
import { createDiscussionService } from "@/service/discussionService";
import { revalidateTag } from "next/cache";
import { fileUploadAction } from "./FileUploadAction";

export const insertDiscussionAction = async (data) => {
  try {
    const imageFile = data.image;
    const imageUrl = await fileUploadAction(imageFile);
    data.image = imageUrl;
    const res = await createDiscussionService(data);
    console.log("res", res);
    revalidateTag("discussion");
    return { success: true, message: "Discussion added successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
