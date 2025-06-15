"use client";
import NotificationItem from "@/components/NotificationComponent";
import { KnockProvider } from "@knocklabs/react";

import React from "react";

function page() {
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
