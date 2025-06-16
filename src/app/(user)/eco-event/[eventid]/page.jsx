import React from "react";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import { CalendarDays, MapPin } from "lucide-react";
import TabEcoeventComponent from "@/components/TabEcoeventComponent";
import DonationComponent from "./_component/DonateComponent";
import JoinEventButtonComponent from "./_component/JoinEventButtonComponent";
import Link from "next/link";
import { RequestFormComponent } from "@/components/RequesFormComponent";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import RatingDialog from "@/components/RateComponent";
import {
  getEcoEventByIdService,
  checkUserJoinedEventService,
} from "@/service/ecoEventService";
import StatusButtonComponent from "@/components/StatusButtonComponent";

export default async function EcoEventDetailPage({ params }) {
  const { eventid } = params;
  const res = await getEcoEventByIdService(eventid);
  const event = res?.data ?? [];

  const userId = "current-user-id";
  const participation = await checkUserJoinedEventService(userId);
  const userJoined = participation?.joined || false;

  const breadcrumbSection = {
    back: "Eco Event",
    current: event?.title,
    link: "/eco-event",
  };

  const isEventFinished = event?.eventStatus === "Finished";
  const isEventActive =
    event?.eventStatus === "Ongoing" || event?.eventStatus === "Upcoming";

  const isOrganizer = userId === event?.appUserResponse?.id;

  return (
    <main className="w-full">
      <article className="flex flex-col">
        <HeroSectionComponent
          text={"ECO EVENT"}
          description={
            "Join our EcoEvent to share ideas, connect, and act for a healthier planet."
          }
        />

        <div className="w-full my-6 px-6 md:px-20 lg:px-[150px]">
          <BreadcrumbComponent
            back={breadcrumbSection.back}
            current={breadcrumbSection.current}
            Link={breadcrumbSection.link}
          />
        </div>

        <article className="flex w-full px-6 md:px-20 lg:px-[150px] py-2">
          <div className="w-full flex flex-col h-auto bg-light-gray rounded-3xl p-5 md:p-8 lg:p-10 relative">
            {/* Organizer Info */}
            <div className="flex items-center justify-between text-xs md:text-sm lg:text-base text-light-green font-semibold">
              <div className="flex items-center">
                <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <Link href={"/view-profile/organizer"}>
                    <Image
                      src={event?.appUserResponse?.profileImageUrl}
                      width={40}
                      height={40}
                      alt="Organizer profile"
                      className="rounded-full"
                    />
                  </Link>
                </div>
                <h3 className="px-3">
                  {event?.appUserResponse?.firstName}{" "}
                  {event?.appUserResponse?.lastName}
                </h3>
              </div>

              {isEventActive && (
                <div className="flex flex-col md:flex-row gap-4">
                  <RequestFormComponent
                  // text={btnRquestJoin}
                  // contribute={event?.contributeType?.contributeType}
                  />
                </div>
              )}
            </div>

            {/* Title */}
            <h2 className="py-3 text-base md:text-lg lg:text-xl font-bold text-dark-green">
              {event?.title}
            </h2>

            {/* Status tags */}
            <div className="flex gap-3 flex-wrap mb-2">
              <StatusButtonComponent
                text={event?.eventType?.eventType}
                bgColor="bg-green"
                textColor="text-white"
              />
              <StatusButtonComponent
                text={event?.category?.categoryName}
                bgColor="bg-blue"
                textColor="text-white"
              />
              <StatusButtonComponent
                text={event?.eventStatus}
                bgColor="bg-[#FFE8D5]"
                textColor="text-orange"
              />
            </div>

            {/* Date & Location */}
            <div className="flex items-center mt-3 py-1 text-xs gap-4 md:text-sm lg:text-base text-light-green">
              <CalendarDays className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              <p>{event?.startDateTime?.substring(0, 10)}</p>
            </div>
            <div className="flex items-center text-xs gap-4 md:text-sm lg:text-base text-light-green  mt-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              <p>{event?.provinces?.provinceName}, Cambodia</p>
            </div>

            <p className="text-xs md:text-sm lg:text-base text-light-green py-4">
              {event?.description}
            </p>

            <div className="flex flex-col md:flex-row py-6 gap-6 md:flex-wrap">
              <div className="relative w-[400px] h-[300px] md:w-[350px] md:h-[300px] bg-white rounded-xl overflow-hidden">
                <Image
                  src={
                    Array.isArray(event?.image) && event?.image[0]
                      ? event?.image[0]
                      : "/assets/eventImage.png"
                  }
                  alt="Event"
                  fill
                  priority
                  className="w-full h-full object-cover rounded-t-2xl brightness-75"
                />
              </div>
            </div>

            <TabEcoeventComponent
              agenda={event?.agenda}
              operator={isOrganizer}
              isEnded={isEventFinished}
              eventid={eventid}
            />

            {/* Conditional Buttons */}
            <div className="flex flex-col gap-4 mt-4">
              {isEventFinished && userJoined && (
                <Button className="w-full md:w-auto self-end">
                  <RatingDialog />
                </Button>
              )}
              {isEventActive && (
                <div className="flex flex-col md:flex-row gap-4">
                  <DonationComponent operator="detail" />
                </div>
              )}
              {isEventFinished && !userJoined && (
                <p className="text-end text-gray-600">
                  <RatingDialog />
                  {/* You did not join this event and cannot rate it. */}
                </p>
              )}
            </div>
          </div>
        </article>
      </article>
    </main>
  );
}
