"use server";

import { getUserProfileService } from "@/service/auth/user-service";
import { auth, signIn, signOut } from "../auth";
import { apiRequest } from "@/utils/api";
export const doSocialLogin = async (formData) => {
  const session = await auth();
  const action = formData.get("action");
  if (!session) {
    await signIn(action, { redirectTo: "/register-google" });
  } else {
    await signIn(action, { redirectTo: "/home" });
  }
};

export const dologout = async () => {
  await signOut({ redirectTo: "/login" });
};
