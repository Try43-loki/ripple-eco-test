import React from "react";
import DailyValueAQIComponent from "./DailyValueAQIComponent";

const Weekly = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
  today: "Today",
};

const DailyForecastComponent = () => {
  return (
    <article className="w-full flex flex-col gap-7 bg-white rounded-3xl p-6 border-2 text-light-gray">
      {/* Title */}
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold">Daily Forecast</h2>
        <p className="text-darker-gray text-lg">
          Phnom Penh Air Quality Index (AQI) Forecast
        </p>
      </div>
      {/* Column Of Week */}
      <div className="flex flex-col gap-3">
        <DailyValueAQIComponent day={Weekly.monday} isActive={true} />
        <DailyValueAQIComponent day={Weekly.tuesday} />
        <DailyValueAQIComponent day={Weekly.wednesday} />
        <DailyValueAQIComponent day={Weekly.thursday} />
        <DailyValueAQIComponent day={Weekly.friday} />
        <DailyValueAQIComponent day={Weekly.saturday} />
        <DailyValueAQIComponent day={Weekly.sunday} />
      </div>
    </article>
  );
};

export default DailyForecastComponent;
