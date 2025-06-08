"use client";
import {
  getAllContributeTypesService,
  getAllEventCategoriesService,
  getAllEventTypesService,
  getAllProvincesService,
  fetchFilteredEventsService,
} from "@/service/ecoEventService"; // ✅ import your service
import { useEffect, useState } from "react";
import { SelectComponent } from "./SelectComponent";
import { DateRangComponent } from "./DateRangComponent";

const FilterEcoEventComponent = () => {
  // Existing state
  const [provinceList, setProvinceList] = useState([]);
  const [eventTypeList, setEventTypeList] = useState([]);
  const [contributeTypeList, setContributeTypeList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); // ✅ NEW

  const [filters, setFilters] = useState({
    province: "",
    eventType: "",
    contributeType: "",
    category: "",
    slot: "",
    dateRange: { start: null, end: null },
  });

  useEffect(() => {
    const fetchData = async () => {
      const provinces = await getAllProvincesService();
      const events = await getAllEventTypesService();
      const contributes = await getAllContributeTypesService();
      const cats = await getAllEventCategoriesService();

      setProvinceList(provinces.data);
      setEventTypeList(events.data);
      setContributeTypeList(
        contributes.data.map((item) => ({
          contributeTypeId: item.contributeTypeId,
          contributeTypeName: item.contributeTypeName,
        }))
      );
      setCategories(cats.data);
    };

    fetchData();
  }, []);

  const handleFilterChange = (operator, value) => {
    setFilters((prev) => ({
      ...prev,
      [operator.toLowerCase().replace("_", "")]: value,
    }));
  };

  const handleDateChange = (start, end) => {
    setFilters((prev) => ({
      ...prev,
      dateRange: { start, end },
    }));
  };

  // Fetch filtered events whenever filters change
  useEffect(() => {
    const fetchFiltered = async () => {
      const response = await fetchFilteredEventsService({
        provinceId: filters.province,
        eventTypeId: filters.eventType,
        contributeTypeId: filters.contributeType,
        categoryId: filters.category,
        slotStatus: filters.slot,
        startDate: filters.dateRange.start,
        endDate: filters.dateRange.end,
      });

      if (response?.data) {
        setFilteredEvents(response.data);
        console.log("Filtered Events:", response.data);
      }
    };

    fetchFiltered();
  }, [filters]);

  return (
    <>
      <section className="w-full mb-8 justify-center flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex justify-center items-center gap-x-20">
          <h1 className="h-9 text-2xl font-semibold text-green">Filter</h1>
          <div className="flex w-full gap-3 md:gap-7 flex-row">
            <SelectComponent
              className="w-[235px]"
              values={provinceList}
              operator="province"
              onChange={handleFilterChange}
            />
            <SelectComponent
              className="w-[235px]"
              values={eventTypeList}
              operator="eventType"
              onChange={handleFilterChange}
            />
            <SelectComponent
              className="w-[235px]"
              values={contributeTypeList}
              operator="contributeType"
              onChange={handleFilterChange}
            />
            <SelectComponent
              className="w-[235px]"
              values={categories}
              operator="category"
              onChange={handleFilterChange}
            />
            <SelectComponent
              className="w-[25px]"
              operator="slot"
              onChange={handleFilterChange}
            />
            <DateRangComponent onDateChange={handleDateChange} />
          </div>
        </div>
      </section>

      {/* Render filtered results (test output) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="border p-4 rounded-md shadow">
            <h3 className="text-xl font-semibold">{event.eventName}</h3>
            <p className="text-sm text-gray-600">
              {event.eventTypeName} - {event.provinceName}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterEcoEventComponent;
