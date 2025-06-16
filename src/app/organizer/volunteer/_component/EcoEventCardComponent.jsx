"use client";
import React from "react";
import Image from "next/image";
import clsx from "clsx";

const EcoEventCardComponent = ({
  upComingEvent,
  onSelect,
  selectedEventId,
}) => {
  const status = upComingEvent?.eventStatus || eventStatus;
  const isSelected = selectedEventId === upComingEvent.eventId;
  return (
    <div
      onClick={() => onSelect(upComingEvent)}
      className={clsx(
        "relative w-[250px] md:w-[270px] lg:w-[340px] pb-6 bg-white rounded-2xl shadow-md cursor-pointer transition duration-200"
      )}
    >
      {/* Top badge & menu */}
      <div className="absolute flex gap-2 flex-wrap z-[1] justify-between w-full p-2">
        <span className="bg-white/90 text-xs text-darker-gray px-2 py-1 rounded-2xl shadow">
          {`${upComingEvent?.eventType?.eventType} | ${upComingEvent?.category?.categoryName}`}
        </span>
      </div>

      {/* Image section */}
      <div className="relative w-full h-[170px]">
        <Image
          src={
            Array.isArray(upComingEvent?.image) && upComingEvent?.image?.[0]
              ? upComingEvent.image[0]
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
            className={clsx("w-2 h-2 rounded-full inline-block", {
              "bg-orange": status === "Upcoming",
            })}
          ></span>
          <p
            className={clsx("text-sm font-semibold", {
              "text-orange": status === "Upcoming",
            })}
          >
            {status}
          </p>
        </div>
        <p className="text-dark-green text-sm">
          {upComingEvent?.startDateTime}
        </p>
        <h3 className="text-dark-green text-lg font-bold leading-tight line-clamp-1">
          {upComingEvent?.title}
        </h3>
        <p className="text-light-green text-sm mt-1">
          {upComingEvent?.provinces?.provinceName}, Cambodia
        </p>
        <p className="text-light-green text-sm mt-1">
          {upComingEvent?.maxSlot} going
        </p>
      </div>
    </div>
  );
};

export default EcoEventCardComponent;
