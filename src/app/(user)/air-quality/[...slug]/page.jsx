import React from "react";
import HourlyForecastComponent from "./_components/HourlyForecastComponent";
import DailyForecastComponent from "./_components/DailyForecastComponent";
import AirQualityComponent from "./_components/AirQualityComponent";
import HealthRecommendComponent from "./_components/HealthRecommendComponent";
import HeroSectionAirDisasterComponent from "./_components/HeroSectionAirDisasterComponent";
import {
  getCurrentAirPollutionByDistrictId,
  getForecastAirPollutionByDistrictId,
} from "@/service/airQualityService";
import { checkAqiInformation } from "@/utils/airQuality";

const AirQualityPage = async ({ searchParams: ParamsPromise }) => {
  const { search: districtId } = await ParamsPromise;
  const dataProvinces = await getAllDistricts();
  const dataProvince = await getCurrentAirPollutionByDistrictId(
    districtId ?? "Qpmt7iC423kyhanrm"
  );
  const dataHourly = await getForecastAirPollutionByDistrictId(
    districtId ?? "Qpmt7iC423kyhanrm",
    "HOURLY"
  );
  const dataDaily = await getForecastAirPollutionByDistrictId(
    districtId ?? "Qpmt7iC423kyhanrm",
    "DAILY"
  );

  // For Background Level Color on Current AQI
  const bgColor = checkAqiInformation(dataProvince.data.aqi);

  return (
    <div className="relative flex flex-col gap-7">
      {/* Full-page background */}
      <div
        className="absolute bottom-0 -z-1 left-0 right-0 top-0"
        style={{
          background: `radial-gradient(circle 1500px at 100% 200px, ${bgColor.bgRaw}, transparent)`,
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative flex w-full h-[200px] md:h-[300px] lg:h-[400px] justify-center items-center ">
        <HeroSectionAirDisasterComponent provinceData={dataProvince.data} />
      </section>

      {/* Section 2 HourlyForecast */}
      <section className="flex justify-center px-6  text-white lg:px-[180px]">
        <HourlyForecastComponent districtId={districtId} />
      </section>

      {/* Section 3 Daily Forecast And AirQuality With HealthRecommend */}
      <section className="flex justify-center gap-10 px-6  text-white lg:px-[180px]">
        <DailyForecastComponent dataDaily={dataDaily} />
        <div className="flex flex-col w-full gap-10">
          <AirQualityComponent dataProvince={dataProvince.data} />
          <HealthRecommendComponent
            dataDaily={dataDaily?.data}
            dataProvince={dataProvince?.data}
          />
        </div>
      </section>
    </div>
  );
};

export default AirQualityPage;
