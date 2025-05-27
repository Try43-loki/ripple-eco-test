import React from "react";
import CardInformationAQI from "./_components/CardInformationAQIComponent";
import Image from "next/image";
import SearchBarComponent from "@/components/SearchBarComponent";
import HourlyForecastComponent from "./_components/HourlyForecastComponent";
import DailyForecastComponent from "./_components/DailyForecastComponent";
import AirQualityComponent from "./_components/AirQualityComponent";
import HealthRecommendComponent from "./_components/HealthRecommendComponent";
import { ChevronDown } from "lucide-react";
import HeroSectionAirDisasterComponent from "./_components/HeroSectionAirDisasterComponent";

const AirQualityPage = () => {
  return (
    <div className="relative">
      {/* Full-page background */}
      <div className="absolute bottom-0 -z-1 left-0 right-0 top-0 bg-[radial-gradient(circle_1500px_at_100%_200px,#FAF0CC,transparent)]"></div>

      {/* Hero Section */}
      <section className="relative flex w-full h-[200px] md:h-[300px] lg:h-[400px] justify-center items-center">
        <HeroSectionAirDisasterComponent />
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
