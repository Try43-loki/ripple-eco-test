import React from "react";
import ActionVolunteerComponent from "./ActionVolunteerComponent";
import { getAllVolunteerRequestAction } from "@/action/VolunteerAction";
import {
  getEcoEventByIdService,
  getOwnUpComingEventService,
} from "@/service/ecoEventService";

export default async function VolunteerRequestComponent({ eventId }) {
  if (!eventId) {
    return (
      <p className="text-lighter-green">
        Please select an event to see volunteer requests.
      </p>
    );
  }

  const eventData = await getEcoEventByIdService(eventId);
  const volunteerList = await getAllVolunteerRequestAction(eventId);
  const { data } = volunteerList;
  return (
    <section className="flex flex-col">
      <p className="text-base text-dark-green pb-5 font-medium">
        Volunteer Request: {data?.length || 0}/{eventData?.data?.maxSlot || 0}
      </p>

      <div className="w-full flex py-3 px-4 justify-between text-lighter-green font-medium border border-lightes-white rounded-2xl items-center">
        <p className="min-w-[140px]">Volunteer Name</p>
        <p className="min-w-[210px]">Requested Date</p>
        <p className="min-w-[120px]">Status</p>
        <p className="min-w-[220px] text-center">Action</p>
      </div>

      <div className="mt-5 space-y-2">
        <ActionVolunteerComponent volunteerList={data} />
      </div>
    </section>
  );
}
