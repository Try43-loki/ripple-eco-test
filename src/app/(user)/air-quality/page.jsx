import React from "react";
import CardInformationAQI from "./_components/CardInformationAQIComponent";
import Image from "next/image";
import SearchBarComponent from "@/components/SearchBarComponent";
import HourlyForecastComponent from "./_components/HourlyForecastComponent";

const api = {
  province: "Phnom Penh",
  pollution: "PM2.5",
};

const AirQualityPage = () => {
  return (
    <>
      {/* Section 1*/}
      <section className="px-6 py-10 bg-gray-500 text-white lg:px-[150px] bg-[url('/assets/sub-banner.jpg')] bg-cover bg-center">
        <article className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-[90px]">
          {/* Left Side Title & Search */}
          <div className="flex flex-col gap-8 w-full">
            {/* Title */}
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Air Quality In {api.province}
              </h2>
              <p className="text-sm lg:text-xl max-w-xl">
                Air quality index (AQI*) and {api.pollution} air pollution in
                {api.province}
              </p>
            </div>
            {/* Search Bar */}
            <div className="w-2xl">
              <SearchBarComponent />
            </div>
          </div>

          {/* Right Side AQI Card */}
          <div className="flex-shrink-0">
            <CardInformationAQI />
          </div>
        </article>
      </section>

      {/* Section 2*/}
      <section className="flex justify-center px-6 py-10 bg-gray-500 text-white lg:px-[150px]">
        <HourlyForecastComponent />
      </section>
    </>
  );
};

export default AirQualityPage;
