import DiscussionButtonComponent from "@/components/DiscussionButtonComponent";
import StatusButtonComponent from "@/components/StatusButtonComponent";
import Image from "next/image";
import React from "react";

const HeroSectionDashboarComponent = () => {
  return (
    <>
      <section className="rounded-2xl relative flex items-center justify-start bg-gradient-to-tr from-[#dfc7ac66] to-[#d7e4d7d9] p-5 h-42.5 mt-8">
        <div className="flex flex-col gap-y-2 items-start">
          <h3 className="text-xl text-dark-green font-semibold opacity-90">
            Take Action Now
          </h3>
          <p className="text-light-green w-xl">
            Speak up for nature by contacting your elected officials or pledging
            to take action. Make a difference for conservation—we can't do it
            without you!
          </p>
          <div className="w-30 mt-2">
            <DiscussionButtonComponent text={"Start Action"} />
          </div>
        </div>
        <Image
          src="/badges/hero-section-dashboard.png"
          alt="hero section dashboard"
          width={338}
          height={160}
          objectFit="cover"
          className="absolute rounded-2xl right-0 bottom-0"
        />
      </section>
    </>
  );
};

export default HeroSectionDashboarComponent;
