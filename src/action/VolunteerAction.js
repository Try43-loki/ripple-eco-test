"use server";

import {
  approveVolunteerRequestService,
  createVolunteerRequestService,
  rejectVolunteerRequestService,
} from "@/service/volunteerService";
import { revalidatePath, revalidateTag } from "next/cache";

export const approveVolunteerAction = async (requestId) => {
  try {
    await approveVolunteerRequestService(requestId);
    // revalidateTag("volunteers");
    revalidatePath("/organizer/volunteer");
    redirect("/organizer/volunteer");
    return { success: true, message: "Volunteer approve.." };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

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
    return { success: true, message: "Volunteer request created successfully", data };
  } catch (error) {
    return { success: false, message: error.message };
  }
}
