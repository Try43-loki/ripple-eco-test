import CardInformationAQI from "@/app/(user)/air-quality/_components/CardInformationAQIComponent";
import CardCurrentDisasterComponent from "@/app/(user)/natural-disaster/_components/CardCurrentDisasterComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import { ChevronDown, Droplet, Flame, Waves, Wind } from "lucide-react";
import Image from "next/image";
import React from "react";

const disaster = [
  {
    id: 1,
    type: "Earthquakes",
    icon: Waves,
    active: 3,
  },
  {
    id: 2,
    type: "Flood",
    icon: Droplet,
    active: 3,
  },
  {
    id: 3,
    type: "Typhoons",
    icon: Wind,
    active: 3,
  },
  {
    id: 4,
    type: "Wildfires",
    icon: Flame,
    active: 3,
  },
];

const HeroSectionNaturalDisasterDashboardComponent = () => {
  return (
    <>
      <div className="rounded-2xl relative flex items-center justify-start bg-gradient-to-tr from-[#dfc7ac66] to-[#d7e4d7d9] p-10 h-42.5 mt-8">
        <article className="flex flex-col-reverse gap-10 lg:flex-row w-full">
          <div className="flex flex-col gap-5 justify-center items-start w-full">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h2 className="font-bold text-xl ">Natural Disaster</h2>
              <p className="text-sm text-dark-gray max-w-xl">
                Monitor And Track Natural Disaster
              </p>
            </div>
          </div>
          {/* Current Cards Disaster*/}
          <div className="flex z-10 flex-col items-end gap-1.5 w-auto">
            <h2 className="text-sm font-semibold  max-w-xl self-start">
              Current Disaster
            </h2>
            <div className="flex justify-between gap-3">
              {/* Row Cards */}
              {disaster.map((disaster) => (
                <CardCurrentDisasterComponent
                  key={disaster.id}
                  informDisaster={disaster}
                />
              ))}
            </div>
          </div>
          <Image
            src="/assets/hero-section-dashboard.png"
            alt="hero section dashboard"
            width={220}
            height={160}
            objectFit="cover"
            className="absolute rounded-2xl right-0 bottom-0 opacity-30"
          />
        </article>
      </div>
    </>
  );
};

export default HeroSectionNaturalDisasterDashboardComponent;
