import ChampionsLeaderboardComponent from "@/app/(user)/leaderboard/_component/LeaderboardComponent";
// import TopRankingOrgComponent
import React from "react";
import { TopRankingOrgComponent } from "./_component/TopRankingOrgComponent";

function LeaderboardPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mt-10 border border-black/4 shadow-xl rounded-3xl">
        <ChampionsLeaderboardComponent />
      </div>

      {/* Top Ranking Section */}
      <div className="pt-10">
        <TopRankingOrgComponent />
      </div>
    </div>
  );
}

export default LeaderboardPage;
