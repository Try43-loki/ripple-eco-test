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
import React from "react";
import OwnFeedBackComponent from "./_component/OwnFeedBackComponent";
import DisccusionComponent from "./_component/DisccusionComponent";
import TakeActionComponent from "./_component/TakeActionComponent";
import Image from "next/image";
import EventHistoryComponent from "./_component/EventHistoryComponent";

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
        <Tabs defaultValue="events" className="w-full">
          <TabsList className="flex gap-2 bg-white rounded-xl p-2 border border-border">
            {[
              { value: "event-history", icon: <Clock />, label: "Event History" },
              { value: "own-feedback", icon: <MessagesSquare />, label: "Own Feedback" },
              { value: "discussion", icon: <MessageCircleQuestion />, label: "Discussion" },
              { value: "take-action", icon: <ClipboardList />, label: "Take Action" },
              { value: "earned-badge", icon: <Sparkles />, label: "Earn Badge" },
            ].map(({ value, icon, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className={cn(
                  "text-sm md:text-base lg:text-lg py-2.5 px-4 rounded-xl flex gap-2 items-center transition-colors",
                  "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
                )}
              >
                {React.cloneElement(icon, { className: "w-4.5 h-4.5" })}
                <p>{label}</p>
              </TabsTrigger>
            ))}
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
                  className="w-[100px] h-[100px] rounded-xl"
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
