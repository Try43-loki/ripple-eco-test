import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DiscussionCardComponent from "@/app/(user)/discussion-forums/_component/DiscussionCardComponent";
import { cn } from "@/lib/utils";
import Link from "next/link";

const DiscussionTabComponent = () => {
  return (
    <Tabs defaultValue="allpost" className="w-full">
      <TabsList className="flex justify-between items-center w-full">
        <h2 className="text-sm md:text-base lg:text-lg font-bold text-dark-green">
          10,200 Discussions
        </h2>
        <div className="flex gap-2">
          <TabsTrigger
            value="allpost"
            className={cn(
              "flex cursor-pointer  items-center px-4 py-2 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
              "data-[state=active]:bg-green data-[state=active]:text-white"
            )}
          >
            All Post
          </TabsTrigger>
          <TabsTrigger
            value="ownpost"
            className={cn(
              "flex cursor-pointer  items-center px-4 py-2 gap-2 rounded-md text-xs md:text-sm lg:text-sm",
              "data-[state=active]:bg-green data-[state=active]:text-white"
            )}
          >
            Own Post
          </TabsTrigger>
        </div>
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
            <DiscussionCardComponent fullWidth />
          </Link>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DiscussionTabComponent;
