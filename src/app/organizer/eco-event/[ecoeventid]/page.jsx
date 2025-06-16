import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import StatusButtonComponent from "@/components/StatusButtonComponent";
import { CalendarDays, MapPin } from "lucide-react";
import JoinEventButtonComponent from "@/app/(user)/eco-event/[eventid]/_component/JoinEventButtonComponent";
import TabEcoeventComponent from "@/components/TabEcoeventComponent";
import PostActivityComponent from "./_component/PostActivityComponent";
import { getEcoEventByIdService } from "@/service/ecoEventService";
import ActivityDisplayComponent from "./_component/ActivityDisplayComponent";
import { getPostActivityService } from "@/service/PostActivityService";
import { getUserProfileService } from "@/service/auth/user-service";

export default async function EcoEventDetailPage({ params }) {
  const { ecoeventid } = await params;
  const event = await getEcoEventByIdService(ecoeventid);
  const activityEvent = await getPostActivityService(ecoeventid);
  const userData = await getUserProfileService();
  const eventId = event?.data?.eventId;
  if (!event) {
    return <p className="p-6 text-red">Event not found.</p>;
  }
  const breadcrumb = {
    back: "Eco Event",
    current: "hi",
    link: "/organizer/eco-event",
  };

  const summaryList = activityEvent?.data?.summaryList;
  const isOwner =
    userData?.data?.appUserId === event?.data?.appUserResponse?.appUserId;

  const shouldRenderPostActivity =
    isOwner && (!Array.isArray(summaryList) || summaryList.length === 0);

  const shouldRenderActivityDisplay =
    isOwner && Array.isArray(summaryList) && summaryList.length > 0;

  return (
    <main className="w-full">
      {/* Breadcrumb */}
      <div className="py-5">
        <BreadcrumbComponent
          back={breadcrumb.back}
          current={breadcrumb.current}
          Link={breadcrumb.link}
        />
      </div>

      {/* Content */}
      <article className="flex w-full py-2">
        <div className="w-full flex flex-col bg-light-gray rounded-3xl p-5 md:p-8 lg:p-10">
          {/* Organizer Info */}
          <div className="flex items-center text-light-green font-semibold mb-3">
            <div className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
              <Image
                src={"/assets/Organizer.png"}
                width={30}
                height={30}
                alt="Organizer"
              />
            </div>
            <h3 className="px-3">United Nations Environment Program (UNEP)</h3>
          </div>

          {/* Title */}
          <h2 className="py-3 text-lg lg:text-xl font-bold text-dark-green">
            {ecoeventid}
          </h2>

          {/* Status tags */}
          <div className="flex gap-3 flex-wrap mb-2">
            <StatusButtonComponent
              text="Hand-on event"
              bgColor="bg-green"
              textColor="text-white"
            />
            <StatusButtonComponent
              text="#Tree-Planting"
              bgColor="bg-blue"
              textColor="text-white"
            />
            <StatusButtonComponent
              text="Upcoming"
              bgColor="bg-[#FFE8D5]"
              textColor="text-orange"
            />
          </div>

          {/* Date & Location */}
          <div className="flex items-center gap-4 text-light-green text-sm">
            <CalendarDays className="w-5 h-5" />
            <p>{ecoeventid}</p>
          </div>
          <div className="flex items-center gap-4 text-light-green text-sm">
            <MapPin className="w-5 h-5" />
            <p>{ecoeventid}, Cambodia</p>
          </div>

          {/* Description */}
          <p className="text-light-green py-4">{ecoeventid}</p>

          {/* Join button (mobile only) */}
          <div className="w-full md:hidden">
            <JoinEventButtonComponent text="Join Event" />
          </div>

          {/* Images */}
          <div className="flex flex-wrap gap-6 py-6">
            <div className="relative w-[350px] h-[300px] bg-white rounded-xl overflow-hidden">
              <Image
                src="/assets/eventImage.png"
                alt="Event"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Tabs & Posts */}
          <TabEcoeventComponent operator="organizer" />
          {shouldRenderPostActivity && (
            <PostActivityComponent eventId={eventId} />
          )}
          {shouldRenderActivityDisplay && (
            <ActivityDisplayComponent
              data={activityEvent?.data}
              userData={userData?.data}
            />
          )}
        </div>
      </article>
    </main>
  );
}
