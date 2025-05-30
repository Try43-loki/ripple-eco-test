import React from "react";
import HeroSectionAirQualityDashboardComponent from "./_component/HeroSectionAirQualityDashboardComponent";
import HourlyForecastComponent from "@/app/(user)/air-quality/_components/HourlyForecastComponent";
import DailyForecastComponent from "@/app/(user)/air-quality/_components/DailyForecastComponent";
import AirQualityComponent from "@/app/(user)/air-quality/_components/AirQualityComponent";
import HealthRecommendComponent from "@/app/(user)/air-quality/_components/HealthRecommendComponent";

const aqiData = {
  value: 89,
  unit: "PP AQI*",
  level: "Moderate",
  pollutant: "PM2.5",
  pollutantValue: "14.5",
  windSpeed: "5.5",
  temperature: "33",
  humidity: "62",
};

const api = {
  province: "Phnom Penh",
  pollution: "PM2.5",
};

const switchColor = (value) => {
  if (value < 50)
    return {
      title: "Green",
      bg: "bg-air-lighter-green",
      text: "text-air-green",
      label: "#048D4C",
      bgRaw: "#CDE8DB",
    };
  if (value < 100)
    return {
      title: "Yellow",
      bg: "bg-air-lighter-yellow",
      text: "text-air-yellow",
      label: "#f9c300",
      bgRaw: "#FAF0CC",
    };
  if (value < 150)
    return {
      title: "Orange",
      bg: "bg-air-lighter-orange",
      text: "text-air-orange",
      label: "#FF6D10",
      bgRaw: "#FFE2CF",
    };
  if (value >= 150)
    return {
      title: "Red",
      bg: "bg-air-lighter-red",
      text: "text-air-red",
      label: "#FB0530",
      bgRaw: "#FECDD6",
    };
};

function AirQualityDashboardPage() {
  const dynamicColor = switchColor(aqiData.value);
  return (
    <section className="flex flex-col gap-9 bg-air-green">
      {/* Hero Section */}
      <section className="w-full">
        <HeroSectionAirQualityDashboardComponent
          dataSearch={api}
          dataCard={aqiData}
          levelColor={dynamicColor}
        />
      </section>

      {/* Section 2 */}
      <section className="w-full">
        <HourlyForecastComponent />
      </section>

      {/* Section 3 */}
      <section className="flex justify-center gap-10 text-white">
        <DailyForecastComponent />
        <div className="flex flex-col w-full gap-10">
          <AirQualityComponent levelColor={dynamicColor} dataCard={aqiData} />
          <HealthRecommendComponent levelColor={dynamicColor} />
        </div>
      </section>
    </section>
  );
}

export default AirQualityDashboardPage;

//  return (
//     <section className="flex flex-col gap-9">
//       <section className="w-full">
//         <HeroSectionAirQualityDashboardComponent
//           dataSearch={api}
//           dataCard={aqiData}
//           levelColor={finalColor}
//         />
//       </section>

//       {/* Section 2 */}
//       <section className="w-[1396px] ">
//         <HourlyForecastComponent />
//       </section>

//       {/* Section 3 */}
//       <section className="flex justify-center gap-10 px-6 py-10 text-white ">
//         <DailyForecastComponent />
//         <div className="flex flex-col w-full gap-10">
//           <AirQualityComponent />
//           <HealthRecommendComponent />
//         </div>
//       </section>
//     </section>
//   );
