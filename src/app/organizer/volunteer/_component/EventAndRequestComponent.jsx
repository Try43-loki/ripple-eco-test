import React from "react";
import Link from "next/link";
import EcoEventCardComponent from "./EcoEventCardComponent";

const EventAndRequestComponent = ({ data }) => {
  return (
    <main>
      <div className="flex flex-col mr-20">
        <p className="text-base text-dark-green pb-5 font-medium">
          Upcoming Event
        </p>
        <div className="h-[700px] overflow-y-scroll scrollbar-hide flex flex-col gap-5">
          {data?.map((event) => (
            <Link
              key={event.eventId}
              href={`/organizer/volunteer/${event.eventId}`}
            >
              <EcoEventCardComponent event={event} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EventAndRequestComponent;
