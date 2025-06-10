"use server";

import {
  addInfomationService,
  forgetPasswordService,
  loginService,
  loginSocialService,
  registerService,
  registerWithGoogleService,
  setPasswordService,
  updatePasswordService,
  verifyOtpService,
} from "@/service/auth/auth.service";
import { signIn } from "../auth";
import { date } from "zod";

export const loginAction = async (formData) => {
  const email = formData.email;
  const password = formData.password;

  try {
    const res = await loginService({ email, password });
    // if (res?.status == 400) {
    //   return {
    //     success: false,
    //     message: res?.detail,
    //   };
    // }
    // if (res?.status == 500) {
    //   return {
    //     success: false,
    //     message: "Server error",
    //   };
    // }
    const sign = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log("sign", sign);

    return { success: true, data: res };
  } catch (error) {
    console.error("Error in login:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};
export const registerAction = async (formData) => {
  const email = formData?.email;
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

export const verifyOTPAction = async (email, otpCode, type) => {
  console.log(email, otpCode, type);
  const formData = {
    email: email,
    otp: otpCode,
  };

  try {
    const res = await verifyOtpService(formData, type);
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
    console.log(res);
    return { success: true, data: res };
  } catch (err) {
    return {
      success: false,
      message: "Set password failed",
    };
  }
};

export const addInfamtionAction = async (formData) => {
  try {
    const res = await addInfomationService(formData);
    if (res?.status == 409) {
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

export const forgetPasswordAction = async (formData) => {
  const email = formData?.email;
  try {
    const res = await forgetPasswordService(email);
    if (res?.status == 404) {
      return {
        success: false,
        message: res?.detail,
      };
    }
    return { success: true, data: res };
  } catch (err) {
    console.error("Forget password error:", err);
  }
};

export const updatePasswordAction = async (password, email, otp) => {
  const formData = {
    email: email,
    newPassword: password,
    otp: otp,
  };
  try {
    const res = await updatePasswordService(formData);
    if (res?.status == 400) {
      return {
        success: false,
        message: res?.detail,
      };
    }
    return { success: true, data: res };
  } catch (err) {
    console.error("Update password error:", err);
  }
};

export const registerWithGoogleAction = async (formData) => {
  try {
    const res = await registerWithGoogleService(formData);
    if (res?.status == 409) {
      return {
        success: false,
        message: res?.detail,
      };
    }

    console.log("res: ", res);
    return { success: true, data: res };
  } catch (err) {
    console.error("Registration error:", err);
    return {
      success: false,
      message: "Google registration failed.",
    };
  }
};

