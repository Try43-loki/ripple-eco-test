import Image from "next/image";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import StatusButtonComponent from "@/components/StatusButtonComponent";
import { CalendarDays, MapPin } from "lucide-react";
import JoinEventButtonComponent from "@/app/(user)/eco-event/[eventid]/_component/JoinEventButtonComponent";
import TabEcoeventComponent from "@/components/TabEcoeventComponent";
import {
  checkUserJoinedEventService,
  getEcoEventByIdService,
} from "@/service/ecoEventService";
import Link from "next/link";
import { RequestFormComponent } from "@/components/RequesFormComponent";
import DonationComponent from "@/app/(user)/eco-event/[eventid]/_component/DonateComponent";
import RatingDialog from "@/components/RateComponent";
import { getPostActivityService } from "@/service/PostActivityService";
import { getUserProfileService } from "@/service/auth/user-service";
import PostActivityComponent from "./_component/PostActivityComponent";
import ActivityDisplayComponent from "./_component/ActivityDisplayComponent";

export default async function EcoEventDetailPage({ params }) {
  const { eventid } = await params;
  const res = await getEcoEventByIdService(eventid);

  // Post activity service
  const activityEvent = await getPostActivityService(eventid);
  const userData = await getUserProfileService();
  const event = res?.data;
  const eventId = event?.eventId;

  if (!eventid) {
    return <p className="p-6 text-red">Event not found.</p>;
  }
  const userId = "current-user-id";
  const participation = await checkUserJoinedEventService(eventid, userId);
  const userJoined = participation?.joined || false;

  const breadcrumb = {
    back: "Eco Event",
    current: event?.title,
    link: "/organizer/eco-event",
  };
  const isEventFinished = event?.eventStatus === "Finished";
  const isEventActive =
    event?.eventStatus === "Ongoing" || event?.eventStatus === "Upcoming";

  const isOrganizer = userId === event?.appUserResponse?.id;

  // post activity condition
  const summaryList = activityEvent?.data?.summaryList;
  const isOwner =
    userData?.data?.appUserId === event?.appUserResponse?.appUserId;
  const shouldRenderPostActivity =
    isOwner &&
    event?.eventStatus === "Finished" &&
    (!Array.isArray(summaryList) || summaryList.length === 0);
  const shouldRenderActivityDisplay =
    isOwner &&
    event?.eventStatus === "Finished" &&
    Array.isArray(summaryList) &&
    summaryList.length > 0;

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
      <article className="flex flex-col bg-light-gray w-full p-10 rounded-3xl">
        <div className="w-full flex flex-row justify-between">
          {/* Organizer Info */}
          <div className="flex items-center text-light-green font-semibold mb-3">
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
            <div className="flex md:flex-row gap-4">
              <RequestFormComponent
              // text={btnRquestJoin}
              // contribute={event?.contributeType?.contributeType}
              />
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="py-3 text-lg lg:text-xl font-bold text-dark-green">
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
        <div className="flex items-center text-xs gap-4 md:text-sm lg:text-base text-light-green mt-2">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          <p>{event?.provinces?.provinceName}, Cambodia</p>
        </div>

        {/* Description */}
        <p className="text-light-green py-4">{event?.description}</p>

        {/* Join button (mobile only) */}
        <div className="w-full md:hidden">
          <JoinEventButtonComponent text="Join Event" />
        </div>

        {/* Images */}
        <div className="flex flex-wrap gap-6 py-6">
          <div className="relative w-[350px] h-[300px] bg-white rounded-xl overflow-hidden">
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
