import HeroSectionComponent from "@/components/HeroSectionComponent";
import React from "react";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import FilterEcoEventComponent from "./_component/FilterEcoEventComponent";
import Link from "next/link";

const EcoEventPage = () => {
  const heroSectionText = {
    title: "ECO EVENT",
    description:
      "Join our EcoEvent to share ideas, connect, and act for a healthier planet.",
    search: true,
  };

  return (
    <main className="w-full">
      <article className="flex flex-col">
        {/* Hero Secition */}
        <HeroSectionComponent
          text={heroSectionText.title}
          description={heroSectionText.description}
          showSearchBar={heroSectionText.search}
        />

        {/* Filter Section */}
        <FilterEcoEventComponent />

        {/* Card Eco-Event Section */}
        <section className="px-4 md:px-20 lg:px-[150px] pb-12">
          <div className="flex flex-wrap gap-5 lg:gap-12 justify-center">
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <CardEcoEventComponent href={`/eco-event/${2}`} />
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default EcoEventPage;
