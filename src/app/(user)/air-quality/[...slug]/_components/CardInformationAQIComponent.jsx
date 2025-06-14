"use client";

import { abbreviateLocation } from "@/utils/format";
import clsx from "clsx";
import { Cloud, Droplet, Wind } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const IconLabel = ({ icon: Icon, label, color }) => {
  return (
    <span className="flex items-center gap-1.5 text-[#636A74] text-lg">
      <Icon color={color} fill={color} />
      <p>{label}</p>
    </span>
  );
};

const CardInformationAQIComponent = ({ provinceData, levelColor }) => {
  const {
    aqi,
    cloudIcon,
    concentration,
    concentrationIndex,
    humidityPercent,
    mainPollution,
    temperature,
    windSpeed,
  } = provinceData;

  const { bg, label, text, bgRaw } = levelColor;

  // For Get Province AQI
  const pathName = usePathname();
  const path = pathName.split("/")[2];

  // const bgGreen = "#CDE8DB";
  // const bgYellow = "#FAF0CC";
  // const bgOrange = "#FFE2CF";
  // const bgRed = "#FECDD6";

  const checkLevel = (value) => {
    if (value <= 50) return "Good";
    if (value <= 100) return "Moderate";
    if (value <= 150) return "Unhealthy for sensitive groups";
    if (value >= 150) return "Unhealthy";
  };

  return (
    <article
      className={clsx("flex h-[150px] w-fit gap-5 py-5 px-7  rounded-3xl ", bg)}
      aria-label="Air Quality Information Card"
    >
      {/* AQI Value */}
      <div className="flex flex-col gap-2 px-3 items-center ">
        <h2 className={clsx("text-7xl  font-bold", text)}>{aqi}</h2>
        <p className="text-base text-darker-gray ">
          {abbreviateLocation(path) || "PP"} AQI
        </p>
      </div>

      {/* AQI Details */}
      <div className="flex flex-col  gap-3">
        <h2 className="text-2xl font-semibold text-darker-gray flex justify-start">
          {checkLevel(aqi)}
        </h2>
        <div className="flex justify-between min-w-sm">
          <p className="text-lg text-darker-gray">
            Main pollutant:
            <span className="text-darker-gray pl-[5px]">{mainPollution} </span>
          </p>
          <p className="text-darker-gray text-lg font-medium flex gap-1.5">
            {concentration}
            <span className="text-lg font-medium">
              µg/m<sup>3</sup>
            </span>
          </p>
        </div>

        {/* Icons Row */}
        <div className="flex justify-between">
          <span className="flex items-center gap-1.5 text-darker-gray text-lg">
            <Wind color={label} />
            <p>{windSpeed} km/h</p>
          </span>
          <IconLabel
            icon={Cloud}
            color={label}
            label={
              <>
                {temperature}
                <sup>o</sup>
              </>
            }
          />
          <IconLabel
            icon={Droplet}
            color={label}
            label={<>{humidityPercent}%</>}
          />
        </div>
      </div>
    </article>
  );
};

export default CardInformationAQIComponent;
