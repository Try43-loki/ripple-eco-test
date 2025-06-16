import React from "react";
import HeroSectionNaturalDisasterDashboardComponent from "./_component/HeroSectionNaturalDisasterDashboardComponent";
import RecentDisasterComponent from "@/app/(user)/natural-disaster/_components/RecentDisasterComponent";

function NaturalDisaster() {
  return (
    <section className="flex w-full flex-col gap-9">
      <HeroSectionNaturalDisasterDashboardComponent />
      {/* Section Map */}

      {/* Section Recently */}
      <RecentDisasterComponent isDashboard={true} />
    </section>
  );
}

export default NaturalDisaster;
