import { checkAqiInformation } from "@/utils/airQuality";
import clsx from "clsx";
import { Cloud, Droplet, Wind } from "lucide-react";
import React from "react";

const BlockCardAirQualityListComponent = ({ dataProvince }) => {
  const currentLevel = checkAqiInformation(dataProvince?.aqi);
  return (
    <React.Fragment>
      {/* Air Pollutants List */}
      <div className="flex justify-between">
        {/* Card */}
        <div className="flex flex-col w-[30%] gap-2  rounded-md px-4 py-5 border-2 text-light-gray">
          <div className="flex w-full gap-1.5 justify-end items-center">
            <Wind color={currentLevel?.label} size={32} />
            <h3 className="text-dark-gray text-lg">Wind Status</h3>
          </div>
          <p className="flex justify-end items-center gap-1.5 text-2xl font-semibold text-dark-gray w-full">
            {dataProvince?.windSpeed} <span className="text-xl">km/h</span>
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col w-[30%] gap-2  rounded-md px-4 py-5 border-2 text-light-gray">
          <div className="flex w-full gap-1.5 justify-end items-center">
            <Droplet
              color={currentLevel?.label}
              fill={currentLevel?.label}
              size={32}
            />
            <h3 className="text-dark-gray text-lg">Humidity</h3>
          </div>
          <p className="flex justify-end items-center gap-1.5 text-2xl font-semibold text-dark-gray w-full">
            {dataProvince?.humidityPercent} <span className="text-2xl">%</span>
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col w-[30%] gap-2 rounded-md px-4 py-5 border-2 text-light-gray">
          <div className="flex w-full gap-1.5 justify-end items-center">
            <Cloud
              color={currentLevel?.label}
              fill={currentLevel?.label}
              size={32}
            />
            <h3 className="text-dark-gray text-lg">Weather</h3>
          </div>
          <p className="flex justify-end items-center gap-1.5 text-2xl font-semibold text-dark-gray w-full">
            {dataProvince?.temperature} <sup>o</sup>
          </p>
        </div>
      </div>
      {/* Air Pollutants Card */}
      <div className="flex flex-col p-4 gap-5 border-2 rounded-xl text-light-gray">
        {/* Card Top */}
        <div className="flex justify-between">
          {/* Left Side */}
          <div className="flex gap-2.5 justify-center items-center">
            <Wind color={currentLevel?.label} size={32} />
            <h3 className="text-dark-gray text-lg">Air Pollutants</h3>
          </div>
          {/* Right Side */}
          <div className="flex flex-col items-end">
            <h2 className={clsx("text-xl font-semibold", currentLevel?.text)}>
              {dataProvince?.level}
            </h2>
            <div className="flex gap-1.5 items-center">
              <span className=" text-dark-gray text-2xl font-semibold">
                {dataProvince?.mainPollution} - {dataProvince?.concentration}
              </span>
              <span className=" text-dark-gray text-xl font-medium">
                µg/m<sup>3</sup>
              </span>
            </div>
          </div>
        </div>
        {/* Last */}
        <div className="text-base text-dark-gray">
          <p className="flex justify-end">
            PM2.5 concentration is currently
            <span className="font-bold px-1">
              {dataProvince.concentrationIndex}
            </span>
            times
          </p>
          <p className="flex justify-end">
            the World Health Organization annual PM2.5 guideline value.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockCardAirQualityListComponent;
