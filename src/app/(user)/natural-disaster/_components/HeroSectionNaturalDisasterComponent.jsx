import { Droplet, Flame, Waves, Wind } from "lucide-react";
import Image from "next/image";
import React from "react";
import CardCurrentDisasterComponent from "./CardCurrentDisasterComponent";

const HeroSectionNaturalDisasterComponent = ({ naturalData }) => {
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
      active: 2,
    },
    {
      id: 4,
      type: "Wildfires",
      icon: Flame,
      active: 2,
    },
  ];

  return (
    <>
      <Image
        src="/assets/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute w-full mt-20 px-6 lg:px-[180px]  text-white text-center lg:flex-row lg:justify-between ">
        <article className="flex flex-col-reverse gap-10 lg:flex-row ">
          <div className="flex flex-col  justify-center items-start gap-8 w-full">
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
          <div className="flex flex-col items-end gap-1.5 w-auto">
            <h2 className="text-sm lg:text-xl max-w-xl self-start">
              Current Disaster
            </h2>
            <div className="flex justify-between gap-3">
              <CardCurrentDisasterComponent naturalData={naturalData} />
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default HeroSectionNaturalDisasterComponent;
