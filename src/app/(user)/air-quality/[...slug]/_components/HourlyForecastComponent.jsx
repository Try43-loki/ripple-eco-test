"use client";

import React from "react";
import HourlyValueAQIComponent from "./HourlyValueAQIComponent";

import DragScroll from "react-indiana-drag-scroll";
import { usePathname } from "next/navigation";

const HourlyForecastComponent = ({ hourlyData }) => {
  const data = hourlyData?.data?.forecastDetail;

  // For Get Province AQI
  const pathName = usePathname();
  const path = pathName.split("/")[2];

  return (
    <article className="w-full flex flex-col gap-7 bg-white/50 rounded-3xl p-6 border-2 text-light-gray ">
      {/* Title Of Hourly Forecast */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">Hourly Forecast</h2>
        <p className="text-darker-gray text-lg">
          {path || "Phnom Penh"} Air Quality Index (AQI) Forecast
        </p>
      </div>
      {/* Row Of Hourly */}
      <DragScroll
        vertical={false}
        className="flex justify-between gap-3 cursor-grab overflow-x-scroll scrollbar-hide active:cursor-grabbing"
      >
        {data?.map((value, index) => (
          <HourlyValueAQIComponent key={index} data={value} />
        ))}
      </DragScroll>
    </article>
  );
};
export default HourlyForecastComponent;
