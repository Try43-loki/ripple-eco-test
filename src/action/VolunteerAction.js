"use server";

import {
  approveVolunteerRequestService,
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
