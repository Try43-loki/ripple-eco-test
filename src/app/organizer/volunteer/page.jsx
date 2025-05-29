import React from "react";
import TotalVolunteerComponent from "./_component/TotalVolunteerComponent";
import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import VolunteerRequestComponent from "./_component/VolunteerRequestComponent";

function VolunteerPage() {
  return (
    <main className="w-full">
      <section className="flex flex-col">
        {/* Total Volunteer Section */}
        <div className="py-5">
          <TotalVolunteerComponent />
        </div>

        {/* Upcoming and Volunteer Request Section */}
        <article className="flex gap-20">
          {/* Upcoming Event Section */}
          <div className="flex-col">
            <p className="text-base text-dark-green pb-5 font-medium">
              Upcoming Event
            </p>
            <div className="h-[500px]">
              <CardEcoEventComponent href={""} />
            </div>
          </div>

          {/* Volunteer Request Section */}

          <div className="w-full">
            <VolunteerRequestComponent />
          </div>
        </article>
      </section>
    </main>
  );
}

export default VolunteerPage;
