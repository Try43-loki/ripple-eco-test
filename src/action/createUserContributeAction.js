"use server";

import { createUserContributeService } from "@/service/contributeService";

export const createUserContributeAction = async (formData) => {
  try {
    const data = await createUserContributeService(formData);
    return { success: true, data };
  } catch (error) {
    console.error("Error in createUserContributeAction:", error);
    return { success: false, error: error.message };
  }
};
