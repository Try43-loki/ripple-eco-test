import React from "react";
import HeroSectionComponent from "@/components/HeroSectionComponent";
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

import { viewUserProfileService } from "@/service/profileService"; 
import { getAllBagdeByIDService, getAllBagdeService, getBadgeByUserIDService } from "@/service/badgeService";
import BadgeComponent from "@/app/organizer/profile/_component/BadgeComponent";
import OwnFeedBackComponent from "../../profile/_component/OwnFeedBackComponent";
import DisccusionComponent from "../../profile/_component/DisccusionComponent";
import TakeActionComponent from "../../profile/_component/TakeActionComponent";
import EvenHistoryComponent from "../../profile/_component/EvenHistoryComponent";
const ViewProfilePage = async ({params}) => {
  const userID = await params?.UserId;
  const userData = await viewUserProfileService(userID);
  
  const badgeData = await getAllBagdeByIDService(userID);
  const totalBadgesTotal = await getBadgeByUserIDService(userID) || [];
  const badge = badgeData?.data;
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
            src={userData?.data?.profileImageUrl}
            alt={`${userData?.data?.firstName} ${userData?.lastName}`}
            className="w-[170px] h-[170px] rounded-full absolute -top-10 left-20"
          />
        </div>
        <div className="space-y-2 w-3/4">
          <h2 className="text-[30px] text-green">{`${userData?.data?.firstName} ${userData?.data?.lastName}`}</h2>
          <p className="text-[20px] text-black">{userData?.data?.bio}</p>
          <div className="flex items-center gap-10">
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <Phone className="w-4.5 h-4.5" />
              <p>{userData?.data?.phoneNumber}</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <MapPin className="w-4.5 h-4.5" />
              <p>{userData?.data?.address}</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-1.5">
              <Mail className="w-4.5 h-4.5" />
              <p>{userData?.data?.email}</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-meduim-green hover:bg-green text-white px-5 py-1 rounded-xl text-base">
          <EditprofileComponent title={"Edit Profile"} userData={userData}/>
        </div> */}
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
            <OwnFeedBackComponent userId={userID}/>
          </TabsContent>

          <TabsContent value="discussion" className="w-full mt-5 mb-10">
            <DisccusionComponent userId={userID}/>
          </TabsContent>

          <TabsContent value="take-action" className="w-full mt-5 mb-10">
            <TakeActionComponent userId={userID}/>
          </TabsContent>

          <TabsContent value="earned-badge" className="w-full mt-5 mb-10">
            <section className="flex">
              <BadgeComponent badge={badge} totalBadges={totalBadgesTotal}/>
            </section>
          </TabsContent>

          <TabsContent value="event-history" className=" pb-12 mt-10 w-full mb-10">
            <EvenHistoryComponent userID={userID}/>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default ViewProfilePage;
