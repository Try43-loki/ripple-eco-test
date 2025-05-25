import React from "react";
import HourlyValueAQIComponent from "./HourlyValueAQIComponent";

const LineVertical = () => (
  <div className="flex justify-center items-center">
    <hr class="w-px h-24 border-1 " />
  </div>
);

const HourlyForecastComponent = () => {
  return (
    <article className="w-full flex flex-col gap-7 bg-white rounded-3xl p-6 shadow-2xl">
      {/* Title Of Hourly Forecast */}
      <div className="flex flex-col">
        <h2 className="text-black">Hourly Forecast</h2>
        <p className="text-black">
          Phnom Penh Air Quality Index (AQI) Forecast
        </p>
      </div>
      {/* Row Of Hourly */}
      <div className="flex justify-between gap-5 overflow-x-scroll scrollbar-none text-black">
        <HourlyValueAQIComponent />
        <LineVertical />
        <HourlyValueAQIComponent />
        <LineVertical />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
        <HourlyValueAQIComponent />
      </div>
    </article>
  );
};

export default HourlyForecastComponent;
