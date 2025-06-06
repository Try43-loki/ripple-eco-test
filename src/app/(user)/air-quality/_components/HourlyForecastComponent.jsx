"use client";

import React from "react";
import { forecast } from "../mockData/forecast";
import HourlyValueAQIComponent from "./HourlyValueAQIComponent";

// import DragScroll from "react-indiana-drag-scroll";

const HourlyForecastComponent = () => {
  const data = forecast;
  return (
    <article className="w-full flex flex-col gap-7 bg-white/50 rounded-3xl p-6 border-2 text-light-gray ">
      {/* Title Of Hourly Forecast */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">Hourly Forecast</h2>
        <p className="text-darker-gray text-lg">
          Phnom Penh Air Quality Index (AQI) Forecast
        </p>
      </div>
      {/* Row Of Hourly */}
      <DragScroll
        vertical={false}
        className="flex justify-between gap-3 cursor-grab overflow-x-scroll scrollbar-hide active:cursor-grabbing"
      >
        {data.map((value) => (
          <HourlyValueAQIComponent key={value} data={value} />
        ))}
      </DragScroll>
    </article>
  );
};

export default HourlyForecastComponent;
