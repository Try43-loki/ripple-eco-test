import HeroSectionComponent from "@/components/HeroSectionComponent";
import React from "react";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import FilterEcoEventComponent from "./_component/FilterEcoEventComponent";
import Link from "next/link";
import { events } from "@/service/mockData";

const EcoEventPage = () => {
  const data = events;
  const heroSectionText = {
    title: "ECO EVENT",
    description:
      "Join our EcoEvent to share ideas, connect, and act for a healthier planet.",
    search: true,
  };

  return (
    <main className="w-full">
      <article className="flex flex-col justify-center items-center">
        {/* Hero Secition */}
        <HeroSectionComponent
          text={heroSectionText.title}
          description={heroSectionText.description}
          showSearchBar={heroSectionText.search}
        />

        {/* Filter Section */}

        {/* Card Eco-Event Section */}
        <section className="px-4 md:px-20 lg:px-[150px] pb-12 mt-5">
          <FilterEcoEventComponent />
          <div className="flex flex-wrap gap-5 w-full justify-between">
            {data?.map((event, index) => (
              <CardEcoEventComponent
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
      </article>
    </main>
  );
};

export default EcoEventPage;
