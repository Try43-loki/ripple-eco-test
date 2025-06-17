"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAllContributeTypesService,
  getAllEventCategoriesService,
  getAllEventTypesService,
  getAllProvincesService,
} from "@/service/ecoEventService";
import { SelectComponent } from "./SelectComponent";
import { DateRangComponent } from "./DateRangComponent";

export const slots = [
  { label: "All", value: "ALL" },
  { label: "Available", value: "AVAILABLE" },
  { label: "Unavailable", value: "UNAVAILABLE" },
];

const FilterEcoEventComponent = () => {
  const router = useRouter();

  const [provinceList, setProvinceList] = useState([]);
  const [eventTypeList, setEventTypeList] = useState([]);
  const [contributeTypeList, setContributeTypeList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allContributeTypes, setAllContributeTypes] = useState([]);

  const [filters, setFilters] = useState({
    provinceId: "",
    eventTypeId: "",
    contributeTypeId: "",
    categoryId: "",
    slotStatus: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provinces = await getAllProvincesService();
        const events = await getAllEventTypesService();
        const contributes = await getAllContributeTypesService();
        const cats = await getAllEventCategoriesService();

        // Add "All" option to provinces and categories
        setProvinceList([
          { provinceId: "all", provinceName: "All" },
          ...(provinces.data || []),
        ]);
        setCategories([
          { categoryId: "all", categoryName: "All" },
          ...(cats.data || []),
        ]);

        // Process event types and contribute types
        const eventTypesWithAll = [
          { eventTypeId: "all", eventType: "All", contributeTypes: [] },
          ...(events.data || []),
        ];
        setEventTypeList(eventTypesWithAll);

        // Store all contribute types
        const uniqueContributes = Array.from(
          new Map(
            events.data.flatMap((event) =>
              event.contributeTypes.map((ct) => [ct.contributeTypeId, ct])
            )
          ).values()
        );
        setAllContributeTypes([
          { contributeTypeId: "all", contributeTypeName: "All" },
          ...uniqueContributes,
        ]);

        // Set all contribute types
        setContributeTypeList([
          { contributeTypeId: "all", contributeTypeName: "All" },
          ...uniqueContributes,
        ]);
      } catch (error) {
        console.error("Error fetching filter data:", error);
      }
    };

    fetchData();
  }, []);

  // Update contributeTypeList when eventTypeId changes
  useEffect(() => {
    // console.log("filters.eventTypeId:", filters.eventTypeId);
    // console.log("eventTypeList:", eventTypeList);
    if (filters.eventTypeId && filters.eventTypeId !== "all") {
      const selectedEventType = eventTypeList.find(
        (et) => et.eventTypeId === filters.eventTypeId
      );
      // console.log("selectedEventType:", selectedEventType);
      if (selectedEventType) {
        setContributeTypeList([
          { contributeTypeId: "all", contributeTypeName: "All" },
          ...(selectedEventType.contributeTypes || []),
        ]);
      }
    } else {
      setContributeTypeList(allContributeTypes);
    }
  }, [filters.eventTypeId, eventTypeList, allContributeTypes]);

  const updateRoute = (updatedFilters) => {
    const searchParams = new URLSearchParams();

    Object.entries(updatedFilters).forEach(([key, value]) => {
      if (value && value !== "all") searchParams.set(key, value);
    });

    router.push(`/eco-event?${searchParams.toString()}`);
  };

  const handleFilterChange = (operator, value) => {
    const updated = {
      ...filters,
      [`${operator}Id`]:
        value === "all" ? "" : operator === "eventType" ? Number(value) : value,
      ...(operator === "eventType" && { contributeTypeId: "" }),
    };
    setFilters(updated);
    updateRoute(updated);
  };

  const handleSlotChange = (operator, value) => {
    // console.log("valueee", value);
    const updated = {
      ...filters,
      slotStatus: value === "all" ? "" : value,
    };
    console.log("update", updated);
    setFilters(updated);
    updateRoute(updated);
  };

  const handleDateChange = (start, end) => {
    const updated = {
      ...filters,
      startDate: start,
      endDate: end,
    };

    setFilters(updated);
    updateRoute(updated);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      provinceId: "",
      eventTypeId: "",
      contributeTypeId: "",
      categoryId: "",
      slotStatus: "",
      startDate: "",
      endDate: "",
    };
    setFilters(clearedFilters);
    router.push("/eco-event");
  };

  // console.log("filterrr", filters.eventTypeId);
  return (
    <section className="w-full mb-8 justify-start flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <div className="flex w-full items-center justify-between gap-x-10">
        <h1 className="h-9 w-20 text-lg font-semibold text-dark-gray">
          Filter by:
        </h1>

        <div className="flex items-center w-full gap-x-5 flex-row">
          <SelectComponent
            className="w-[210px]"
            values={provinceList}
            operator="province"
            onChange={handleFilterChange}
            value={filters.provinceId}
          />
          <SelectComponent
            className="w-[210px]"
            values={eventTypeList}
            operator="eventType"
            onChange={handleFilterChange}
            value={filters.eventTypeId}
          />
          <SelectComponent
            className="w-[210px]"
            values={contributeTypeList}
            operator="contributeType"
            onChange={handleFilterChange}
            value={filters.contributeTypeId}
          />
          <SelectComponent
            className="w-[210px]"
            values={categories}
            operator="category"
            onChange={handleFilterChange}
            value={filters.categoryId}
          />
          <SelectComponent
            className="w-[210px]"
            values={slots}
            operator="slot"
            onChange={handleSlotChange}
            value={filters.slotStatus}
          />
          <DateRangComponent onDateChange={handleDateChange} />
        </div>
      </div>
    </section>
  );
};

export default FilterEcoEventComponent;
