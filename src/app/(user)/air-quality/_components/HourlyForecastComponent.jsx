import React from "react";
import HourlyValueAQIComponent from "./HourlyValueAQIComponent";

const HourlyForecastComponent = () => {
  return (
    <article className="w-full flex flex-col gap-7 bg-white/50 rounded-3xl p-6 shadow-2xl">
      {/* Title Of Hourly Forecast */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">Hourly Forecast</h2>
        <p className="text-darker-gray text-lg">
          Phnom Penh Air Quality Index (AQI) Forecast
        </p>
      </div>
      {/* Row Of Hourly */}
      <div className="flex justify-between gap-3 overflow-x-scroll">
        <HourlyValueAQIComponent isActive={true} />
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
