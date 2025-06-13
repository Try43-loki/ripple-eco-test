import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Sparkles, UsersRound, MessagesSquare } from "lucide-react";
import AgendaComponent from "@/app/(user)/eco-event/[eventid]/_component/AgendaComponent";
import ReviewComponent from "@/app/(user)/eco-event/[eventid]/_component/ReviewComponent";
import VolunteerComponent from "@/app/(user)/eco-event/[eventid]/_component/VolunteerComponent";

const TabEcoeventComponent = ({ operator, eventid, agenda, isEnded }) => {
  return (
    <Tabs defaultValue="agenda" className="w-full">
      {/* Tab Buttons */}
      <TabsList className="flex flex-wrap gap-2 mb-4 mt-5 border border-lightes-white h-[50px]">
        <TabsTrigger
          value="agenda"
          className={cn(
            "flex items-center h-full w-full px-4 gap-2 rounded-md text-xs md:text-sm lg:text-sm ",
            "data-[state=active]:bg-green data-[state=active]:text-white"
          )}
        >
          <Sparkles className="w-4 h-4" />
          Agenda
        </TabsTrigger>

        {isEnded && (
          <TabsTrigger
            value="review"
            className={cn(
              "flex items-center h-full w-full px-4 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
              "data-[state=active]:bg-green data-[state=active]:text-white"
            )}
          >
            <MessagesSquare className="w-4 h-4" />
            Review
          </TabsTrigger>
        )}

        {isEnded && operator && (
          <TabsTrigger
            value="volunteer"
            className={cn(
              "flex items-center h-full w-full px-4 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
              "data-[state=active]:bg-green data-[state=active]:text-white"
            )}
          >
            <UsersRound className="w-4 h-4" />
            Volunteer
          </TabsTrigger>
        )}
      </TabsList>

      {/* Tab Contents */}
      <TabsContent value="agenda">
        <div className="space-y-2">
          <AgendaComponent agenda={agenda} />
        </div>
      </TabsContent>

      {isEnded && (
        <TabsContent value="review">
          <div className="space-y-2">
            <ReviewComponent operator={operator} eventid={eventid} />
          </div>
        </TabsContent>
      )}

      {isEnded && operator && (
        <TabsContent value="volunteer">
          <div className="space-y-2">
            <VolunteerComponent eventid={eventid} />
          </div>
        </TabsContent>
      )}
    </Tabs>
  );
};

export default TabEcoeventComponent;
