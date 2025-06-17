"use client";
import { checkAqiInformation, checkIcon, Weekdays } from "@/utils/airQuality";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const LineVertical = () => (
  <div className="flex justify-center items-center">
    <hr className="w-full h-px border-1 " />
  </div>
);

const DailyValueAQIComponent = ({ dataDaily }) => {
  const day =
    Weekdays[new Date().getDay - 1] == dataDaily?.day
      ? "Today"
      : dataDaily?.day;
  const icon = checkIcon(dataDaily?.cloudIcon);
  const minTemp = dataDaily?.temperature.min;
  const maxTemp = dataDaily?.temperature.max;
  const currentAQI = dataDaily?.aqi;

  // Background Value AQI
  const currentLevel = checkAqiInformation(dataDaily?.aqi).bgStrong;
  return (
    <React.Fragment>
      <div
        className={clsx(
          "w-full flex justify-between items-center gap-3 px-6 py-4 rounded-xl",
          {
            "first:bg-light-gray px-1": true,
          }
        )}
      >
        <span className="text-lg w-2.5 font-medium text-darker-gray">
          {day}
        </span>
        {/* Icon */}
        <div className="flex gap-5 justify-center items-center">
          <span className="text-lg text-darker-gray font-medium">
            <Image
              src={`/assets/air_quality_images/${icon}.svg`}
              alt="Logo"
              width={36}
              height={36}
            />
          </span>
        </div>
        <span className="text-2xl font-semibold text-darker-gray opacity-50">
          {minTemp}
          <sup>o</sup>
        </span>
        <span className="text-2xl font-semibold text-darker-gray">
          {maxTemp}
          <sup>o</sup>
        </span>
        <div
          className={clsx(
            "rounded-lg w-[60px] h-[30px] leading-[30px]",
            currentLevel
          )}
        >
          <p className="text-center font-medium text-white">{currentAQI}</p>
        </div>
      </div>
      <LineVertical />
    </React.Fragment>
  );
};

export default DailyValueAQIComponent;
