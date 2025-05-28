import React from "react";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import {
  ClipboardList,
  Clock,
  Mail,
  MapPin,
  MessageCircleQuestion,
  MessagesSquare,
  Phone,
  Sparkles,
  SquarePen,
} from "lucide-react";
import Image from "next/image";
import EventHistoryComponent from "./_component/EventHistoryComponent";
import TakeActionComponent from "./_component/TakeActionComponent";
import DisccusionComponent from "./_component/DiscussionComponent";
import OwnFeedBackComponent from "./_component/OwnFeedBackComponent";

const ProfilePage = () => {
  return (
    <main>
      <HeroSectionComponent text={" "} description={" "} showSearchBar={false} />

      <article className="flex items-end gap-10 rounded-3xl mx-36 justify-end pr-10 py-7 relative -mt-28 bg-white shadow-lg">
        <img
          src="https://i.pinimg.com/736x/35/48/35/3548357337902e2d9d7a79b1a6a166bc.jpg"
          alt="sakuke"
          className="w-[170px] h-[170px] rounded-full absolute -top-10 left-30"
        />
        <div className="space-y-2">
          <h2 className="text-[30px] text-green">Uchiha Sasuke</h2>
          <p className="text-[20px] text-black">
            Passionate about protecting the Earth and encouraging eco-friendly
            habits.
          </p>
          <div className="flex items-center gap-10">
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <Phone className="w-4.5 h-4.5" />
              <p>012-333-334</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <MapPin className="w-4.5 h-4.5" />
              <p>Phnom Penh</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <Mail className="w-4.5 h-4.5" />
              <p>UNEP@gmail.com</p>
            </div>
          </div>
        </div>
        <Button className="bg-meduim-green hover:bg-green text-white px-5 py-3.5 rounded-xl text-base">
          <div className="flex gap-1.5 items-center">
            <SquarePen className="w-4 h-4" />
            <p>Edit Profile</p>
          </div>
        </Button>
      </article>

      <section className="mt-12 mx-36">
        <Tabs defaultValue="event-history" className="w-full">
        <TabsList className="flex flex-row gap-x-2 bg-white h-auto rounded-[14px] p-2 border-1 border-border">
            <TabsTrigger
              value="event-history"
              className={cn(
                "text-sm sm:text-sm md:text-base lg:text-lg py-2.5 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
  "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <Clock className="w-4.5 h-4.5" />
              <p>Event History</p>
            </TabsTrigger>
            <TabsTrigger
              value="own-feedback"
              className={cn(
                "text-sm sm:text-sm md:text-base lg:text-lg py-2.5 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
  "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <MessagesSquare className="w-4.5 h-4.5"/>
              <p>Own Feedback</p>
            </TabsTrigger>
            <TabsTrigger
              value="discussion"
              className={cn(
                "text-sm sm:text-sm md:text-base lg:text-lg py-2.5 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
  "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <MessageCircleQuestion className="w-4.5 h-4.5" />
              <p>Discussion</p>
            </TabsTrigger>
            <TabsTrigger
              value="take-action"
              className={cn(
                "text-sm sm:text-sm md:text-base lg:text-lg py-2.5 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
  "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <ClipboardList className="w-4.5 h-4.5" />
              <p>Take Action</p>
            </TabsTrigger>
            <TabsTrigger
              value="earned-badge"
              className={cn(
                "text-sm sm:text-sm md:text-base lg:text-lg py-2.5 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
  "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <Sparkles className="w-4.5 h-4.5" />
              <p>Earn Badge</p>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="own-feedback" className="w-full mt-5 mb-10">
            <OwnFeedBackComponent />
          </TabsContent>

          <TabsContent value="discussion" className="w-full mt-5 mb-10">
            <DisccusionComponent />
          </TabsContent>

          <TabsContent value="take-action" className="w-full mt-5 mb-10">
            <TakeActionComponent />
          </TabsContent>

          <TabsContent value="earned-badge" className="w-full mt-5 mb-10">
            <section className="flex items-center gap-5">
              {["Green Helper", "Eco Hero", "Eco Volunteer", "Nature Steward"].map((badge) => (
                <Image
                  key={badge}
                  src={`/badges/${badge}.png`}
                  alt="badge"
                  width={100}
                  height={100}
                  className="w-25 h-25 rounded-xl"
                />
              ))}
            </section>
          </TabsContent>

          <TabsContent value="event-history" className="w-full mt-5 mb-10">
            <EventHistoryComponent />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default ProfilePage;
