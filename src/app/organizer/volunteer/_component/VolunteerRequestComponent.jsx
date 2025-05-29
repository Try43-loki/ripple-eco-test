// app/organizer/volunteer/_component/VolunteerRequestComponent.jsx
"use client";
import React, { useState } from "react";
import ActionVolunteerComponent from "./ActionVolunteerComponent";
import VolunteerRequestProfileComponent from "@/components/VolunteerRequestProfileComponent";

export default function VolunteerRequestComponent() {
  const volunteerRequests = [
    {
      name: "Sreyphea",
      profileUrl: "/assets/leaderboard/image.jpg",
      eventsParticipated: 20,
      date: "13/05/2022",
      contact: "0123456789",
      address: "Phnom Penh",
      status: "Pending",
      reason: `I want to join this event because I deeply care about environmental sustainability and want to actively contribute to a cause that promotes eco-consciousness. Volunteering at this event will give me the opportunity to support green initiatives, raise awareness, and be part of a community working toward a healthier planet. I’m enthusiastic, dependable, and ready to assist with any tasks—from setting up booths to engaging with participants—to help make this eco event impactful and inspiring.`,
    },
    {
      name: "Sreyphea",
      profileUrl: "/assets/leaderboard/image.jpg",
      eventsParticipated: 20,
      date: "13/05/2022",
      contact: "0123456789",
      address: "Phnom Penh",
      status: "Pending",
      reason: `I want to join this event because I deeply care about environmental sustainability and want to actively contribute to a cause that promotes eco-consciousness. Volunteering at this event will give me the opportunity to support green initiatives, raise awareness, and be part of a community working toward a healthier planet. I’m enthusiastic, dependable, and ready to assist with any tasks—from setting up booths to engaging with participants—to help make this eco event impactful and inspiring.`,
    },
    {
      name: "Sreyphea",
      profileUrl: "/assets/leaderboard/image.jpg",
      eventsParticipated: 20,
      date: "13/05/2022",
      contact: "0123456789",
      address: "Phnom Penh",
      status: "Pending",
      reason: `I want to join this event because I deeply care about environmental sustainability and want to actively contribute to a cause that promotes eco-consciousness. Volunteering at this event will give me the opportunity to support green initiatives, raise awareness, and be part of a community working toward a healthier planet. I’m enthusiastic, dependable, and ready to assist with any tasks—from setting up booths to engaging with participants—to help make this eco event impactful and inspiring.`,
    },
    {
      name: "Sreyphea",
      profileUrl: "/assets/leaderboard/image.jpg",
      eventsParticipated: 20,
      date: "13/05/2022",
      contact: "0123456789",
      address: "Phnom Penh",
      status: "Pending",
      reason: `I want to join this event because I deeply care about environmental sustainability and want to actively contribute to a cause that promotes eco-consciousness. Volunteering at this event will give me the opportunity to support green initiatives, raise awareness, and be part of a community working toward a healthier planet. I’m enthusiastic, dependable, and ready to assist with any tasks—from setting up booths to engaging with participants—to help make this eco event impactful and inspiring.`,
    },
    {
      name: "Sreyphea",
      profileUrl: "/assets/leaderboard/image.jpg",
      eventsParticipated: 20,
      date: "13/05/2022",
      contact: "0123456789",
      address: "Phnom Penh",
      status: "Pending",
      reason: `I want to join this event because I deeply care about environmental sustainability and want to actively contribute to a cause that promotes eco-consciousness. Volunteering at this event will give me the opportunity to support green initiatives, raise awareness, and be part of a community working toward a healthier planet. I’m enthusiastic, dependable, and ready to assist with any tasks—from setting up booths to engaging with participants—to help make this eco event impactful and inspiring.`,
    },
    {
      name: "Sreyphea",
      profileUrl: "/assets/leaderboard/image.jpg",
      eventsParticipated: 20,
      date: "13/05/2022",
      contact: "0123456789",
      address: "Phnom Penh",
      status: "Pending",
      reason: `I want to join this event because I deeply care about environmental sustainability and want to actively contribute to a cause that promotes eco-consciousness. Volunteering at this event will give me the opportunity to support green initiatives, raise awareness, and be part of a community working toward a healthier planet. I’m enthusiastic, dependable, and ready to assist with any tasks—from setting up booths to engaging with participants—to help make this eco event impactful and inspiring.`,
    },
    {
      name: "Sreyphea",
      profileUrl: "/assets/leaderboard/image.jpg",
      eventsParticipated: 20,
      date: "13/05/2022",
      contact: "0123456789",
      address: "Phnom Penh",
      status: "Pending",
      reason: `I want to join this event because I deeply care about environmental sustainability and want to actively contribute to a cause that promotes eco-consciousness. Volunteering at this event will give me the opportunity to support green initiatives, raise awareness, and be part of a community working toward a healthier planet. I’m enthusiastic, dependable, and ready to assist with any tasks—from setting up booths to engaging with participants—to help make this eco event impactful and inspiring.`,
    },
  ];

  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

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
      <div className="mt-5 space-y-2">
        {volunteerRequests.map((req, i) => (
          <ActionVolunteerComponent
            key={i}
            name={req.name}
            date={req.date}
            status={req.status}
            isAlternateRow={i % 2 === 1}
            onClick={() => setSelectedVolunteer(req)}
          />
        ))}
      </div>

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
