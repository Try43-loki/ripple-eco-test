import CardEcoEventComponent from "@/components/CardEcoEventComponent";

import React from "react";
import { getAllEcoEventService } from "@/service/ecoEventService";

const EcoEventSectionComponent = async () => {
  const response = await getAllEcoEventService();
  const events = response?.data ?? [];

  return (
    <div>
      <section className="w-full bg-[#F6F6EE] py-20">
        <div className="max-w-full mx-auto text-center px-6 md:px-20 lg:px-45">
          <p className="text-green text-base md:text-xl lg:text-2xl pb-2 font-medium">
            ECO EVENT
          </p>
          <h2 className="text-dark-green text-2xl md:text-3xl lg:text-4xl font-bold">
            Join Our EcoEvent
            <span className="block">
              Share, Connect, and Act for a Greener Future
            </span>
          </h2>

          <div className="mt-10 overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]">
            <div className="flex gap-6 w-max">
              {data?.map((item, index) => (
                <CardEcoEventComponent
                  key={index}
                  href={`/eco-event/${item?.eventId}`}
                  type={item?.eventTypes?.eventType}
                  image={item?.image}
                  contribute={item?.contributeTypesResponse?.contributeTypeName}
                  category={item?.category?.categoryName}
                  status={item?.eventStatus}
                  date={item?.startDate}
                  participats={item?.maxSlot}
                  title={item?.title}
                  location={item?.provinces?.provinceName}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcoEventSectionComponent;
