import React from "react";
import Image from "next/image";
import ChampionsLeaderboardComponent from "./LeaderboardComponent";

const LeaderboardHeroSectionComponent = () => {
  return (
    <section className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 ">
      {/* Background banner */}
      <div className="absolute inset-0">
        <Image
          src="/assets/sub-banner.jpg"
          alt="sub-banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay leaderboard */}
      <div className="relative z-10 w-full pt-45 md:pt-25 lg:pt-55 px-6 md:px-20 lg:px-45">
        {/* <ChampionsLeaderboardComponent /> */}
      </div>
    </section>
  );
};

export default LeaderboardHeroSectionComponent;
