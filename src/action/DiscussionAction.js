"use server";
import {
  createDiscussionService,
  deleteDiscussionService,
  updateDiscussionService,
} from "@/service/discussionService";
import { revalidateTag } from "next/cache";
import { fileUploadAction } from "./FileUploadAction";

export const insertDiscussionAction = async (data) => {
  try {
    const imageFile = data.image;
    const imageUrl = await fileUploadAction(imageFile);
    data.image = imageUrl;
    await createDiscussionService(data);
    revalidateTag("discussion");
    return { success: true, message: "Discussion added successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const updateDiscussionAction = async (data) => {
  try {
    const imageFile = data.image;
    const imageUrl = await fileUploadAction(imageFile);
    data.image = imageUrl;
    const discussionId = data.id;
    await updateDiscussionService(data, discussionId);
    revalidateTag("discussion");
    return { success: true, message: "Discussion updated successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const deleteDiscussionAction = async (discussionId) => {
  try {
    await deleteDiscussionService(discussionId);
    revalidateTag("discussion");
    return { success: true, message: "Discussion deleted successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
