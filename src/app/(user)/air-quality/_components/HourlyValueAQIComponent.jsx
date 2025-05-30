import { clsx } from "clsx";
import Image from "next/image";
import React from "react";
import { date } from "zod";

const LineVertical = () => (
  <div className="flex flex-col justify-center text-light-gray items-center">
    <span className="text-dark-gray">Tue</span>
    <hr className="w-px h-36 border-1 " />
  </div>
);

const listOfImageWeather = {
  sun: "Sun",
  rain: "Rain",
  cloud: "Cloud",
  cloudAndSun: "CloudWithSun",
};

const checkIcon = (icon) => {};

const dynamicColorAqi = (value) => {
  if (value < 50) return "text-air-green";
  if (value < 100) return "text-air-yellow";
  if (value < 150) return "text-air-orange";
  if (value >= 150) return "text-air-red";
};
const formatTime = (time) => {
  return time.substring(11, 16);
};

const HourlyValueAQIComponent = ({ data }) => {
  // const hour =
  //   formatTime(data.timestamp) == new Date().getHours() + ":00"
  //     ? "Now"
  //     : formatTime(data.timestamp);
  // const isActive = hour === "Now";
  console.log(data);
  const isSameHour = data.timestamp.getHours() === now.getHours();
  const isSameDay =
    timestampDate.getDate() === now.getDate() &&
    timestampDate.getMonth() === now.getMonth() &&
    timestampDate.getFullYear() === now.getFullYear();

  const hour = isSameHour && isSameDay ? "Now" : formatTime(data.timestamp);

  return (
    <>
      <div
        className={clsx(
          "w-[200px] flex flex-col items-center gap-3 px-6 py-4 rounded-xl",
          {
            "bg-light-gray px-": isActive,
          }
        )}
      >
        <span className="text-lg font-medium text-darker-gray">{hour}</span>
        <Image
          src={`/assets/air_quality_images/${listOfImageWeather.cloudAndSun}.svg`}
          alt="Logo"
          width={36}
          height={36}
        />
        <span className="text-2xl font-semibold text-darker-gray">
          40<sup>o</sup>
        </span>
        {/* Value Of AQI */}
        <div className="bg-strong-green rounded-lg w-[60px] h-[30px] leading-[30px] ">
          <p className="text-center font-medium text-white">12</p>
        </div>
      </div>
      <LineVertical />
    </>
  );
};

export default HourlyValueAQIComponent;
