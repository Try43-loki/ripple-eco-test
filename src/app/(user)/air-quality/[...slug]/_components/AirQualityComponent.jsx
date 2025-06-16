import React from "react";
import TitleAirQualityAndHealthComponent from "./TitleAirQualityAndHealthComponent";
import BlockCardAirQualityListComponent from "./BlockCardAirQualityListComponent";

const AirQualityComponent = ({ dataProvince }) => {
  const title = "Air Quality";
  return (
    <article className="w-full flex flex-col gap-7 bg-white/50 rounded-3xl p-6 border-2 text-light-gray">
      <TitleAirQualityAndHealthComponent title={title} />
      <BlockCardAirQualityListComponent dataProvince={dataProvince} />
    </article>
  );
};

export default AirQualityComponent;
