import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Sparkles, UsersRound, MessagesSquare } from "lucide-react";
import AgendaComponent from "@/app/(user)/eco-event/[eventid]/_component/AgendaComponent";
import ReviewComponent from "@/app/(user)/eco-event/[eventid]/_component/ReviewComponent";
import VolunteerComponent from "@/app/(user)/eco-event/[eventid]/_component/VolunteerComponent";

const TabEcoeventComponent = () => {
  return (
    <Tabs defaultValue="agenda" className="w-full">
      {/* Tab Buttons */}
      <TabsList className="flex flex-wrap gap-2 mb-4 mt-5">
        <TabsTrigger
          value="agenda"
          className={cn(
            "flex items-center px-3 py-1.5 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
            "data-[state=active]:bg-green data-[state=active]:text-white"
          )}
        >
          <Sparkles className="w-4 h-4" />
          Agenda
        </TabsTrigger>
        <TabsTrigger
          value="volunteer"
          className={cn(
            "flex items-center px-3 py-1.5 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
            "data-[state=active]:bg-green data-[state=active]:text-white"
          )}
        >
          <UsersRound className="w-4 h-4" />
          Volunteer
        </TabsTrigger>
        <TabsTrigger
          value="review"
          className={cn(
            "flex items-center px-3 py-1.5 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
            "data-[state=active]:bg-green data-[state=active]:text-white"
          )}
        >
          <MessagesSquare className="w-4 h-4" />
          Review
        </TabsTrigger>
      </TabsList>

      {/* Tab Contents */}
      <TabsContent value="agenda">
        <div className="space-y-2">
          <AgendaComponent />
        </div>
      </TabsContent>

      <TabsContent value="volunteer">
        <div className="space-y-2">
          <VolunteerComponent />
        </div>
      </TabsContent>

      <TabsContent value="review">
        <div className="space-y-2">
          <ReviewComponent />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabEcoeventComponent;
