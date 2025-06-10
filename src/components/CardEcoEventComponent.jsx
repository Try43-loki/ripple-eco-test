import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { RequestFormComponent } from "./RequesFormComponent";
import DonationFormComponent from "./DonationFormComponent";
import InviteFirendFormComponent from "./InviteFirendFormComponent";
import { ListComponent } from "@/app/organizer/eco-event/_component/ListComponent";

const CardEcoEventComponent = ({
  operator,
  type,
  contribute,
  eventStatus,
  event,
}) => {
  const status = event?.eventStatus || eventStatus;

  return (
    <div className="relative w-[250px] md:w-[270px] lg:w-[340px] pb-6 border border-black/8 bg-white rounded-2xl shadow-md">
      {/* Top badge & menu */}
      <div className="absolute flex gap-2 flex-wrap z-[1] justify-between w-full p-2">
        <span className="bg-white/90 text-xs text-darker-gray px-2 py-1 rounded-2xl shadow">
          {`${event?.eventTypes?.eventType} | ${event?.category?.categoryName}`}
        </span>
        {operator === "organizer" && <ListComponent />}
      </div>

      <Link
        href={
          operator === "organizer"
            ? `/organizer/eco-event/${event?.eventId}`
            : `/eco-event/${event?.eventId}`
        }
        className="cursor-pointer"
      >
        {/* Image section */}
        <div className="relative w-full h-[170px]">
          <Image
            src={
              Array.isArray(event?.image) && event?.image?.[0]
                ? event.image[0]
                : "/assets/eventImage.png"
            }
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
              className={clsx(
                "w-2 h-2 rounded-full inline-block",
                { "bg-meduim-green": status === "Finished" },
                { "bg-meduim-gray": status === "Cancel" },
                { "bg-blue": status === "Ongoing" },
                { "bg-orange": status === "Upcoming" }
              )}
            ></span>
            <p
              className={clsx(
                "text-sm font-semibold",
                { "text-meduim-green": status === "Finished" },
                { "text-meduim-gray": status === "Cancel" },
                { "text-blue": status === "Ongoing" },
                { "text-orange": status === "Upcoming" }
              )}
            >
              {status}
            </p>
          </div>
          <p className="text-dark-green text-sm">{event?.startDate}</p>
          <h3 className="text-dark-green text-lg font-bold leading-tight mt-1 line-clamp-1">
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

      {/* Footer actions */}
      {status === "Finished" ? (
        <div className="flex pt-2 justify-between gap-x-2 w-full px-5">
          <div className="font-semibold text-gray-600 py-2 px-8 md:px-11 lg:px-10 bg-light-gray rounded-md w-full flex justify-center">
            Event Ended
          </div>
        </div>
      ) : (
        <div className="flex pt-2 justify-between gap-x-2 w-full px-5">
          <RequestFormComponent className="grow" contribute={contribute} />
          {!(
            type === "Seminar" ||
            contribute === "Volunteer" ||
            contribute === "Donation"
          ) && (
            <button className="p-2 bg-light-gray rounded-md">
              <DonationFormComponent />
            </button>
          )}
          <button className="p-2 bg-light-gray rounded-md">
            <InviteFirendFormComponent
              eventId={"bc941419-995f-4ab7-bf73-9a3f19e5e27a"}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardEcoEventComponent;
