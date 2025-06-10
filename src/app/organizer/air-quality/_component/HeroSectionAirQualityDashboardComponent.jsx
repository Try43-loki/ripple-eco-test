import CardInformationAQI from "@/app/(user)/air-quality/[...slug]/_components/CardInformationAQIComponent";
import MultiSelectDropdown from "@/app/(user)/air-quality/[...slug]/_components/MultiSelectDropdownComponent";
import React from "react";

const HeroSectionAirQualityDashboardComponent = (props) => {
  const { province, pollution } = props.dataSearch;

  return (
    <>
      <div className="rounded-2xl relative flex items-center justify-start bg-gradient-to-tr from-[#dfc7ac66] to-[#d7e4d7d9] p-10 h-42.5 ">
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

export default HeroSectionAirQualityDashboardComponent;
