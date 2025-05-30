import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TakeActionCard from "@/components/TakeActionCard";
import { cn } from "@/lib/utils";
import { Clock, ClipboardList, MessagesSquare } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import Link from "next/link";
const TakeActionBodyComponent = () => {
  return (
    <>
      <section className="mt-5 w-full">
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
            className="flex flex-wrap justify-start gap-x-8"
          >
            {[...Array(7)].map((_, index) => (
              <div key={index} className="py-5">
                <TakeActionCard
                  image={"/sub-banner.jpg"}
                  title={"Stand Up to Plastic Pollution"}
                  description={
                    "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
                  }
                  support={"11,376"}
                  layout={"col"}
                  isOwner={false}
                />
              </div>
            ))}
          </TabsContent>
          <TabsContent
            value="own-post"
            className="flex flex-wrap justify-start gap-x-8"
          >
            {[...Array(7)].map((_, index) => (
              <div key={index} className="py-5">
                <TakeActionCard
                  image={"/sub-banner.jpg"}
                  title={"Stand Up to Plastic Pollution"}
                  description={
                    "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
                  }
                  support={"11,376"}
                  layout={"col"}
                  isOwner={true}
                />
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default TakeActionBodyComponent;
