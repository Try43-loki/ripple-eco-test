"use client";
import { splitCamelCase } from "@/utils/format";
import { useCurrentPathSegment } from "@/utils/pathUtils";
import React from "react";

const TitleForecastComponent = ({ title }) => {
  const provincePath = useCurrentPathSegment(2);
  const splitCamelCastDistrictPath =
    splitCamelCase(provincePath) || "Phnom Penh";
  return (
    <div className="flex flex-col">
      <h2 className="text-black text-xl font-semibold">{title} Forecast</h2>
      <p className="text-darker-gray text-lg">
        {splitCamelCastDistrictPath} Air Quality Index (AQI) Forecast
      </p>
    </div>
  );
};

export default TitleForecastComponent;
