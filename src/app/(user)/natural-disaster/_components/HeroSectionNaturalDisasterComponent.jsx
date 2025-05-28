import SearchBarComponent from "@/components/SearchBarComponent";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSectionNaturalDisasterComponent = () => {
  return (
    <>
      <Image
        src="/assets/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute w-full px-6 lg:px-[150px]  text-white text-center lg:flex-row lg:justify-between ">
        <article className="flex flex-col-reverse gap-10 lg:flex-row ">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-1 items-start">
              <h2 className="font-bold  text-2xl lg:text-4xl">
                Natural Disaster
              </h2>
              <p className="text-sm lg:text-xl max-w-xl">
                Monitor And Track Natural Disaster
              </p>
            </div>
          </div>
          {/* Current Cards Disaster*/}
          <div className="flex flex-col w-full">
            <h2 className="text-sm lg:text-xl max-w-xl">Current Disaster</h2>
            <div className="flex">{/* Cards */}</div>
          </div>
        </article>
      </div>
    </>
  );
};

export default HeroSectionNaturalDisasterComponent;
