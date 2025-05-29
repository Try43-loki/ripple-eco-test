"use client";
import NotificationComponent from "@/components/NotificationComponent";
import { KnockProvider } from "@knocklabs/react";
import React from "react";

export default function page() {
  return (
    <div>
      <KnockProvider apiKey={process.env.NEXT_PUBLIC_KNOCK_API_KEY} userId={3}>
        <NotificationComponent />
      </KnockProvider>
    </div>
  );
}
