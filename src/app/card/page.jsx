"use client";
import NotificationItem from "@/components/NotificationItem";
import { KnockProvider } from "@knocklabs/react";
import { useSession } from "next-auth/react";

import React from "react";
import { date } from "zod";

function page() {
  const { data: session, status } = useSession();
  console.log("session", session);
  console.log("status", status);

  return (
    <>
      <KnockProvider apiKey={process.env.NEXT_PUBLIC_KNOCK_API_KEY} userId={3}>
        <div className="mt-1">
          <NotificationItem />
        </div>
      </KnockProvider>
    </>
  );
}

export default page;
