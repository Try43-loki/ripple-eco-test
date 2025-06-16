import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { RequestFormComponent } from "./RequesFormComponent";
import DonationFormComponent from "./DonationFormComponent";
import InviteFirendFormComponent from "./InviteFirendFormComponent";
import { ListComponent } from "@/app/organizer/eco-event/_component/ListComponent";

const CardEcoEventInOverviewComponent = ({
  operator,
  type,
  contribute,
  eventStatus,
  event,
}) => {
  const status = event?.eventStatus || eventStatus;

  return (
    <div className="relative w-[250px] md:w-[270px] lg:w-[350px] border border-black/8 bg-white rounded-2xl shadow-md">
      {/* Top badge & menu */}
      <div className="absolute flex gap-2 flex-wrap z-[1] justify-between w-full p-2">
        <span className="bg-white/90 text-xs text-darker-gray px-2 py-1 rounded-2xl shadow">
          {`${event?.eventTypes?.eventType} | ${event?.category?.categoryName}`}
        </span>
        {operator === "organizer" && <ListComponent />}
      </div>

      {/* Image section */}
      <Link
        href={
          operator === "organizer"
            ? `/eco-event/${event?.ecoeventid}`
            : `/organizer/eco-event/${event?.ecoeventid}`
        }
        className="cursor-pointer"
      >
        <div className="relative w-full h-[150px]">
          <Image
            src={event?.image?.[0] || "/assets/eventImage.png"}
            alt="Event"
            fill
            priority
            className="w-full h-full object-cover rounded-t-2xl brightness-75"
          />
        </div>

        {/* Event details */}
        <div className="px-5 text-left">
          <div className="flex items-center gap-2 pt-2 pb-1">
            <span
              className={clsx("w-2 h-2 rounded-full inline-block", {
                "bg-meduim-green": status === "Finished",
                "bg-meduim-gray": status === "Cancel",
                "bg-blue": status === "Ongoing",
                "bg-orange": status === "Upcoming",
              })}
            />
            <p
              className={clsx("text-sm font-semibold", {
                "text-meduim-green": status === "Finished",
                "text-meduim-gray": status === "Cancel",
                "text-blue": status === "Ongoing",
                "text-orange": status === "Upcoming",
              })}
            >
              {status}
            </p>
          </div>
          <p className="text-dark-green text-sm">{event?.startDate}</p>
          <h3 className="text-dark-green text-lg font-bold leading-tight mt-1">
            {event?.title}
          </h3>
          <p className="text-light-green text-sm mt-1">
            {event?.provinces?.provinceName}, Cambodia
          </p>
          <p className="text-light-green text-sm mt-1 mb-3">
            {event?.maxSlot} going
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardEcoEventInOverviewComponent;
