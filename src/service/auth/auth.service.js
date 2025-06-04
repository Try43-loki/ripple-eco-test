import { redirect } from "next/navigation";
import { baseUrl } from "../constants";
import headerToken from "@/utils/headerToken";

export const loginService = async ({ email, password }) => {
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
  console.log(data);

  if (!data) {
    redirect("/login");
  }
  return data;
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

export const verifyOtpService = async (formData) => {
  try {
    const res = await fetch(`${baseUrl}/auths/verify-otp?type=REGISTER`, {
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
    console.log("data ser", data);
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
