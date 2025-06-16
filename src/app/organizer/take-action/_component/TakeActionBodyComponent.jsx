import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TakeActionCard from "@/components/TakeActionCard";
import { cn } from "@/lib/utils";
import { Clock, MessagesSquare } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import { getCurrentUserProfileService } from "@/service/profileService";
const TakeActionBodyComponent = async ( {cardData , ownCardData} ) => {
  const userData = await getCurrentUserProfileService();
  return (
    <>
      <section className="mt-5">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-row gap-x-2 bg-white h-auto rounded-[14px] p-1.5 border border-lightes-white">
            <TabsTrigger
              value="all"
              className={cn(
                "text-sm cursor-pointer sm:text-sm md:text-base lg:text-lg py-2 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
                "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <Clock className="w-4.5 h-4.5" />
              <p>All Post</p>
            </TabsTrigger>

            <TabsTrigger
              value="own-post"
              className={cn(
                "text-sm cursor-pointer sm:text-sm md:text-base lg:text-lg py-2 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
                "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <MessagesSquare className="w-4.5 h-4.5" />
              <p>Own Post</p>
            </TabsTrigger>
          </TabsList>
          <hr className="mt-5 text-lightes-white " />

          <TabsContent
            value="all"
            className="flex flex-wrap w-294 justify-start gap-8 mt-5"
          >
            
              <TakeActionCard
                isOwner={false}
                cardData={cardData}
                layout={"col"}
                isOrganizer={userData?.data?.organizer}
              />
          </TabsContent>

          {/* Own */}
          <TabsContent
            value="own-post"
            className="w-294 flex flex-wrap gap-8 mt-5"
          >
              <TakeActionCard
              isOwner={true}
              cardData={ownCardData}
              layout={"col"}
              isOrganizer={userData?.data?.organizer}
              />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default TakeActionBodyComponent;
