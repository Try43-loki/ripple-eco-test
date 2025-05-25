import HeroSectionComponent from "@/components/HeroSectionComponent";
import React from "react";

const EcoEventPage = () => {
  const heroSectionText = {
    title: "ECO EVENT",
    description:
      "Join our EcoEvent to share ideas, connect, and act for a healthier planet.",
    search: true,
  };
  return (
    <main className="w-full">
      <article className="flex">
        <HeroSectionComponent
          text={heroSectionText.title}
          description={heroSectionText.description}
          showSearchBar={heroSectionText.search}
        />
      </article>
    </main>
  );
};

export default EcoEventPage;
