import React from "react";
import VolunteerRequestComponent from "./VolunteerRequestComponent";
import EventAndRequestComponent from "./EventAndRequestComponent";
import TotalVolunteerComponent from "./TotalVolunteerComponent";
import { getOwnUpComingEventService } from "@/service/ecoEventService";

const VolunteerWrapperComponent = async ({ eventId }) => {
  const upComingEvents = await getOwnUpComingEventService();
  const { data } = upComingEvents;
  const totalParticipants = data.reduce((sum, event) => {
    return sum + event.participant;
  }, 0);

  return (
    <section className="w-full">
      <TotalVolunteerComponent
        eventId={eventId}
        totalParticipants={totalParticipants}
      />
      <article className=" flex justify-between">
        <EventAndRequestComponent data={data} />
        <div className="w-full">
          <VolunteerRequestComponent eventId={eventId} />
        </div>
      </article>
    </section>
  );
};

export default VolunteerWrapperComponent;
