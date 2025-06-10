"use server";

import { updateProfileService } from "@/service/auth/user-service";

export const updateProfileAction = async (formData, type) => {
  console.log("formData", formData);
  try {
    const res = await updateProfileService(formData, type);
    if (res?.code === 200) {
      return {
        success: true,
        message: res?.message,
      };
    }
  } catch (e) {
    console.log(e);
  }
};
