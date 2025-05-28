import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DiscussionCardComponent from "@/app/(user)/discussion-forums/_component/DiscussionCardComponent";
import { cn } from "@/lib/utils";
import Link from "next/link";

const DiscussionTabComponent = () => {
  return (
    <Tabs defaultValue="allpost">
      <TabsList className="flex justify-center">
        <TabsTrigger
          value="allpost"
          className={cn(
            "flex items-center px-3 py-1.5 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
            "data-[state=active]:bg-green data-[state=active]:text-white"
          )}
        >
          All Post
        </TabsTrigger>
        <TabsTrigger
          value="ownpost"
          className={cn(
            "flex items-center px-3 py-1.5 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
            "data-[state=active]:bg-green data-[state=active]:text-white"
          )}
        >
          Own Post
        </TabsTrigger>
      </TabsList>
      <TabsContent value="allpost" className="w-full">
        <div className="bg-white rounded-md w-full">
          <Link href={`/organizer/discussion-forums/${1}`}>
            <DiscussionCardComponent fullWidth />
          </Link>
        </div>
      </TabsContent>
      <TabsContent value="ownpost" className="w-full">
        <div className="bg-white rounded-md w-full">
          <Link href={`/organizer/discussion-forums/${1}`}>
            <DiscussionCardComponent fullWidth />
          </Link>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DiscussionTabComponent;
