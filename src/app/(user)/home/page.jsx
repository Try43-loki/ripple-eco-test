import React from "react";
import HomeHeroSectionComponent from "./_component/HomeHeroSectionComponent";
import MarqueeComponent from "./_component/MarqueeComponent";
import AirQualitySectionComponent from "./_component/AirQualitySectionComponent";
import EcoEventSectionComponent from "./_component/EcoEventSectionComponent";
import DiscussionSectionComponent from "./_component/DiscussionSectionComponent";
import TakeActionSectionComponent from "./_component/TakeActionSectionComponent";
import FooterComponent from "@/components/FooterComponent";
import CardInformationAQI from "../[...air-quality]/_components/CardInformationAQIComponent";
import AirQualityComponent from "../[...air-quality]/_components/AirQualityComponent";
import { getCurrentAirPollutionByDistrictId } from "@/service/airQualityService";

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

async function HomePage() {
  const dataProvince = await getCurrentAirPollutionByDistrictId(
    districtId || "5bac8def24b967f0b530894c"
  );
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <HomeHeroSectionComponent />

      {/* Scrolling Marquee Section */}
      <MarqueeComponent />

      {/* Air Quality Section */}
      <CardInformationAQI
        provinceData={dataProvince}
        levelColor={switchColor}
      />

      {/* Eco Event Section */}
      <EcoEventSectionComponent />

      {/* Discussion Section */}
      <DiscussionSectionComponent />

      {/* Take action Section */}
      <TakeActionSectionComponent />
    </main>
  );
}

export default HomePage;
