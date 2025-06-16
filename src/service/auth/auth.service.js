import { redirect } from "next/navigation";
import { baseUrl } from "../constants";
import headerToken from "@/utils/headerToken";
import { apiRequest } from "@/utils/api";

export const loginService = async (email, password) => {
  try {
    const res = await fetch(`${baseUrl}/auths/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const registerService = async (registerData) => {
  try {
    const res = await fetch(`${baseUrl}/auths/request-otp?type=REGISTER`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(registerData),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const verifyOtpService = async (formData, type) => {
  try {
    const res = await fetch(`${baseUrl}/auths/verify-otp?type=${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const setPasswordService = async (formData) => {
  try {
    const res = await fetch(`${baseUrl}/auths/set-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const addInfomationService = async (formData) => {
  try {
    const res = await fetch(`${baseUrl}/auths/complete-register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const forgetPasswordService = async (email) => {
  try {
    const data = await apiRequest(
      `/auths/forgot-password?email=${email}`,
      "POST",
      {
        email: email,
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updatePasswordService = async (formData) => {
  try {
    const data = await apiRequest("/auths/reset-password", "PUT", formData);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const registerWithGoogleService = async (formData) => {
  try {
    const res = await fetch(`${baseUrl}/auths/google-signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

