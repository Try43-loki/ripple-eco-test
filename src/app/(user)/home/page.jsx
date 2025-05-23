import React from "react";
import HomeHeroSectionComponent from './_component/HomeHeroSectionComponent';
import CardAirQualityComponent from '@/components/CardAirQualityComponent';
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import MarqueeComponent from "./_component/MarqueeComponent";

function HomePage() {

  return (
    <main className="w-full h-[2000px] bg-black">
      {/* Hero Section */}
      <HomeHeroSectionComponent />

      {/* Scrolling Section */}
      <MarqueeComponent />

      {/* Air Quality Section */}
      <section className="w-full py-38 bg-white relative">
        <div className="absolute left-49 top-27">
          <h3 className="text-title text-3xl font-bold ">
            Air Quality in Phnom Penh
          </h3>
          <p className="text-description text-xl pt-2">
            Air quality index (AQI⁺) and PM2.5 air pollution in Phnom Penh{" "}
          </p>
          <p className="text-xl text-[#007AFF] pt-2">See more</p>
        </div>
        <CardAirQualityComponent/>
      </section>

      {/* Eco Event Section */}
      <section className="w-full bg-[#F6F6EE] py-20 px-49">
        <p className="items-center justify-center flex text-xl text-[#3BAA2C] pb-2">
          ECO EVENT
        </p>
        <h2 className="text-title text-3xl/10 font-bold text-center">
          Join Our EcoEvent{" "}
          <span className="block">
            Share, Connect, and Act for a Greener Future
          </span>
        </h2>
        <CardEcoEventComponent/>
      </section>
    </main>
  );
}

export default HomePage;
