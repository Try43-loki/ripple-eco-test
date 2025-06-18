"use client";

import React from "react";
import { usePathname } from "next/navigation";
import VerifyOrganizerComponent from "./VerifyOrganizerComponent";
import Image from "next/image";

import { Button } from "./ui/button";
import CreateTakeActionFormComponent from "./CreateTakeActionFormComponent";
import Link from "next/link";

const DashboardHeaderComponent = ({ title, profile }) => {
  const currentPath = usePathname();
  const path = currentPath.split("/")[2];
  const isVerifyOrganizer = profile?.data?.isVerifiedOrganizer;

  let type =
    path === "eco-event"
      ? "Create Eco-Event"
      : path === "discussion-forums"
      ? "Create Discussion"
      : path === "take-action"
      ? "Create Take-Action"
      : "";

  return (
    <>
      <section className="w-full">
        <article className="text w-full flex flex-col gap-y-3 relative p-4 rounded-3xl bg-gradient-to-tr from-[#dfc7ac66] to-[#d7e4d7d9]">
          <h1 className="text-xl text-dark-green font-semibold opacity-90">
            {title || "Welcome back, Earth Hero!"} 🌿🌍
          </h1>
          <p className="text-light-green w-xl">
            The Earth is lucky to have you. Let’s keep making choices that lead
            to a brighter, cleaner future.
          </p>

          <div>
            {type === "Create Take-Action" ? (
              <CreateTakeActionFormComponent
                isVerify={isVerifyOrganizer}
                type={type}
              />
            ) : type === "Create Eco-Event" ? (
              <Link href={"/organizer/create-event"}>
                <Button className="bg-green cursor-pointer text-white rounded-xl px-6 py-3 hover:bg-green/80 border-none hover:text-white">
                  {type}
                </Button>
              </Link>
            ) : (
              ""
            )}
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
        {isVerifyOrganizer ? (
          ""
        ) : (
          <section>
            <h4 className="text-orange-300 my-2 text-xl">Warning!</h4>
            <div className="flex justify-between items-center mt-3 bg-orange-100 rounded-3xl p-4 ">
              <p className="text-gray-800 text-md">
                If you want to have full interact in our platform please verify
                with your National ID Card
              </p>

              <VerifyOrganizerComponent />
            </div>
          </section>
        )}
      </section>
    </>
  );
};

export default DashboardHeaderComponent;
