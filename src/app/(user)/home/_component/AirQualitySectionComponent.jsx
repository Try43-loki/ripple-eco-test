import CardAirQualityComponent from "@/components/CardAirQualityComponent";
import Link from "next/link";

import React from "react";
import CardInformationAQI from "../../[...air-quality]/_components/CardInformationAQIComponent";

const aqiData = {
  value: 80,
  unit: "PP AQI*",
  level: "Moderate",
  pollutant: "PM2.5",
  pollutantValue: "14.5",
  windSpeed: "5.5",
  temperature: "33",
  humidity: "62",
};

const switchColor = (value) => {
  if (value < 50)
    return {
      title: "Green",
      bg: "bg-air-lighter-green",
      text: "text-air-green",
      label: "#048D4C",
      bgRaw: "#CDE8DB",
    };
  if (value < 100)
    return {
      title: "Yellow",
      bg: "bg-air-lighter-yellow",
      text: "text-air-yellow",
      label: "#f9c300",
      bgRaw: "#FAF0CC",
    };
  if (value < 150)
    return {
      title: "Orange",
      bg: "bg-air-lighter-orange",
      text: "text-air-orange",
      label: "#FF6D10",
      bgRaw: "#FFE2CF",
    };
  if (value >= 150)
    return {
      title: "Red",
      bg: "bg-air-lighter-red",
      text: "text-air-red",
      label: "#FB0530",
      bgRaw: "#FECDD6",
    };
};

const AirQualitySectionComponent = () => {
  const dynamicColor = switchColor(aqiData.value);
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full bg-white py-10 sm:py-12 md:py-20 px-6 md:px-20 lg:px-45">
      {/* Text content */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="max-w-2xl">
          <h3 className="text-dark-green text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Air Quality in Phnom Penh
          </h3>
          <p className="text-light-green text-sm sm:text-base md:text-lg lg:text-xl pt-1 sm:pt-2">
            Air quality index (AQI⁺) and PM2.5 air pollution in Phnom Penh
          </p>
          <Link href="/air-quality">
            <p className="text-[#007AFF] text-xs sm:text-sm md:text-base pt-1 sm:pt-2 cursor-pointer">
              See more
            </p>
          </Link>
        </div>
      </div>

      {/* Card */}
      <div className="w-full lg:w-auto">
        <CardInformationAQI dataCard={aqiData} levelColor={dynamicColor} />
      </div>
    </section>
  );
};

export default AirQualitySectionComponent;
