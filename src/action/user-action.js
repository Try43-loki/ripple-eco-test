"use server";

import { getUserProfileService } from "@/service/auth/user-service";
import { verifyOrganizerService } from "@/service/profileService";

export const getUserProfileAction = async (_) => {
  const profile = await getUserProfileService();
  // console.log("profile:", profile);
  return profile;
};

export const verifyOrganizerAction = async (dataOrganizer) => {
  const formData = {
    birthDay: `${dataOrganizer.yearOfBirth}-${String(
      dataOrganizer.monthOfBirth
    ).padStart(2, "0")}-${String(dataOrganizer.dayOfBirth).padStart(2, "0")}`,
    nationalCardId: dataOrganizer.nationalID,
  };
  const data = await verifyOrganizerService(formData);
  if (data?.code == 200) {
    return { success: true, message: "Verify organizer success!" };
  }
  return { success: true, message: "Verify organizer fail!" };
};
