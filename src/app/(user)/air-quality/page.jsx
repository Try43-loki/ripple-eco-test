import React from "react";
import CardInformationAQI from "./_components/CardInformationAQIComponent";
import Image from "next/image";
import SearchBarComponent from "@/components/SearchBarComponent";
import HourlyForecastComponent from "./_components/HourlyForecastComponent";
import DailyForecastComponent from "./_components/DailyForecastComponent";
import AirQualityComponent from "./_components/AirQualityComponent";
import HealthRecommendComponent from "./_components/HealthRecommendComponent";

const api = {
  province: "Phnom Penh",
  pollution: "PM2.5",
};

const AirQualityPage = () => {
  return (
    <div className="relative">
      {/* Full-page background */}
      <div className="absolute bottom-0 -z-1 left-0 right-0 top-0 bg-[radial-gradient(circle_1500px_at_100%_200px,#FAF0CC,transparent)]"></div>

      {/* Section 1 */}
      <section className="px-6 py-10 text-white lg:px-[150px] bg-[url('/assets/sub-banner.jpg')] bg-cover bg-center">
        <article className="flex flex-col-reverse gap-10 lg:flex-row lg:gap-[90px]">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Air Quality In {api.province}
              </h2>
              <p className="text-sm lg:text-xl max-w-xl">
                Air quality index (AQI*) and {api.pollution} air pollution in{" "}
                {api.province}
              </p>
            </div>
            <div className="w-2xl">
              <SearchBarComponent />
            </div>
          </div>
          <div className="flex-shrink-0">
            <CardInformationAQI />
          </div>
        </article>
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
