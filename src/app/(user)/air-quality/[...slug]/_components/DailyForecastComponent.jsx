import React from "react";
import TitleForecastComponent from "./TitleForecastComponent";
import DailyForecastListComponent from "./DailyForecastListComponent";

const DailyForecastComponent = async ({ dataDaily }) => {
  const dataDailyList = dataDaily.data.forecastDetail;
  const title = "Daily";
  return (
    <article className="w-full flex flex-col gap-7 bg-white rounded-3xl p-6 border-2 text-light-gray">
      <TitleForecastComponent title={title} />
      <DailyForecastListComponent dataDaily={dataDailyList} />
    </article>
  );
};

export default DailyForecastComponent;
