"use server";

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
  redirect("/home");
};
