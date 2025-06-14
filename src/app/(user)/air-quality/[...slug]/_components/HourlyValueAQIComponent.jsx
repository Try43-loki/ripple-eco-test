import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

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
  if (value <= 50) return "bg-air-green";
  if (value <= 100) return "bg-air-yellow";
  if (value <= 150) return "bg-air-orange";
  if (value >= 150) return "bg-air-red";
};
const formatTime = (time) => {
  const original = new Date(time);
  const updatedTime = new Date(original.getTime() + 7 * 60 * 60 * 1000); // Add 7 hours for Cambodia Time zone

  const hours = updatedTime.getHours();
  const minutes = updatedTime.getMinutes().toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}`;
  return timeString;
};

function getCurrentTime(data) {
  const inputDate = new Date(data);
  const now = new Date();
  const isSameHour = inputDate.getHours() === now.getHours() - 7;
  const isSameDay =
    inputDate.getDate() === now.getDate() &&
    inputDate.getMonth() === now.getMonth() &&
    inputDate.getFullYear() === now.getFullYear();
  return isSameHour && isSameDay;
}

const HourlyValueAQIComponent = ({ data }) => {
  return data.forecastGroupByDay.map((value, index) => {
    const formattedTime = formatTime(value?.time);
    const showDayLine = formattedTime === "0:00";

    return (
      <React.Fragment key={index}>
        {showDayLine && (
          <div className="flex flex-col justify-center items-center px-3">
            <span className="text-dark-gray text-sm">{data.day}</span>
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
            {getCurrentTime(value?.time) ? "Now" : formattedTime}
          </span>

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

          <div
            className={clsx(
              "rounded-lg w-[60px] h-[30px] leading-[30px]",
              dynamicColorAqi(value?.aqi)
            )}
          >
            <p className="text-center font-medium text-white">{value?.aqi}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });
};

export default HourlyValueAQIComponent;
