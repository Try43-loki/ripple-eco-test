"use server";

import { getUserProfileService } from "@/service/auth/user-service";

export const getUserProfileAction = async (_) => {
  const profile = await getUserProfileService();

  return profile;
};
