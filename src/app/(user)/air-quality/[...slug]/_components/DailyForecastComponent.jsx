"use client";
import React from "react";
import DailyValueAQIComponent from "./DailyValueAQIComponent";
import { usePathname } from "next/navigation";
import { splitCamelCase } from "@/utils/format";

const DailyForecastComponent = ({ dataDaily }) => {
  // For Get Province AQI
  const pathName = usePathname();
  const path = pathName.split("/")[2];
  return (
    <article className="w-full flex flex-col gap-7 bg-white rounded-3xl p-6 border-2 text-light-gray">
      {/* Title */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">Daily Forecast</h2>
        <p className="text-darker-gray text-lg">
          {splitCamelCase(path)} Air Quality Index (AQI) Forecast
        </p>
      </div>
      {/* Column Of Week */}
      <div className="flex flex-col gap-3">
        {dataDaily.map((value, index) => (
          <DailyValueAQIComponent key={index} dataDaily={value} />
        ))}
      </div>
    </article>
  );
};

export default DailyForecastComponent;
