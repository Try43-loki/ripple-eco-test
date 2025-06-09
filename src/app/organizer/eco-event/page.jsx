import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import React from "react";
import EcoeventFilterComponent from "./_component/EcoeventFilterComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import {
  getAllEcoEventService,
  getEcoEventByTitleService,
} from "@/service/ecoEventService";
import SearchBarComponent from "@/components/SearchBarComponent";

export default async function EcoEventPage({
  searchParams: searchParamsPromise,
}) {
  let cardData = [];
  const searchParams = (await searchParamsPromise) || null;
  const searchQuery = searchParams?.search || "";

  if (searchQuery !== "") {
    const response = await getEcoEventByTitleService(searchQuery);
    cardData = response?.data ?? [];
  } else {
    const response = await getAllEcoEventService();
    cardData = response?.data ?? [];
  }

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
        <div className="flex w-full items-center justify-between gap-x-7">
          <div className="w-[500px] gap-1.5">
            <SearchBarComponent
              placeholder="Search Eco Event"
              pagePath="/organizer/eco-event"
            />
          </div>

          <EcoeventFilterComponent className="w-full" />
        </div>

        <div className="flex flex-wrap justify-start gap-5 mt-6">
          {cardData?.length > 0 ? (
            cardData.map((event) => (
              <div key={event?.eventId}>
                <CardEcoEventComponent event={event} />
              </div>
            ))
          ) : (
            <p className="text-red text-center w-full">No events found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
