import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Clock, Mail, MapPin, MessagesSquare, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import ArchivesComponent from "./ArchivesComponent";
import EditprofileComponent from "./EditprofileComponent";
import { getAllBagdeService, getBadgeByUserIDService } from "@/service/badgeService";
import BadgeComponent from "./BadgeComponent";
import { getAllEcoEventByUserIDService, getAllOwnEventService } from "@/service/ecoEventService";

const OrganizerProfileComponent = async ({ operator, organizerData, isViewProfile}) => {
  const badgeData = await getAllBagdeService();
  const userID = organizerData?.appUserId;
  const totalBadges = await getBadgeByUserIDService(userID);
  const badge = badgeData?.data;
  let cardData = [];
  const archivementData = await getAllOwnEventService();
  const archivementOther = await getAllEcoEventByUserIDService(userID);
  if(isViewProfile === true){
    cardData = archivementOther?.data;
  } else {
    cardData = archivementData?.data;
  }
  
  return (
    <>
      <section className="w-full flex flex-col">
        <div className="rounded-2xl px-5 py-6 w-full border-light-gray border-1">
          <div className="flex w-full items-start justify-between">
            <div className="w-25 h-25">
              <Image
              src={
                organizerData?.profileImageUrl?.includes('temp-file')
                  ? organizerData.profileImageUrl.replace('temp-file', 'permanent-file')
                  : organizerData?.profileImageUrl
              }
              alt={`${organizerData?.firstName} ${organizerData?.lastName}`}
              width={110}
              height={110}
              className="rounded-full w-full h-full"
            />
            </div>
            
            {operator ==true && isViewProfile == false  ? (
              <EditprofileComponent operator={operator} title={""} />
            ) : (
              ""
            )}
          </div>
          <article className="flex flex-col items-start gap-y-2 mt-2.5">
            {operator ? (
              <h2 className="text-xl">{`${organizerData?.firstName} ${organizerData?.lastName}`}</h2>
            ) : (
              <h2 className="text-xl"></h2>
            )}

            <p className="text-strong-gray text-sm">{organizerData?.bio}</p>
          </article>
          <hr className="h-0.5 text-light-gray my-2" />
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
              <Phone className="w-4.5 h-4.5" />
              <p>{organizerData?.phoneNumber}</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
              <MapPin className="w-4.5 h-4.5" />
              <p>{organizerData?.address}</p>
            </div>
            <div className="flex items-center text-sub-info text-strong-gray gap-x-1.5">
              <Mail className="w-4.5 h-4.5" />
              <p>{organizerData?.email}</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-3.5">
          <Tabs defaultValue="earned-badge" className="w-full">
            <section className="flex flex-row items-center gap-x-0.5 w-full">
              <TabsList className="flex flex-row gap-x-2 bg-white h-auto rounded-[14px] p-1.5 border-2 border-light-gray drop-shadow-light-gray">
                <TabsTrigger
                  value="earned-badge"
                  className={cn(
                    "text-sm sm:text-sm md:text-base lg:text-lg py-2 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
                    "data-[state=active]:bg-meduim-green data-[state=active]:text-white",
                    "w-45"
                  )}
                >
                  <Clock className="w-4.5 h-4.5" />
                  <p>Earned Badge</p>
                </TabsTrigger>
                {operator ? (
                  <TabsTrigger
                    value="archive-post"
                    className={cn(
                      "text-sm sm:text-sm md:text-base lg:text-lg py-2 px-4 rounded-xl flex gap-x-2 items-center transition-colors",
                      "data-[state=active]:bg-meduim-green data-[state=active]:text-white"
                    )}
                  >
                    <MessagesSquare className="w-4.5 h-4.5" />
                    <p>Archives</p>
                  </TabsTrigger>
                ) : (
                  ""
                )}
              </TabsList>
              <hr className="border-t-2 border-light-gray w-full" />
            </section>

            <TabsContent value="archive-post" className="mt-5 w-full">
              <ArchivesComponent cardData={cardData} />
            </TabsContent>
            <TabsContent
              value="earned-badge"
              className="mt-5 w-full p-3.5"
            >
              <div className="w-full">
                <BadgeComponent badge={badge} totalBadges={totalBadges}/>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};
export default OrganizerProfileComponent;
