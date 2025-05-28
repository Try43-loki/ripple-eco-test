import HeroSectionComponent from "@/components/HeroSectionComponent";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import { ClipboardList, Clock, Mail, MapPin, MessageCircleQuestion, MessagesSquare, Phone, Sparkles, SquarePen } from "lucide-react";
import React from "react";
import OwnFeedBackComponent from "./_component/OwnFeedBackComponent";
import DisccusionComponent from "./_component/DisccusionComponent";
import TakeActionComponent from "./_component/TakeActionComponent";
import Image from "next/image";
import EventHistoryComponent from "./_component/EventHistoryComponent";

const ProfilePage = () => {
  return (
    <main>
      <HeroSectionComponent
        text={" "}
        description={" "}
        showSearchBar={false}
      />

      <article className="flex items-end gap-x-10 rounded-[28px] mx-[150px] justify-end pr-10 py-7 relative -mt-28 bg-white shadow-lg">
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
          <div className="flex items-center gap-x-[38px]">
            <div className="flex items-center text-sub-info text-[#83948D] gap-x-[6px]">
              <Phone className="w-[18px] h-[18px]" />
              <p>012-333-334</p>
            </div>
            <div className="flex items-center text-sub-info text-[#83948D] gap-x-[6px]">
              <MapPin className="w-[18px] h-[18px]" />
              <p>Phnom Penh</p>
            </div>
            <div className="flex items-center text-sub-info text-[#83948D] gap-x-[6px]">
              <Mail className="w-[18px] h-[18px]" />
              <p>UNEP@gmail.com</p>
            </div>
          </div>
        </div>
        <Button className="bg-meduim-green hover:bg-green text-white px-[20px] py-[15px] rounded-[16px] text-[16px]">
          <div className="flex gap-x-[6px] items-center">
            <SquarePen className="w-[16px] h-[16px]" />
            <p>Edit Profile</p>
          </div>
        </Button>
      </article>
      <section className="mt-12 mx-[150px]">
        <Tabs defaultValue="events" className="w-full ">
          <TabsList className="flex flex-row gap-x-2 bg-white h-auto rounded-[14px] p-2 border-1 border-[#D8E2DD]">
            <TabsTrigger
              value="event-history"
              className={cn(
                "sm:text-sm md:text-base lg:text-lg py-[10px] px-[16px] rounded-[14px] flex gap-x-[8px] items-center transition-colors",
                "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <Clock className="w-[18px] h-[18px]" />
              <p>Event History</p>
            </TabsTrigger>
            <TabsTrigger
              value="own-feedback"
              className={cn(
                "sm:text-sm md:text-base lg:text-lg py-[10px] px-[16px] rounded-[14px] flex gap-x-[8px] items-center transition-colors",
                "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <MessagesSquare className="w-[18px] h-[18px]"/>
              <p>Own Feedback</p>
            </TabsTrigger>
            <TabsTrigger
              value="discussion"
              className={cn(
                "sm:text-sm md:text-base lg:text-lg py-[10px] px-[16px] rounded-[14px] flex gap-x-[8px] items-center transition-colors",
                "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <MessageCircleQuestion className="w-[18px] h-[18px]" />
              <p>Discussion</p>
            </TabsTrigger>
            <TabsTrigger
              value="take-action"
              className={cn(
                "sm:text-sm md:text-base lg:text-lg py-[10px] px-[16px] rounded-[14px] flex gap-x-[8px] items-center transition-colors",
                "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <ClipboardList className="w-[18px] h-[18px]" />
              <p>Take Action</p>
            </TabsTrigger>
            <TabsTrigger
              value="earned-badge"
              className={cn(
                "sm:text-sm md:text-base lg:text-lg py-[10px] px-[16px] rounded-[14px] flex gap-x-[8px] items-center transition-colors",
                "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
              )}
            >
              <Sparkles className="w-[18px] h-[18px]" />
              <p>Earn Badge</p>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="own-feedback" className="w-full mt-5 mb-10">
            <OwnFeedBackComponent/>
          </TabsContent>
          <TabsContent value="discussion" className="w-full mt-5 mb-10">
            <DisccusionComponent/>
          </TabsContent>
          <TabsContent value="take-action" className="w-full mt-5 mb-10">
              <TakeActionComponent/>
          </TabsContent>
          <TabsContent value="earned-badge" className="w-full mt-5 mb-10">
            <section className="flex items-center gap-5">
              <Image src='/badges/Green Helper.png' 
                alt="badge"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-[14px]"
              />
              <Image src='/badges/Eco Hero.png' 
                alt="badge"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-[14px]"
              />
              <Image src='/badges/Eco Volunteer.png' 
                alt="badge"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-[14px]"
              />
              <Image src='/badges/Nature Steward.png' 
                alt="badge"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-[14px]"
              />
            </section>
          </TabsContent>
          <TabsContent value="event-history" className="w-full mt-5 mb-10">
              <section>
                <EventHistoryComponent/>
              </section>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}

export default ProfilePage;
