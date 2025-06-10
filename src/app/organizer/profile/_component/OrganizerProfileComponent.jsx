
import { TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Clock,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import ArchivesComponent from "./ArchivesComponent";
import EditprofileComponent from "./EditprofileComponent";
import { getAllBagdeService } from "@/service/badgeService";

const OrganizerProfileComponent = async ({ operator, organizerData }) => {
  const badgeData = await getAllBagdeService();
  const badge = badgeData?.data;
  return (
<<<<<<< HEAD
    <>
      <section className="rounded-2xl px-5 py-6 w-full border-light-gray border-1 drop-shadow-lg">
        <div className="flex items-start justify-between">
          <Image
            src={organizerData?.profileImageUrl}
            alt={`${organizerData?.firstName} ${organizerData?.lastName}`}
            width={110}
            height={110}
            className="rounded-full"
          />
          {operator ? (
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
=======
  <>
    <section className="rounded-2xl px-5 py-6 flex flex-col min-w-2xs border-light-gray border-1 drop-shadow-lg">
      <div className="flex items-start justify-between">
        <Image
          src={organizerData?.profileImageUrl}
          alt={`${organizerData?.firstName} ${organizerData?.lastName}`}
          width={110}
          height={110}
          className="rounded-full"
        />
        {operator ? (
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
>>>>>>> 62a0f07dd7ae4bd1bfff530d1b246c637bc4e326

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
      </section>

      <section className="w-full mt-5">
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
            <ArchivesComponent />
          </TabsContent>
          <TabsContent
            value="earned-badge"
            className="mt-5 w-full flex flex-row items-center"
          >
            {badge?.map((data, index) => (
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
            ))}
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};
export default OrganizerProfileComponent;
