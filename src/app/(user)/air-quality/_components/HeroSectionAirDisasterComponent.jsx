import SearchBarComponent from "@/components/SearchBarComponent";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import CardInformationAQI from "./CardInformationAQIComponent";

const api = {
  province: "Phnom Penh",
  pollution: "PM2.5",
};

const HeroSectionAirDisasterComponent = () => {
  return (
    <>
      <Image
        src="/assets/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute w-full max-w-5xl px-4 md:px-20 text-white text-center flex flex-col items-center">
        <article className="flex flex-col-reverse gap-10 lg:flex-row    ">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-1 items-start">
              <h2 className="font-bold  text-2xl lg:text-4xl">
                Air Quality In {api.province}
              </h2>
              <p className="text-sm lg:text-xl max-w-xl">
                Air quality index (AQI*) and {api.pollution} air pollution in{" "}
                {api.province}
              </p>
            </div>
            <div className="w-2xl text-dark-gray">
              <SearchBarComponent
                placeholder={"Select Provinces"}
                icon={<ChevronDown />}
              />
            </div>
          </div>
          <div className="flex-shrink-0">
            <CardInformationAQI />
          </div>
        </article>
      </div>
    </>
  );
};

export default HeroSectionAirDisasterComponent;
