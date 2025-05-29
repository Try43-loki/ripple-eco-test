import React from "react";
import LeaderboardHeroSectionComponent from "./_component/LeaderboardHeroSectionComponent";
import ChampionsLeaderboardComponent from "./_component/LeaderboardComponent";
import TopRankingComponent from "./_component/TopRankingComponent";

const LeaderboardPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <LeaderboardHeroSectionComponent />

      {/* Top Ranking Section */}
      <div className="px-6 md:px-20 lg:px-45 pt-45 md:pt-25 lg:pt-35">
        <TopRankingComponent />
      </div>
    </div>
  );
};

export default LeaderboardPage;
