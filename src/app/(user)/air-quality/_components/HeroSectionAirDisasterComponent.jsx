import SearchBarComponent from "@/components/SearchBarComponent";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import CardInformationAQI from "./CardInformationAQIComponent";
import MultiSelectDropdown from "./MultiSelectDropdownComponent";

const HeroSectionAirDisasterComponent = (props) => {
  const { province, pollution } = props.dataSearch;

  return (
    <>
      <Image
        src="/assets/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute w-full px-6 lg:px-[150px] mt-20 text-white text-center lg:flex-row lg:justify-between ">
        <article className="flex flex-col-reverse gap-10 lg:flex-row    ">
          <div className="flex flex-col gap-8 w-full justify-between">
            <div className="flex flex-col gap-1 items-start">
              <h2 className="font-bold  text-2xl lg:text-4xl">
                Air Quality In {province}
              </h2>
              <p className="text-sm lg:text-xl max-w-xl">
                Air quality index (AQI*) and {pollution} air pollution in{" "}
                {province}
              </p>
            </div>
            <div className="w-2xl text-dark-gray ">
              <MultiSelectDropdown />
            </div>
          </div>
          <div className="flex-shrink-0">
            <CardInformationAQI
              dataCard={props.dataCard}
              levelColor={props.levelColor}
            />
          </div>
        </article>
      </div>
    </>
  );
};

export default HeroSectionAirDisasterComponent;
