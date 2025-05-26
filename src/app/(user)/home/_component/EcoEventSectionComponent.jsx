import CardEcoEventComponent from "@/components/CardEcoEventComponent";
import React from "react";

const EcoEventSectionComponent = () => {
  const events = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Replace with real data later

  return (
    <div>
      <section className="w-full bg-[#F6F6EE] py-20">
        <div className="max-w-full mx-auto text-center px-6 md:px-20 lg:px-45">
          <p className="text-[#3BAA2C] text-base md:text-lg pb-2 font-medium">
            ECO EVENT
          </p>
          <h2 className="text-title text-2xl md:text-3xl lg:text-4xl font-bold">
            Join Our EcoEvent
            <span className="block">
              Share, Connect, and Act for a Greener Future
            </span>
          </h2>

          {/* Scrollable card list with hidden scrollbar */}
          <div className="mt-10 overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]">
            <div className="flex gap-6 w-max">
              {events.map((event, index) => (
                <CardEcoEventComponent key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcoEventSectionComponent;
