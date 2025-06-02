import React from "react";
import TotalVolunteerComponent from "./_component/TotalVolunteerComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import VolunteerRequestComponent from "./_component/VolunteerRequestComponent";
import { events } from "@/service/mockData";

function VolunteerPage() {
  const data = events;
  return (
    <main className="w-full">
      <section className="flex flex-col">
        {/* Total Volunteer Section */}
        <div className="py-5">
          <TotalVolunteerComponent />
        </div>

        {/* Upcoming and Volunteer Request Section */}
        <article className="flex gap-20">
          {/* Upcoming Event Section */}
          <div className="flex-col">
            <p className="text-base text-dark-green pb-5 font-medium">
              Upcoming Event
            </p>
            <div className="h-[500px] overflow-y-scroll">
              {data?.map((event, index) => (
                <CardEcoEventComponent
                  operator={"organizer"}
                  key={index}
                  href={"/eco-event/1"}
                  type={event?.eventTypes?.eventType}
                  contribute={
                    event?.contributeTypesResponse?.contributeTypeName
                  }
                  category={event?.category?.categoryName}
                  status={event?.eventStatus}
                  date={event?.startDate}
                  participats={event?.maxSlot}
                  title={event?.title}
                  location={event?.provinces?.provinceName}
                />
              ))}
            </div>
          </div>

          {/* Volunteer Request Section */}

          <div className="w-full">
            <VolunteerRequestComponent />
          </div>
        </article>
      </section>
    </main>
  );
}

export default VolunteerPage;
