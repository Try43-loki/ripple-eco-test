"use client";
import RateComponent from "@/components/RateComponent";
import { useSession } from "next-auth/react";

import React from "react";
import { date } from "zod";

function page() {
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);

  return (
    <>
      <RateComponent />
    </>
  );
}

export default page;
