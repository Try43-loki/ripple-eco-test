"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CreateDiscussionComponent from "./CreateDiscussionComponent";
import VerifyOrganizerComponent from "./VerifyOrganizerComponent";
import Image from "next/image";

import CreateTakeActionFormComponent from "./CreateTakeActionFormComponent";
import PopupTakeActionForm from "@/app/(user)/take-action/_component/PopupTakeActionForm";

const DashboardHeaderComponent = ({ title, text, buttonAction }) => {
  const [showDiscussionModal, setShowDiscussionModal] = useState(false);
  const [showTakeActionModal, setShowTakeActionModal] = useState(false);
  const router = useRouter();

  const handleVerificationSuccess = () => {
    if (buttonAction === "create-discussion") {
      setShowDiscussionModal(true);
    } else if (buttonAction === "create-event") {
      router.push("/organizer/create-event");
    } else if (buttonAction === "create-take_action") {
      setShowTakeActionModal(true);
    }
  };

  return (
    <>
      <section className="w-full">
        <article className="text w-full flex flex-col gap-y-3 relative p-4 rounded-3xl bg-gradient-to-tr from-[#dfc7ac66] to-[#d7e4d7d9]">
          <h1 className="text-xl text-dark-green font-semibold opacity-90">
            {title || "Welcome back, Earth Hero!"} 🌿🌍
          </h1>
          <p className="text-light-green w-xl">
            {text ||
              `The Earth is lucky to have you. Let’s keep making choices that lead to a brighter, cleaner future.`}
          </p>

          <div>
            <VerifyOrganizerComponent
              text={
                buttonAction === "create-discussion"
                  ? "Create Discussion"
                  : buttonAction === "create-event"
                  ? "Create Eco-Event"
                  : "Create Survey"
              }
              buttonAction={handleVerificationSuccess}
            />
          </div>
          <Image
            src="/badges/hero-section-dashboard.png"
            alt="hero section dashboard"
            width={338}
            height={160}
            objectFit="cover"
            className="absolute rounded-2xl right-0 bottom-0"
          />
        </article>
      </section>

      {/* Modal for Create Discussion */}
      {showDiscussionModal && (
        <CreateDiscussionComponent
          open={showDiscussionModal}
          onOpenChange={setShowDiscussionModal}
        />
      )}

      {/* Modal for take action */}
      {showTakeActionModal && (
        <CreateTakeActionFormComponent
          open={showTakeActionModal}
          onOpenChange={setShowTakeActionModal}
        />
      )}
    </>
  );
};

export default DashboardHeaderComponent;
