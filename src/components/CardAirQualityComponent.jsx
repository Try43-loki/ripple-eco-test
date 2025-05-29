import React from "react";
import Image from "next/image";

const CardAirQualityComponent = () => {
  return (
    <div className="bg-[#FFF6D4] w-fit max-w-full md:w-[500px] lg:w-[520px] rounded-3xl p-5 sm:p-6 lg:p-8 shadow-md">
      <div className="flex flex-col md:flex-row lg:flex-row gap-6">
        {/* AQI Number */}
        <div className=" w-1/2 md:w-1/5 lg:w-1/5 flex flex-row md:flex-col lg:flex-col lg:gap-2 items-start text-left">
          <h2 className="text-strong-yellow text-5xl sm:text-6xl lg:text-7xl font-bold">
            73
          </h2>
          <p className="text-dark-green text-sm sm:text-lg lg:text-xl">
            US AQI⁺
          </p>
        </div>

        {/* AQI Details */}
        <div className="">
          <h4 className="text-dark-green text-lg sm:text-xl lg:text-2xl font-bold text-left">
            Moderate
          </h4>

          {/* Pollutant Info */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-2 md:gap-6 lg:gap-12 pt-2 text-left">
            <p className="text-light-green text-sm sm:text-base lg:text-lg font-light">
              Main pollutant:{" "}
              <span className="text-dark-green font-medium">PM2.5</span>
            </p>
            <p className="text-dark-green font-medium text-sm sm:text-base lg:text-lg">
              14.5 µg/m³
            </p>
          </div>

          {/* Weather Info */}
          <div className="flex justify-start lg:justify-between flex-col md:flex-row lg:flex-row gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/air.png"
                alt="air"
                width={20}
                height={20}
                className="w-4 h-4 lg:w-5 lg:h-5"
              ></Image>
              <p className="text-light-green text-sm sm:text-base lg:text-lg">
                5.5 km/h
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/assets/cloud.png"
                alt="cloud"
                width={10}
                height={10}
                className="w-4 h-4 lg:w-5 lg:h-5"
              ></Image>
              <p className="text-light-green text-sm sm:text-base lg:text-lg">
                33°
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/assets/weather.png"
                alt="weather"
                width={20}
                height={20}
                className="w-4 h-4 lg:w-5 lg:h-5"
              ></Image>
              <p className="text-light-green text-sm sm:text-base lg:text-lg">
                62%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAirQualityComponent;
