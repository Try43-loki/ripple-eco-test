import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

const LineVertical = () => (
  <div className="flex flex-col justify-center text-light-gray items-center">
    {/* <span className="text-dark-gray">Tue</span> */}
    <hr className="w-px h-36 border-1 " />
  </div>
);

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

const dynamicColorAqi = (value) => {
  if (value < 50) return "bg-air-green";
  if (value < 100) return "bg-air-yellow";
  if (value < 150) return "bg-air-orange";
  if (value >= 150) return "bg-air-red";
};
const formatTime = (time) => {
  // Return Hour Only
  return time.substring(11, 16);
};

function getCurrentTime(data) {
  // Check Current Time with Data Time
  const isSameHour =
    new Date(data.timestamp).getHours() === new Date().getHours();
  const isSameDay =
    new Date(data.timestamp).getDate() === new Date().getDate() &&
    new Date(data.timestamp).getMonth() === new Date().getMonth() &&
    new Date(data.timestamp).getFullYear() === new Date().getFullYear();
  const hour = isSameHour && isSameDay ? "Now" : formatTime(data.timestamp);
  return hour;
}

const HourlyValueAQIComponent = ({ data }) => {
  const isActive = getCurrentTime(data) === "Now";
  const hour = formatTime(data?.timestamp);
  // console.log(data);

  return (
    <>
      <div
        className={clsx(
          "w-[200px] **: flex flex-col items-center gap-3 px-6 py-4 rounded-xl",
          {
            "bg-light-gray px-": isActive,
          }
        )}
      >
        <span className="text-lg font-medium text-darker-gray">{hour}</span>
        {/* Image Icon */}
        <Image
          src={`/assets/air_quality_images/${checkIcon(data?.cloudIcon)}.svg`}
          alt="Logo"
          width={36}
          height={36}
        />
        <span className="text-2xl font-semibold text-darker-gray">
          {data.temperature.current}
          <sup>o</sup>
        </span>
        {/* Value Of AQI */}
        <div
          className={clsx(
            " rounded-lg w-[60px] h-[30px] leading-[30px] ",
            dynamicColorAqi(data?.aqi)
          )}
        >
          <p className="text-center font-medium text-white">{data?.aqi}</p>
        </div>
      </div>
      <LineVertical />
    </>
  );
};

export default HourlyValueAQIComponent;
