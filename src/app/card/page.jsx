"use client";
import { registerWithGoogleAction } from "@/action/auth-action";
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";
import React from "react";
import LoginSocialComponent from "../(auth)/_component/LoginSocialComponent";

function page() {
  return (
    <div>
      <p>register google</p>
      <LoginSocialComponent />
    </div>
  );
}

export default page;
