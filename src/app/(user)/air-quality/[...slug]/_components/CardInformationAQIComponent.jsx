"use client";

import {
  checkAqiInformation,
  checkLevelAQI,
  IconLabel,
} from "@/utils/airQuality";
import { abbreviateLocation } from "@/utils/format";
import { useCurrentPathSegment } from "@/utils/pathUtils";
import clsx from "clsx";
import { Cloud, Droplet, Wind } from "lucide-react";
import React from "react";

const CardInformationAQIComponent = ({ provinceData }) => {
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

  // Check Color Level With AQI
  const { bg, label, text, bgRaw } = checkAqiInformation(aqi);

  // For Get District AQI
  const districtPath = useCurrentPathSegment(2);

  // abbreviate District And PP mean default For Phnom penh
  const abbreviateDistrict =
    (districtPath && abbreviateLocation(districtPath)) || "PP";
  // Check Level AQI
  const levelOfAQI = checkLevelAQI(aqi);

  return (
    <article
      className={clsx("flex h-[150px] w-fit gap-5 py-5 px-7 rounded-3xl ", bg)}
      aria-label="Air Quality Information Card"
    >
      {/* AQI Value */}
      <div className="flex flex-col gap-2 pr-3 items-center ">
        <h2 className={clsx("text-7xl  font-bold", text)}>{aqi}</h2>
        <p className="text-base text-darker-gray ">{abbreviateDistrict} AQI</p>
      </div>

      {/* AQI Details */}
      <div className="flex flex-col  gap-3">
        <h2 className="text-2xl font-semibold text-darker-gray flex justify-start">
          {levelOfAQI}
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
