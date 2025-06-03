"use server";

import { getUserProfileService } from "@/service/user-service";

export const getUserProfileAction = async (_) => {
  const profile = await getUserProfileService();
  console.log("profile", profile);

  return profile;
};
