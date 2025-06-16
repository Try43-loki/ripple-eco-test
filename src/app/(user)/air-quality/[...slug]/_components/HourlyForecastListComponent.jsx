"use client";

import React from "react";
import HourlyValueAQIComponent from "./HourlyValueAQIComponent";
import DragScroll from "react-indiana-drag-scroll";

const HourlyForecastListComponent = ({ dataHourly }) => {
  const dataHourlyList = dataHourly.data.forecastDetail;

  return (
    <DragScroll
      vertical={false}
      className="flex justify-between gap-3 cursor-grab overflow-x-scroll scrollbar-hide active:cursor-grabbing"
    >
      {dataHourlyList.map((value, index) => (
        <HourlyValueAQIComponent key={index} perHourly={value} />
      ))}
    </DragScroll>
  );
};

export default HourlyForecastListComponent;
