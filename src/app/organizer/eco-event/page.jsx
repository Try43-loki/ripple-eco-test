import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import React from "react";
import EcoeventFilterComponent from "./_component/EcoeventFilterComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import Link from "next/link";

function EcoEventPage() {
  const headerSection = {
    title: "Eco-Event",
    text: "Speak up for nature by contacting your elected officials or pledging to take action. Make a difference for conservation—we can’t do it without you!",
    link: "Create Eco-Event",
  };

  return (
    <main>
      <section className="flex flex-col ">
        <DashboardHeaderComponent
          title={headerSection.title}
          text={headerSection.text}
          link={headerSection.link}
        />

        <div className="w-full border-b border-lightes-white mt-5" />

        <EcoeventFilterComponent />

        <div className="flex flex-wrap justify-center gap-8 mt-6">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <Link href={`/organizer/eco-event/${2}`}>
                <CardEcoEventComponent />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default EcoEventPage;
