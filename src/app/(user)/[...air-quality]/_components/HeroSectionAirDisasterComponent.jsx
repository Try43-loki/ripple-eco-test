"use client";

import Image from "next/image";
import React from "react";
import MultiSelectDropdown from "./MultiSelectDropdownComponent";
import { formatValue } from "@/utils/format";
import { usePathname, useSearchParams } from "next/navigation";
import CardInformationAQIComponent from "./CardInformationAQIComponent";

const HeroSectionAirDisasterComponent = ({
  provincesList,
  provinceData,
  levelColor,
}) => {
  const { mainPollution } = provinceData;

  // Get Current Province or District
  const pathName = usePathname();
  const path = pathName.split("/")[2];

  return (
    <>
      <Image
        src="/assets/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute w-full px-6 lg:px-[180px] mt-20 text-white text-center lg:flex-row lg:justify-between ">
        <article className="flex flex-col-reverse gap-10 lg:flex-row    ">
          <div className="flex flex-col gap-8 w-full justify-between">
            <div className="flex flex-col gap-1 items-start">
              <h2 className="font-bold  text-2xl lg:text-4xl">
                Air Quality In {formatValue(path)}
              </h2>
              <p className="text-sm lg:text-xl max-w-xl">
                Air quality index (AQI*) and {formatValue(mainPollution)} air
                pollution in {formatValue(path)}
              </p>
            </div>
            <div className="w-2xl text-dark-gray ">
              <MultiSelectDropdown provincesList={provincesList} />
            </div>
          </div>
          <div className="flex-shrink-0">
            <CardInformationAQIComponent
              provinceData={provinceData}
              levelColor={levelColor}
            />
          </div>
        </article>
      </div>
    </>
  );
};

export default HeroSectionAirDisasterComponent;
