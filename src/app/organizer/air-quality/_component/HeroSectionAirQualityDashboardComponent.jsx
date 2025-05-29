import CardInformationAQI from "@/app/(user)/air-quality/_components/CardInformationAQIComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSectionAirQualityDashboardComponent = (props) => {
  const { province, pollution } = props.dataSearch;

  return (
    <>
      <div className="rounded-2xl relative flex items-center justify-start bg-linear-to-r bg-light-brown p-10 h-42.5 mt-8">
        <article className="flex flex-col-reverse gap-10 lg:flex-row w-full">
          <div className="flex flex-col gap-5 justify-center items-start w-full">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h2 className="font-bold  text-xl ">Air Quality In {province}</h2>
              <p className="text-sm text-dark-gray max-w-xl">
                Air quality index (AQI*) and {pollution} air pollution in
                {province}
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
            <CardInformationAQI
              dataCard={props.dataCard}
              levelColor={props.levelColor}
            />
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

export default HeroSectionAirQualityDashboardComponent;
