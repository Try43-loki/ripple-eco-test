"use client";
import React, { useState } from "react";
import Link from "next/link";
import CreateDiscussionComponent from "./CreateDiscussionComponent";
import VerifyOrganizerComponent from "./VerifyOrganizerComponent";

const DashboardHeaderComponent = ({ title, text, link, buttonAction }) => {
  return (
    <>
      <section>
        <article className="text flex flex-col gap-y-3 relative p-4 rounded-3xl bg-gradient-to-tr from-[#dfc7ac66] to-[#d7e4d7d9]">
          <h1 className="text-xl text-dark-green font-semibold opacity-90">
            {title || "Welcome back, Earth Hero!"} 🌿🌍
          </h1>
          <p className="text-light-green w-xl">
            {text ||
              `The Earth is lucky to have you. Let’s keep making choices that lead to a brighter, cleaner future.`}
          </p>

          {/* Dynamic Button */}
          {buttonAction === "create-discussion" ? (
            // Button to open the Create Discussion Modal
            <div className="">
              {/* <CreateDiscussionComponent /> */}
              <VerifyOrganizerComponent text={"Create Discussion"} />
            </div>
          ) : buttonAction === "create-event" ? (
            // Button to navigate to create event page
            <div>
              <VerifyOrganizerComponent text={"Create Eco-Event"} />
            </div>
          ) : null}
        </article>
      </section>

      {/* Discussion form */}
    </>
  );
};

export default DashboardHeaderComponent;
