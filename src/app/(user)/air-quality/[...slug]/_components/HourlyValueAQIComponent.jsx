import {
  checkAqiInformation,
  checkIcon,
  formatTime,
  getCurrentTime,
} from "@/utils/airQuality";
import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

const HourlyValueAQIComponent = ({ perHourly }) => {
  return perHourly.forecastGroupByDay.map((value, index) => {
    const formattedTime = formatTime(value?.time);

    // Value Per Hour
    const currentHour = getCurrentTime(value?.time);
    const currentTemp = value?.temperature?.current;
    const currentAQI = value?.aqi;
    const icon = checkIcon(value?.cloudIcon);

    // Display Line Day
    const day = perHourly.day;
    const showDayLine = formattedTime === "0:00";

    // Background Value AQI
    const currentLevel = checkAqiInformation(value?.aqi).bgStrong;

    return (
      <React.Fragment key={index}>
        {showDayLine && (
          <div className="flex flex-col justify-center items-center px-3">
            <span className="text-dark-gray text-sm">{day}</span>
            <div className="w-px h-32 bg-gray-300 my-1" />
          </div>
        )}

        <div
          className={clsx(
            "w-[200px] flex flex-col items-center gap-3 px-6 py-4 rounded-xl",
            {
              "first:bg-light-gray px-1": index === 0,
            }
          )}
        >
          <span className="text-lg font-medium text-darker-gray">
            {currentHour ? "Now" : formattedTime}
          </span>

          <Image
            src={`/assets/air_quality_images/${icon}.svg`}
            alt="Logo"
            width={36}
            height={36}
          />
          <span className="text-2xl font-semibold text-darker-gray">
            {currentTemp}
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
      </React.Fragment>
    );
  });
};

export default HourlyValueAQIComponent;
