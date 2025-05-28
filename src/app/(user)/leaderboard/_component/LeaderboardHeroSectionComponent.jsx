import React from "react";
import Image from "next/image";
import ChampionsLeaderboardComponent from "./LeaderboardComponent";
const LeaderboardHeroSectionComponent = () => {
  return (
    <div>
      <section className="relative flex w-full h-[200px] md:h-[300px] lg:h-[400px] justify-start items-center">
        <div className="">
          <Image
            src="/sub-banner.jpg"
            alt="sub-banner"
            fill
            className="object-cover"  
          />
        </div>
        <div className="">
          <ChampionsLeaderboardComponent />
        </div>
      </section>
    </div>
  );
};

export default LeaderboardHeroSectionComponent;
