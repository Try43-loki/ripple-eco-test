"use client";
import React, { useState, useTransition } from "react";
import EcoEventCardComponent from "./EcoEventCardComponent";
import VolunteerRequestComponent from "./VolunteerRequestComponent";
import { getAllVolunteerRequestService } from "@/service/volunteerService";

const EventAndRequestComponent = ({ upComingEvents }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [volunteerRequests, setVolunteerRequests] = useState([]);
  const [isPending, setStartTransition] = useTransition();

  const handleSelectEvent = async (event) => {
    setSelectedEvent(event);
    setStartTransition(() => {
      getAllVolunteerRequestService(event.eventId);
    });
  };

  return (
    <main className="w-full flex">
      <div className="flex flex-col mr-20">
        <p className="text-base text-dark-green pb-5 font-medium">
          Upcoming Event
        </p>
        <div className="h-[500px] overflow-y-scroll flex flex-col gap-5">
          {upComingEvents?.map((event) => (
            <EcoEventCardComponent
              key={event.eventId}
              upComingEvent={event}
              onSelect={handleSelectEvent}
              selectedEventId={selectedEvent?.eventId}
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        <VolunteerRequestComponent
          isPending={isPending}
          selectedEvent={selectedEvent}
          volunteerRequests={volunteerRequests}
        />
      </div>
    </main>
  );
};

export default EventAndRequestComponent;
