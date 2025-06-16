import { getEcoEventByIdService } from "@/service/ecoEventService";
import FormattedDate from "@/utils/FomattedDate";
import React from "react";

const TotalVolunteerComponent = async ({ eventId, totalParticipants }) => {
  let dateToFormat = new Date();

  if (eventId) {
    const currentEvent = await getEcoEventByIdService(eventId);
    if (currentEvent?.data?.startDateTime) {
      dateToFormat = new Date(currentEvent.data.startDateTime);
    }
  }

  return (
    <article className="flex justify-between items-center">
      <h2 className="text-dark-green font-semibold text-lg">
        Total Participant(s): {totalParticipants} participants
      </h2>
      <div className="py-3 px-4 bg-green rounded-2xl text-white">
        <FormattedDate isoString={dateToFormat} format="weekdaySlash" />
      </div>
    </article>
  );
};

export default TotalVolunteerComponent;
