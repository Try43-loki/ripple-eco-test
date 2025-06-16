import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import React from "react";
import EcoeventFilterComponent from "./_component/EcoeventFilterComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import {
  fetchFilteredEventsService,
  getAllEcoEventService,
  getEcoEventByTitleService,
} from "@/service/ecoEventService";
import SearchBarComponent from "@/components/SearchBarComponent";

export default async function EcoEventPage({ searchParams: ParamsPromise }) {
  let cardData = [];
  const searchParams = (await ParamsPromise) || null;
  const searchQuery = searchParams?.search || "";
  const province = searchParams?.provinceId || "";
  const eventType = searchParams?.eventTypeId || "";
  const contributeType = searchParams?.contributeTypeId || "";
  const category = searchParams?.categoryId || "";
  const slot = searchParams?.slot || "";
  const startDate = searchParams?.startDate || "";
  const endDate = searchParams?.endDate || "";

  const shouldFilter =
    province ||
    eventType ||
    contributeType ||
    category ||
    slot ||
    startDate ||
    endDate;

  if (searchQuery !== "") {
    const response = await getEcoEventByTitleService(searchQuery);
    cardData = response?.data ?? [];
  } else if (shouldFilter) {
    const response = await fetchFilteredEventsService({
      provinceId: province,
      eventTypeId: eventType,
      contributeTypeId: contributeType,
      categoryId: category,
      slotStatus: slot,
      startDate,
      endDate,
    });
    cardData = response?.data ?? [];
  } else {
    const response = await getAllEcoEventService();
    cardData = response?.data ?? [];
  }
  cardData.sort(
    (a, b) => new Date(b.startDateTime) - new Date(a.startDateTime)
  );

  // const response = await getAllEcoEventService();
  // const events = response?.data ?? [];
  // console.log("first", events);

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
