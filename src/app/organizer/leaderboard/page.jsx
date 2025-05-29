import ChampionsLeaderboardComponent from "@/app/(user)/leaderboard/_component/LeaderboardComponent";
import TopRankingComponent from "@/app/(user)/leaderboard/_component/TopRankingComponent";
import React from "react";

function LeaderboardPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mt-10 border border-black/4 shadow-xl rounded-3xl">
        <ChampionsLeaderboardComponent />
      </div>

      {/* Top Ranking Section */}
      <div className="pt-10">
        <TopRankingComponent />
      </div>
    </div>
  );
}

export default LeaderboardPage;
