import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import React from "react";
import EcoeventFilterComponent from "./_component/EcoeventFilterComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import Link from "next/link";
import { events } from "@/service/mockData";

function EcoEventPage() {
  const data = events;
  const headerSection = {
    title: "Eco-Event",
    text: "Speak up for nature by contacting your elected officials or pledging to take action. Make a difference for conservation—we can’t do it without you!",
    link: "Create Eco-Event",
  };

  return (
    <main className="w-full">
      <section className="flex flex-col ">
        <DashboardHeaderComponent
          title={headerSection.title}
          text={headerSection.text}
          link={headerSection.link}
          buttonAction={"create-event"}
        />

        <div className="w-full border-b border-lightes-white mt-5" />

        <EcoeventFilterComponent className="w-full" />

        <div className="flex flex-wrap justify-between gap-10 mt-6">
          {data?.map((event, index) => (
            <CardEcoEventComponent
              operator={"organizer"}
              key={index}
              href={"/eco-event/1"}
              type={event?.eventTypes?.eventType}
              contribute={event?.contributeTypesResponse?.contributeTypeName}
              category={event?.category?.categoryName}
              status={event?.eventStatus}
              date={event?.startDate}
              participats={event?.maxSlot}
              title={event?.title}
              location={event?.provinces?.provinceName}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default EcoEventPage;
