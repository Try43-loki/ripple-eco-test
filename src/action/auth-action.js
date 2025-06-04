"use server";

import {
  addInfomationService,
  registerService,
  setPasswordService,
  verifyOtpService,
} from "@/service/auth/auth.service";
import { signIn } from "../../auth";
import { redirect } from "next/navigation.js";

export const loginAction = async (formData) => {
  const email = formData.email;
  const password = formData.password;

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
};
export const registerAction = async (formData) => {
  const email = formData.email;
  try {
    const res = await registerService(email);
    if (res?.status == 409) {
      return {
        success: false,
        message: res?.detail,
      };
    }
    return { success: true, data: res };
  } catch (error) {
    console.error("Error in register:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const verifyOTPAction = async (email, otpCode) => {
  const formData = {
    email: email,
    otp: otpCode,
  };

  try {
    const res = await verifyOtpService(formData);
    if (res?.status == 400) {
      return {
        success: false,
        message: res?.detail,
      };
    }
    return { success: true, data: res };
  } catch (error) {
    console.error("Error in verify:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

export const setPasswordAction = async (password, email) => {
  const formData = {
    email: email,
    password: password,
  };
  try {
    const res = await setPasswordService(formData);
    if (res?.status == 400) {
      return {
        success: false,
        message: res?.detail,
      };
    }
    return { success: true, data: res };
  } catch (err) {
    return {
      success: false,
      message: "Set password failed",
    };
  }
};

export const addInfamtionAction = async (formData) => {
  const formDataNew = {
    email: formData?.email,
    firstName: formData?.firstname,
    lastName: formData?.lastname,
    address: formData?.address,
    birthDate: formData?.birthDate,
    gender: formData?.gender,
    phoneNumber: formData?.phoneNumber,
    isOrganizer: formData?.isOrganizer,
    organizerName: formData?.organizerName,
  };
  try {
    const res = await addInfomationService(formDataNew);
    if (res?.status == 400) {
      return {
        success: false,
        message: res?.detail,
      };
    }
    return { success: true, data: res };
  } catch (err) {
    return {
      success: false,
      message: "Add infomation failed",
    };
  }
};
