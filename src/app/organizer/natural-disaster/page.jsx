import React from "react";
import HeroSectionNaturalDisasterDashboardComponent from "./_component/HeroSectionNaturalDisasterDashboardComponent";
import MapComponent from "@/app/(user)/natural-disaster/_components/MapComponent";
import RecentDisasterComponent from "@/app/(user)/natural-disaster/_components/RecentDisasterComponent";

function NaturalDisaster() {
  return (
    <section className="flex flex-col gap-9">
      <HeroSectionNaturalDisasterDashboardComponent />
      {/* Section Map */}
      <MapComponent isDashboard={true} />

      {/* Section Recently */}
      <RecentDisasterComponent isDashboard={true} />
    </section>
  );
}

export default NaturalDisaster;
