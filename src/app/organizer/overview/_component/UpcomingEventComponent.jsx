import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import CardEcoEventInOverviewComponent from "@/components/CardEcoEventInOverviewComponent";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";

function transformUpcomingEvents(upcomingEvents) {
  return upcomingEvents?.map((event) => {
    const startDate = new Date(event?.startDate);
    const day = startDate.toLocaleString("en-US", { weekday: "short" }); // e.g. "Tue"
    const date = startDate.getDate().toString(); // e.g. "12"

    // Compose startTime from agenda[0] day and first activity time, if available
    let startTime = "N/A";
    if (event?.agenda?.length && event.agenda[0].activitiesList?.length) {
      const dateStr = event?.agenda[0].date; // e.g. "2025-06-10"
      const timeStr = event?.agenda[0].activitiesList[0].time; // e.g. "09:00"
      const dateTime = new Date(`${dateStr}T${timeStr}:00`);
      startTime = dateTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });
    }

    return {
      id: event.eventId,
      date: date,
      day: day,
      title: event.title,
      location:
        formatSnakeToTitleCase(event.province?.provinceName) ||
        "Unknown location",
      startAt: startTime,
      type: event.eventType?.eventType || "N/A",
      category: formatSnakeToTitleCase(event.category?.categoryName),
    };
  });
}

function formatSnakeToTitleCase(text) {
  // Make "TREE_PLANTING" → "Tree Planting"
  if (!text) return "Unknown";
  return text
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function UpcomingEventComponent({ upcomingEvent }) {
  const firstCard = upcomingEvent;
  const nextCards = upcomingEvent?.slice(1, 4);
  return (
    <>
      <section>
        <h1 className="text-md font-semibold  text-dark-green my-3">
          Upcoming Event
        </h1>
        {/* <div className="my-2">
          {firstCard && (
            <CardEcoEventInOverviewComponent
              key={firstCard.eventId}
              operator="organizer" // or "organizer" depending on your context
              type={firstCard.eventType?.eventType}
              contribute={firstCard.contributeTypesResponse?.contributeTypeName}
              eventStatus={firstCard.eventStatus}
              event={{
                ecoeventid: firstCard.eventId,
                eventTypes: firstCard.eventType,
                category: firstCard.category,
                image: firstCard.image,
                startDate: firstCard.startDate,
                title: firstCard.title,
                provinces: firstCard.province,
                maxSlot: firstCard.maxSlot,
                eventStatus: firstCard.eventStatus,
              }}
            />
          )}
        </div> */}
        <div className="my-2">
          {firstCard && <CardEcoEventComponent event={upcomingEvent} />}
        </div>
        {transformUpcomingEvents(nextCards)?.map((event, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <Link
              key={index}
              href={`/organizer/eco-event/${event?.id}`}
              className="w-full cursor-pointer"
            >
              <section
                key={event.id}
                className="flex justify-center items-center flex-col gap-y-4 w-full"
              >
                <article
                  className={`p-2 px-3 rounded-xl flex justify-start gap-x-4 items-center w-full ${
                    isOdd ? "bg-lightest-green" : "bg-[#FFFCF5]"
                  }`}
                >
                  {/* Date Box */}
                  <div
                    className={`flex justify-center items-center flex-col p-1 py-2 rounded-lg w-12 ${
                      isOdd ? "bg-green" : "bg-[#704F38]"
                    }`}
                  >
                    <h3 className="text-white text-xl font-semibold">
                      {event.date}
                    </h3>
                    <p className="text-sm text-white font-light">{event.day}</p>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-y-1">
                    <h4 className="text-black text-label font-medium">
                      {event.title}
                    </h4>
                    <p className="text-light-green text-sub-info">
                      {event.location} • {event.startAt}
                    </p>
                    <div className="flex items-center gap-x-1 text-sub-info text-strong-gray font-light">
                      <LayoutDashboard size={12} />
                      <span>
                        {event.type} | {event.category}
                      </span>
                    </div>
                  </div>
                </article>
              </section>
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default UpcomingEventComponent;
