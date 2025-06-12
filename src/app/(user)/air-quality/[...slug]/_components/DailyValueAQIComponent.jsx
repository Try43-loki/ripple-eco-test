"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const LineVertical = () => (
  <div className="flex justify-center items-center">
    <hr className="w-full h-px border-1 " />
  </div>
);

const Weekly = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Today",
];

const dynamicColorAqi = (value) => {
  if (value < 50) return "bg-air-green";
  if (value < 100) return "bg-air-yellow";
  if (value < 150) return "bg-air-orange";
  if (value >= 150) return "bg-air-red";
};

const listOfImageWeather = {
  sun: "Sun",
  rain: "Rain",
  cloud: "Cloud",
  cloudAndSun: "CloudWithSun",
  nightRain: "Night-Rain",
};

const checkIcon = (icon) => {
  if (icon === "scattered-clouds") return listOfImageWeather.cloud;
  if (icon === "rain") return listOfImageWeather.rain;
  if (icon === "night-rain") return listOfImageWeather.nightRain;
};

const DailyValueAQIComponent = ({ day, dataDaily }) => {
  const currentDay = new Date().getDay() - 1;
  console.log(dataDaily);

  return (
    <>
      <div
        className={clsx(
          "w-full flex justify-between items-center gap-3 px-6 py-4 rounded-xl",
          {
            "bg-light-gray px-": day === currentDay,
          }
        )}
      >
        <span className="text-lg w-2.5 font-medium text-darker-gray">
          {Weekly[day]}
        </span>
        <div className="flex gap-5 justify-center items-center">
          <span className="text-lg text-darker-gray font-medium">
            <Image
              src={`/assets/air_quality_images/${checkIcon(
                dataDaily?.cloudIcon
              )}.svg`}
              alt="Logo"
              width={36}
              height={36}
            />
          </span>
        </div>
        <span className="text-2xl font-semibold text-darker-gray">
          {Math.min(dataDaily.temperature.min)}
          <sup>o</sup>
        </span>
        {/* Value Of AQI */}
        <div
          className={clsx(
            "rounded-lg w-[60px] h-[30px] leading-[30px]",
            dynamicColorAqi(dataDaily.aqi)
          )}
        >
          <p className="text-center font-medium text-white">{dataDaily.aqi}</p>
        </div>
      </div>
      {day == "Sunday" || <LineVertical />}
    </>
  );
};

export default DailyValueAQIComponent;
