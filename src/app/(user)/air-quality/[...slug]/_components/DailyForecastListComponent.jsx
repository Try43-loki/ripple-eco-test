import React from "react";
import DailyValueAQIComponent from "./DailyValueAQIComponent";

const DailyForecastListComponent = ({ dataDaily }) => {
  return (
    <div className="flex flex-col gap-3">
      {dataDaily.map((value, index) => (
        <DailyValueAQIComponent key={index} dataDaily={value} />
      ))}
    </div>
  );
};

export default DailyForecastListComponent;
