"use client";
import React, { useState } from "react";
import ActionVolunteerComponent from "./ActionVolunteerComponent";
import VolunteerRequestProfileComponent from "@/components/VolunteerRequestProfileComponent";

export default function VolunteerRequestComponent({
  isPending,
  selectedEvent,
  volunteerRequests,
}) {
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  if (!selectedEvent) {
    return (
      <p className="text-lighter-green">
        Please select an event to see volunteer requests.
      </p>
    );
  }

  return (
    <section className="flex flex-col">
      <p className="text-base text-dark-green pb-5 font-medium">
        Volunteer Request: {volunteerRequests.length}/100
      </p>

      {/* Table Header */}
      <div className="w-full flex py-3 px-4 justify-between text-lighter-green font-medium border border-lightes-white rounded-2xl items-center">
        <p className="min-w-[140px]">Volunteer Name</p>
        <p className="min-w-[170px]">Requested Date</p>
        <p className="min-w-[140px]">Status</p>
        <p className="min-w-[120px] text-center">Action</p>
      </div>

      {/* Rows */}
      {isPending ? (
        <p className="text-lighter-green italic">
          Loading volunteer requests...
        </p>
      ) : (
        <div className="mt-5 space-y-2">
          {volunteerRequests.map((volunteer, i) => (
            <ActionVolunteerComponent
              key={volunteer.requestId}
              volunteer={volunteer}
              isAlternateRow={i % 2 === 1}
              onClick={() => setSelectedVolunteer(volunteer)}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedVolunteer && (
        <VolunteerRequestProfileComponent
          volunteer={selectedVolunteer}
          onClose={() => setSelectedVolunteer(null)}
        />
      )}
    </section>
  );
}
