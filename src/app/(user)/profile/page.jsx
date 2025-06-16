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
} from "lucide-react";
import Image from "next/image";

import TakeActionComponent from "./_component/TakeActionComponent";
import OwnFeedBackComponent from "./_component/OwnFeedBackComponent";
import DisccusionComponent from "./_component/DisccusionComponent";
import EditprofileComponent from "@/app/organizer/profile/_component/EditprofileComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import { getCurrentUserProfileService } from "@/service/profileService";
import { getOwnTakeActionService } from "@/service/takeActionService";
import { getAllOwnDiscussionsService } from "@/service/discussionService";
import { getAllEcoEventService } from "@/service/ecoEventService";
import FilterEventHistory from "./_component/FilterEventHistory";
import { getAllBagdeService } from "@/service/badgeService";
const ProfilePage = async () => {
  const response2 = await getOwnTakeActionService();
  const ownTakeActionData = response2?.data || [];
  const response = await getCurrentUserProfileService();
  const userData = response?.data || [];
  const response3 = await getAllOwnDiscussionsService();
  const ownDiscussionsData = response3?.data || [];
  const response4 = await getAllEcoEventService();
  const cardData = response4?.data ?? [];
  const badgeData = await getAllBagdeService();
  const badge = badgeData?.data;
  const data = null;
  return (
    <main>
      <HeroSectionComponent
        text={" "}
        description={" "}
        showSearchBar={false}
      />
      <article className="flex items-end gap-10 rounded-3xl mx-36 justify-end pr-10 py-7 relative -mt-28 bg-white shadow-lg">
        <div className="w-1/4">
          <img
            src={userData?.profileImageUrl}
            alt={`${userData?.firstName} ${userData?.lastName}`}
            className="w-[170px] h-[170px] rounded-full absolute -top-10 left-20"
          />
        </div>
        <div className="space-y-2 w-3/4">
          <h2 className="text-[30px] text-green">{`${userData?.firstName} ${userData?.lastName}`}</h2>
          <p className="text-[20px] text-black">{userData?.bio}</p>
          <div className="flex items-center gap-10">
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <Phone className="w-4.5 h-4.5" />
              <p>{userData?.phoneNumber}</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <MapPin className="w-4.5 h-4.5" />
              <p>{userData?.address}</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <Mail className="w-4.5 h-4.5" />
              <p>{userData?.email}</p>
            </div>
          </div>
        </div>
        <Button className="bg-meduim-green hover:bg-green text-white px-5 py-3.5 rounded-xl text-base">
          <EditprofileComponent title={"Edit Profile"} userData={userData}/>
        </Button>
      </article>

      <section className="mt-12 mx-36">
        <Tabs defaultValue="event-history" className="w-full">
          <TabsList className="flex flex-row gap-x-2 bg-white h-auto rounded-[14px] p-2 border-1 border-light-gray">
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
              <MessagesSquare className="w-4.5 h-4.5" />
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
            <DisccusionComponent disccusionData={ownDiscussionsData} />
          </TabsContent>

          <TabsContent value="take-action" className="w-full mt-5 mb-10">
            <TakeActionComponent cardData={ownTakeActionData} />
          </TabsContent>

          <TabsContent value="earned-badge" className="w-full mt-5 mb-10">
            <section className="flex">
              {badge?.map((data, index) =>
              <div className="flex flex-col items-center gap-y-1" key={index}>
                <Image
                src={data?.badge?.image}
                alt="badges"
                width={160}
                height={50}
                className=""
                />
                <h2>{data?.badge?.title}</h2>
                <p>Point: {data?.badge?.point}</p>
              </div>
              )}
            </section>
          </TabsContent>

          <TabsContent value="event-history" className="px-4 md:px-20 lg:px-[150px] pb-12 mt-10 w-full  mb-10">
              <FilterEventHistory/>

              <div className="flex flex-wrap justify-start gap-5 mt-0">
                {cardData?.length > 0 ? (
                  cardData.map((event) => (
                    <div key={event?.eventId}>
                      <CardEcoEventComponent event={event} />
                    </div>
                  ))
                ) : (
                  <p className="text-red text-center w-full">
                    No events found.
                  </p>
                )}
              </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default ProfilePage;
