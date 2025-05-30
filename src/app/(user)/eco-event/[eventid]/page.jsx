import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import DiscussionButtonComponent from "@/components/DiscussionButtonComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import StatusButtonComponent from "@/components/StatusButtonComponent";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import TabEcoeventComponent from "@/components/TabEcoeventComponent";
import DonationComponent from "./_component/DonateComponent";
import JoinEventButtonComponent from "./_component/JoinEventButtonComponent";
import EventActivityComponent from "@/components/EventActivityComponent";

const EcoEventDetailPage = async ({ params: ParamsPromise }) => {
  const { eventid } = await ParamsPromise;

  // Hero Section param data
  const heroSectionText = {
    title: "ECO EVENT",
    description:
      "Join our EcoEvent to share ideas, connect, and act for a healthier planet.",
    search: false,
  };

  // Breadcrumb Section param data
  const breadcrumbSection = {
    back: "Eco Event",
    current: "Green Oasis going Miyawaki",
    link: "/eco-event",
  };

  // Button Status Events
  const statusSection = [
    {
      id: 1,
      text: "Hand-on event",
      bgColor: "bg-dark-blue",
      textColor: "text-white",
    },
    {
      id: 2,
      text: "#Tree-Planting",
      bgColor: "bg-[#EDF0F3]",
      textColor: "text-dark-green",
    },
    {
      id: 3,
      text: "Upcoming",
      bgColor: "bg-[#FFE8D5]",
      textColor: "text-orange",
    },
  ];

  return (
    <main className="w-full">
      <article className="flex flex-col">
        {/* Hero Section */}
        <HeroSectionComponent
          text={heroSectionText.title}
          description={heroSectionText.description}
        />

        {/* Breadcrumb Section */}
        <div className="w-full my-6 px-6 md:px-20 lg:px-[150px]">
          <BreadcrumbComponent
            back={breadcrumbSection.back}
            current={breadcrumbSection.current}
            Link={breadcrumbSection.link}
          />
        </div>

        {/* Detail Section */}
        <article className="flex w-full px-6 md:px-20 lg:px-[150px] py-2">
          <div className="w-full flex flex-col h-auto bg-light-gray rounded-3xl p-5 md:p-8 lg:p-10 relative">
            {/* Top Section: Organizer Info + Join Button */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              {/* Organizer Info */}
              <div className="flex items-center text-xs md:text-sm lg:text-base text-light-green font-semibold">
                <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={"/assets/Organizer.png"}
                    width={40}
                    height={40}
                    alt="Organizer profile"
                  />
                </div>
                <h3 className="px-3">
                  United Nations Environment Program (UNEP)
                </h3>
              </div>

              {/* Join Event Button */}
              <div className="mt-3 md:mt-0 hidden md:block">
                <DiscussionButtonComponent text="Join Event" />
              </div>
            </div>

            {/* Title */}
            <h2 className="py-3 text-base md:text-lg lg:text-xl font-bold text-dark-green">
              Green Oasis going Miyawaki
            </h2>

            {/* Status Tags */}
            <div className="flex gap-3 flex-wrap mb-2">
              {statusSection.map((status) => (
                <StatusButtonComponent
                  key={status.id}
                  text={status.text}
                  bgColor={status.bgColor}
                  textColor={status.textColor}
                />
              ))}
            </div>

            {/* Date & Location */}
            <div className="flex items-center mt-3 py-1 text-xs gap-4 md:text-sm lg:text-base text-light-green">
              <CalendarDays className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              <p>12-14 June, 2025 at 8 AM</p>
            </div>
            <div className="flex items-center text-xs gap-4 md:text-sm lg:text-base text-light-green">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              <p>Kandal Province, Cambodia</p>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm lg:text-base text-light-green py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              since the 1500s...
            </p>
            <div className="w-full md:hidden">
              <JoinEventButtonComponent text={"Join Event"} />
            </div>

            {/* Image section */}
            <div className="flex flex-col md:flex-row py-6 gap-6 md:flex-wrap">
              <div className="relative w-[400px] h-[300px] md:w-[350px] md:h-[300px] bg-white rounded-xl overflow-hidden ">
                <Image
                  src="/assets/eventImage.png"
                  alt="Event image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-[400px] h-[300px] md:w-[350px] md:h-[300px] bg-white rounded-xl overflow-hidden">
                <Image
                  src="/assets/eventImage.png"
                  alt="Event image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-[400px] h-[300px] md:w-[350px] md:h-[300px] bg-white rounded-xl overflow-hidden">
                <Image
                  src="/assets/eventImage.png"
                  alt="Event image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Tab */}
            <TabEcoeventComponent />
            {/* Donate Section */}
            <DonationComponent />
          </div>
        </article>
      </article>
    </main>
  );
};

export default EcoEventDetailPage;
