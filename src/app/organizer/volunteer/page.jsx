import React from "react";
import TotalVolunteerComponent from "./_component/TotalVolunteerComponent";
import { getOwnUpComingEventService } from "@/service/ecoEventService";
import EventAndRequestComponent from "./_component/EventAndRequestComponent";
import { approveVolunteerRequestService } from "@/service/volunteerService";

const VolunteerPage = async () => {
  // Fetch all eco events
  const [upComingEvent] = await Promise.all([getOwnUpComingEventService()]);
  return (
    <main className="w-full">
      <section className="flex flex-col">
        <div className="py-5">
          <TotalVolunteerComponent />
        </div>

        <article className="flex gap-20">
          <EventAndRequestComponent upComingEvents={upComingEvent?.data} />
        </article>
      </section>
    </main>
  );
};

export default VolunteerPage;
