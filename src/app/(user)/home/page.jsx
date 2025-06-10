import React from "react";
import HomeHeroSectionComponent from "./_component/HomeHeroSectionComponent";
import MarqueeComponent from "./_component/MarqueeComponent";
import EcoEventSectionComponent from "./_component/EcoEventSectionComponent";
import DiscussionSectionComponent from "./_component/DiscussionSectionComponent";
import TakeActionSectionComponent from "./_component/TakeActionSectionComponent";
import AirQualitySectionComponent from "./_component/AirQualitySectionComponent";

function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <HomeHeroSectionComponent />

      {/* Scrolling Marquee Section */}
      <MarqueeComponent />

      {/* Air Quality Section */}
      <AirQualitySectionComponent />

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
