import { redirect } from "next/navigation";
import { baseUrl } from "../constants";

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
  const res = await fetch(`http://localhost:8080/api/v1/auths/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });
  const data = await res.json();
  if (!data) {
    redirect("/register");
  }
  return data;
};
