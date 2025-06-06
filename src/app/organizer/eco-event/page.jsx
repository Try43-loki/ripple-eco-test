import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import React from "react";
import EcoeventFilterComponent from "./_component/EcoeventFilterComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import { getAllEcoEventService } from "@/service/ecoEventService";

export default async function EcoEventPage() {
  const response = await getAllEcoEventService();
  const events = response?.data ?? [];

  const headerSection = {
    title: "Eco‑Event",
    text: "Speak up for nature by contacting your elected officials or pledging to take action. Make a difference for conservation—we can’t do it without you!",
    link: "Create Eco‑Event",
  };

  return (
    <main className="w-full">
      <section className="flex flex-col w-full">
        <DashboardHeaderComponent
          title={headerSection.title}
          text={headerSection.text}
          link={headerSection.link}
          buttonAction="create-event"
        />

        <div className="w-full border-b border-lightes-white mt-5" />

        <EcoeventFilterComponent className="w-full" />

        <div className="flex flex-wrap justify-start gap-5 mt-6">
          {events?.map((event) => (
            <div key={event?.eventId}>
              <CardEcoEventComponent event={event} />
            </div>
            // <CardEcoEventComponent
            //   key={item.eventId}
            //   operator="organizer"
            //   href={`/eco-event/${item.eventId}`}
            //   type={item.eventTypes.eventType}
            //   contribute={item.contributeTypesResponse.contributeTypeName}
            //   category={item.category.categoryName}
            //   status={item.eventStatus}
            //   date={item.startDate}
            //   participats={item.maxSlot}
            //   title={item.title}
            //   location={item.provinces?.provinceName}
            //   image={item.image}
            // />
          ))}
        </div>
      </section>
    </main>
  );
}
