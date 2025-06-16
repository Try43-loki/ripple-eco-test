"use server";

import {
  approveVolunteerRequestService,
  getAllVolunteerRequestService,
  createVolunteerRequestService,
  rejectVolunteerRequestService,
} from "@/service/volunteerService";
import { revalidatePath, revalidateTag } from "next/cache";

// Get all volunteer action
export const getAllVolunteerRequestAction = async (eventId) => {
  try {
    const data = await getAllVolunteerRequestService(eventId);
    // return {
    //   success: true,
    //   message: "Volunteer retrieve success...",
    //   data: data,
    // };
    return data;
  } catch (error) {
    return { success: false, message: error.message, data: [] };
  }
};

// Approve volunteer action
export const approveVolunteerAction = async (requestId) => {
  try {
    await approveVolunteerRequestService(requestId);
    revalidateTag("volunteers");
    return { success: true, message: "Volunteer approve.." };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// reject volunteer action
export const rejectVolunteerAction = async (requestId) => {
  try {
    await rejectVolunteerRequestService(requestId);
    revalidateTag("volunteers");
    return { success: true, message: "Volunteer reject.." };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const createVolunteerAction = async (formData) => {
  try {
    const data = await createVolunteerRequestService(formData);
    revalidateTag("volunteers");
    return {
      success: true,
      message: "Volunteer request created successfully",
      data,
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
};
