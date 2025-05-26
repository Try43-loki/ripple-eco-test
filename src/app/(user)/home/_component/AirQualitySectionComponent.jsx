import CardAirQualityComponent from "@/components/CardAirQualityComponent";
import React from "react";

const AirQualitySectionComponent = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center   justify-between w-full bg-white py-10 sm:py-12 md:py-20 px-6 md:px-20 lg:px-45">
      {/* Text content */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">  
        <div className="max-w-2xl">
          <h3 className="text-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Air Quality in Phnom Penh
          </h3>
          <p className="text-description text-sm sm:text-base md:text-lg lg:text-xl pt-1 sm:pt-2">
            Air quality index (AQI⁺) and PM2.5 air pollution in Phnom Penh
          </p>
          <p className="text-[#007AFF] text-xs sm:text-sm md:text-base pt-1 sm:pt-2 cursor-pointer">
            See more
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="w-full lg:w-auto">
        <CardAirQualityComponent />
      </div>
    </section>
  );
};

export default AirQualitySectionComponent;
