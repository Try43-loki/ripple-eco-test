import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TopRankingComponent from "@/app/(user)/leaderboard/_component/TopRankingComponent";
import { TopRankingOrgComponent } from "@/app/organizer/leaderboard/_component/TopRankingOrgComponent";
import { TapListLeaderboardComponent } from "./TapListLeaderBoardComponent";


export const TapLeaderboardComponent = async({searchQuery}) => {
  return (
    
    <Tabs defaultValue="user" className="w-full">
      {/* Tab Buttons */}
      <TapListLeaderboardComponent/>

      {/* Tab Contents */}
      <TabsContent value="user">
        <div className="space-y-2 mt-10">
          <TopRankingComponent searchQuery={searchQuery}/>
        </div>
      </TabsContent>

      <TabsContent value="organizer">
        <div className="space-y-2 mt-10">
          <TopRankingOrgComponent searchQuery={searchQuery}/>
        </div>
      </TabsContent>
    </Tabs>
   
  );
};
