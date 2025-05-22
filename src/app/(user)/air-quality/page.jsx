import React from "react";
import CardInformationAQI from "./_components/CardInformationAQIComponent";
import Image from "next/image";
import SearchBarComponent from "@/components/SearchBarComponent";
import UserNavbarComponent from "@/components/NavbarComponent";

const api = {
  province: "Phnom Penh",
  pollution: "PM2.5",
};

const AirQualityPage = () => {
  return (
    <div className="mx-[150px] bg-amber-950 flex gap-[90px]">
      {/* Left Side Title */}
      <div className="flex flex-col gap-[40px] text-white px-4 w-full">
        {/* Title */}
        <div className="flex flex-col gap-0.5">
          <h2 className="font-bold text-lg md:text-2xl lg:text-4xl">
            Air Quality In {api.province}
          </h2>
          <p className="text-sm md:text-base lg:text-xl max-w-xl">
            Air quality index (AQI*) and {api.pollution} air pollution in
            {api.province}
          </p>
        </div>
        {/* Search Bar */}
        <SearchBarComponent />
      </div>
      {/* Right Side Card AQI */}
      <CardInformationAQI />
    </div>
  );
};

export default AirQualityPage;
