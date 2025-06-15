"use client";
import React, { useEffect, useState } from "react";
import FilterEventHistoryComponent from "./FilterEventHistory";
import CardEndedEcoEventComponent from "./CardEndedEcoEvent";
import { fetchFilteredEventsHistoryService, getAllEcoEventByUserIDService, getAllEventHistoryService } from "@/service/ecoEventService";

const EvenHistoryComponent = ({userID}) => {
  const [allEventData, setAllEventData] = useState([]);
  const [filteredEventData, setFilteredEventData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const eventsRes =
          await getAllEcoEventByUserIDService(userID);
        const events = eventsRes?.data || [];
        setAllEventData(events);
        setFilteredEventData(events);
      } catch (error) {
        console.error("Failed to load data", error);
      }
    }

    fetchData();
  }, []);
  const applyFilters = async (filters) => {
    try {
      const filteredData = await fetchFilteredEventsHistoryService(userID,filters);
      const filteredEvent = filteredData?.data;
      setFilteredEventData(filteredEvent);
    } catch (error) {
      console.error("Failed to apply filters:", error);
    }
  };
  return (
    <section className="w-full">
      <div className="w-full">
        <FilterEventHistoryComponent onApplyFilters={applyFilters} />
      </div>
      <div className="md:gap-x-25.5 md:gap-y-15 mt-0 w-full flex flex-row flex-wrap md:justify-start">
        {filteredEventData?.length > 0 ? (
          filteredEventData.map((event) => (
            <CardEndedEcoEventComponent key={event.eventId} event={event} />
          ))
        ) : (
          <p className="text-red text-center w-full">No events found.</p>
        )}
      </div>
    </section>
  );
};

export default EvenHistoryComponent;
