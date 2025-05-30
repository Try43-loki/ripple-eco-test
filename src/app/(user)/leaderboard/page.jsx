import React from "react";
import LeaderboardHeroSectionComponent from "./_component/LeaderboardHeroSectionComponent";
import { TapLeaderboardComponent } from "@/components/TapLeaderboardComponent";

const LeaderboardPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <LeaderboardHeroSectionComponent />

      {/* Top Ranking Section */}
      <div className="px-6 md:px-20 lg:px-45 pt-45 md:pt-25 lg:pt-35 pb-15 -mt-64">
        <TapLeaderboardComponent />
      </div>
    </div>
  );
};

export default LeaderboardPage;
