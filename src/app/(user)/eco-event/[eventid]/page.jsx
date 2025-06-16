import React from "react";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import StatusButtonComponent from "@/components/StatusButtonComponent";
import { CalendarDays, MapPin } from "lucide-react";
import TabEcoeventComponent from "@/components/TabEcoeventComponent";
import DonationComponent from "./_component/DonateComponent";
import JoinEventButtonComponent from "./_component/JoinEventButtonComponent";
import Link from "next/link";
import { RequestFormComponent } from "@/components/RequestFormComponent";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EventActivityComponent from "@/components/EventActivityComponent";
// import RatingDialog from "@/components/RateComponent";
import { getEcoEventByIdService } from "@/service/ecoEventService";
import RatingDialog from "@/components/RateComponent";

export default async function EcoEventDetailPage({ params }) {
  const { eventid } = params;
  const res = await getEcoEventByIdService(eventid);
  const event = res?.data ?? [];

  // console.log("Event Data:", event);

  const breadcrumbSection = {
    back: "Eco Event",
    current: event?.title,
    link: "/eco-event",
  };

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
            <div className="flex items-center text-xs md:text-sm lg:text-base text-light-green font-semibold">
              <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                <Link href={"/view-profile/organizer/1"}>
                  <Image
                    src={"/assets/Organizer.png"}
                    width={40}
                    height={40}
                    alt="Organizer profile"
                  />
                </Link>
              </div>
              <h3 className="px-3">
                {event?.appUserResponse?.firstName}{" "}
                {event?.appUserResponse?.lastName}
              </h3>
            </div>

            <h2 className="py-3 text-base md:text-lg lg:text-xl font-bold text-dark-green">
              {event?.title}
            </h2>

            <div className="flex items-center mt-3 py-1 text-xs gap-4 md:text-sm lg:text-base text-light-green">
              <CalendarDays className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              <p>{event?.startDateTime}</p>
            </div>
            <div className="flex items-center text-xs gap-4 md:text-sm lg:text-base text-light-green">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              <p>{event?.provinces?.provinceName}, Cambodia</p>
            </div>

            <p className="text-xs md:text-sm lg:text-base text-light-green py-4">
              {event?.description}
            </p>

            <div className="flex flex-col md:flex-row py-6 gap-6 md:flex-wrap">
              <div className="relative w-[400px] h-[300px] md:w-[350px] md:h-[300px] bg-white rounded-xl overflow-hidden ">
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
              operator={
                event?.appUserResponse?.firstName +
                " " +
                event?.appUserResponse?.lastName
              }
              eventid={eventid}
            />

            <Button className="w-full flex justify-end items-center mt-4 p-0 shadow-none">
              <RatingDialog />
            </Button>
          </div>
        </article>
      </article>
    </main>
  );
}
