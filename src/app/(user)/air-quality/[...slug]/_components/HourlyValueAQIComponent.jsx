import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

const LineVertical = ({ day }) => (
  <div className="flex flex-col justify-center text-light-gray items-center">
    {day && <span className="text-dark-gray">{day}</span>}
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
  const original = new Date(time);
  // Add 7 hours (in milliseconds)
  const updatedTime = new Date(original.getTime() + 7 * 60 * 60 * 1000);
  // Get hours and minutes
  const hours = updatedTime.getHours();
  const minutes = updatedTime.getMinutes().toString().padStart(2, "0");

  // Final time string
  const timeString = `${hours}:${minutes}`;
  return timeString;
};

function getCurrentTime(data) {
  // Check Current Time with Data Time

  const currentTime = new Date(data.timestamp).getHours() + 7;
  const isSameHour = currentTime === new Date().getHours();
  const isSameDay =
    new Date(data.timestamp).getDate() === new Date().getDate() &&
    new Date(data.timestamp).getMonth() === new Date().getMonth() &&
    new Date(data.timestamp).getFullYear() === new Date().getFullYear();
  const hour = isSameHour && isSameDay ? "Now" : formatTime(data.timestamp);
  return hour;
}

const HourlyValueAQIComponent = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.forecastGroupByDay.map((value) => (
        <div
          className={clsx(
            "w-[200px] **: flex flex-col items-center gap-3 px-6 py-4 rounded-xl",
            {
              "bg-light-gray px-": getCurrentTime(value?.time) === "Now",
            }
          )}
        >
          <span className="text-lg font-medium text-darker-gray">
            {formatTime(value?.time)}
          </span>
          {/* Image Icon */}
          <Image
            src={`/assets/air_quality_images/${checkIcon(
              value?.cloudIcon
            )}.svg`}
            alt="Logo"
            width={36}
            height={36}
          />
          <span className="text-2xl font-semibold text-darker-gray">
            {value?.temperature?.current}
            <sup>o</sup>
          </span>
          {/* Value Of AQI */}
          <div
            className={clsx(
              " rounded-lg w-[60px] h-[30px] leading-[30px] ",
              dynamicColorAqi(value?.aqi)
            )}
          >
            <p className="text-center font-medium text-white">{value?.aqi}</p>
          </div>
        </div>
      ))}
      <LineVertical day={data.day} />
    </>
  );
};

export default HourlyValueAQIComponent;
