import React from "react";
import HourlyForecastListComponent from "./HourlyForecastListComponent";
import { getForecastAirPollutionByDistrictId } from "@/service/airQualityService";
import TitleForecastComponent from "./TitleForecastComponent";

const HourlyForecastComponent = async ({ districtId }) => {
  const dataHourly = await getForecastAirPollutionByDistrictId(
    districtId || "Qpmt7iC423kyhanrm",
    "HOURLY"
  );
  const title = "Hourly";
  return (
    <article className="w-full flex flex-col gap-7 bg-white/50 rounded-3xl p-6 border-2 text-light-gray ">
      <TitleForecastComponent title={title} />
      <HourlyForecastListComponent dataHourly={dataHourly} />
    </article>
  );
};
export default HourlyForecastComponent;
