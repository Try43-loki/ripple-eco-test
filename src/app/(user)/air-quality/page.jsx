import React, { useMemo } from "react";
import HourlyForecastComponent from "./_components/HourlyForecastComponent";
import DailyForecastComponent from "./_components/DailyForecastComponent";
import AirQualityComponent from "./_components/AirQualityComponent";
import HealthRecommendComponent from "./_components/HealthRecommendComponent";
import HeroSectionAirDisasterComponent from "./_components/HeroSectionAirDisasterComponent";
import clsx from "clsx";

const bgGreen = "#CDE8DB";
const bgYellow = "#FAF0CC";
const bgOrange = "#FFE2CF";
const bgRed = "#FECDD6";

const aqiData = {
  value: 10,
  unit: "US AQI*",
  level: "Moderate",
  pollutant: "PM2.5",
  pollutantValue: "14.5 ug/m3",
  windSpeed: "5.5 Km/h",
  temperature: "33",
  humidity: "62%",
};

const api = {
  province: "Phnom Penh",
  pollution: "PM2.5",
};

const switchColor = (value) => {
  if (value < 50)
    return {
      bg: "bg-lighter-green",
      text: "text-green",
      label: "#048D4C",
      bgRaw: "#CDE8DB",
    };
  if (value < 100)
    return {
      bg: "bg-lighter-yellow",
      text: "text-yellow",
      label: "#f9c300",
      bgRaw: "#FAF0CC",
    };
  if (value < 150)
    return {
      bg: "bg-lighter-orange",
      text: "text-orange",
      label: "#FF6D10",
      bgRaw: "#FFE2CF",
    };
  if (value >= 150)
    return {
      bg: "bg-lighter-red",
      text: "text-red",
      label: "#FB0530",
      bgRaw: "#FECDD6",
    };
};

const AirQualityPage = () => {
  const finalColor = switchColor(aqiData.value);
  return (
    <div className="relative">
      {/* Full-page background */}
      <div
        className={clsx(
          "absolute bottom-0 -z-1 left-0 right-0 top-0",
          `bg-[radial-gradient(circle_1500px_at_100%_200px,#CDE8DB,transparent)]`
        )}
      ></div>

      {/* Hero Section */}
      <section className="relative flex w-full h-[200px] md:h-[300px] lg:h-[400px] justify-center items-center">
        <HeroSectionAirDisasterComponent
          dataSearch={api}
          dataCard={aqiData}
          levelColor={finalColor}
        />
      </section>

      {/* Section 2 */}
      <section className="flex justify-center px-6 py-10 text-white lg:px-[150px]">
        <HourlyForecastComponent />
      </section>

      {/* Section 3 */}
      <section className="flex justify-center gap-10 px-6 py-10 text-white lg:px-[150px]">
        <DailyForecastComponent />
        <div className="flex flex-col w-full gap-10">
          <AirQualityComponent />
          <HealthRecommendComponent />
        </div>
      </section>
    </div>
  );
};

export default AirQualityPage;
