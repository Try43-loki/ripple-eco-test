import React from "react";
import HourlyForecastComponent from "./_components/HourlyForecastComponent";
import DailyForecastComponent from "./_components/DailyForecastComponent";
import AirQualityComponent from "./_components/AirQualityComponent";
import HealthRecommendComponent from "./_components/HealthRecommendComponent";
import HeroSectionAirDisasterComponent from "./_components/HeroSectionAirDisasterComponent";
import {
  getAllDistricts,
  getCurrentAirPollutionByDistrictId,
  getForecastAirPollutionByDistrictId,
} from "@/service/airQualityService";

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

const AirQualityPage = async ({ searchParams: ParamsPromise }) => {
  const { search: districtId } = await ParamsPromise;
  const dataProvinces = await getAllDistricts();
  const dataProvince = await getCurrentAirPollutionByDistrictId(
    districtId || "5bac8def24b967f0b530894c"
  );
  const dataHourly = await getForecastAirPollutionByDistrictId(
    districtId || "5bac8def24b967f0b530894c",
    "HOURLY"
  );
  const dynamicColor = switchColor(dataProvince.data.aqi);

  return (
    <div className="relative flex flex-col gap-7">
      {/* Full-page background */}
      <div
        className="absolute bottom-0 -z-1 left-0 right-0 top-0"
        style={{
          background: `radial-gradient(circle 1500px at 100% 200px, ${dynamicColor.bgRaw}, transparent)`,
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative   flex w-full h-[200px] md:h-[300px] lg:h-[400px] justify-center items-center ">
        <HeroSectionAirDisasterComponent
          provincesList={dataProvinces}
          provinceData={dataProvince.data}
          levelColor={dynamicColor}
        />
      </section>

      {/* Section 2 HourlyForecast */}
      <section className="flex justify-center px-6  text-white lg:px-[180px]">
        <HourlyForecastComponent hourlyData={dataHourly} />
      </section>

      {/* Section 3 Daily Forecast And AirQuality With HealthRecommend */}
      <section className="flex justify-center gap-10 px-6  text-white lg:px-[180px]">
        <DailyForecastComponent />
        <div className="flex flex-col w-full gap-10">
          {/* <AirQualityComponent levelColor={dynamicColor} dataCard={aqiData} />
          <HealthRecommendComponent levelColor={dynamicColor} /> */}
        </div>
      </section>
    </div>
  );
};

export default AirQualityPage;
