"use client";

import React, { useEffect, useState } from "react";
import {
  getAllProvincesService,
  getAllEventTypesService,
  getAllContributeTypesService,
  getAllEventCategoriesService,
} from "@/service/ecoEventService";
import { DateComponent } from "./DateComponent";
import { SelectHistoryComponent } from "./selectHistoryComponent";
const slots = [
  { slotId:1, label: "Available", value: "AVAILABLE"},
  { slotId:2, label: "Unavailable", value: "UNAVAILABLE"},
];
const contributeTypes = [
  { contributeTypeId:1, label: "Fee", value: "FEE" },
  { contributeTypeId:2, label: "Free", value: "FREE" },
  { contributeTypeId:3, label: "Donation", value: "DONATION" },
  { contributeTypeId:4, label: "Volunteer", value: "VOLUNTEER" },
  { contributeTypeId:5, label: "Donation and Volunteer", value: "DONATION AND VOLUNTEER" },
]
export default function FilterEventHistoryComponent({ onApplyFilters }) {
  const [provinceList, setProvinceList] = useState([]);
  const [eventTypeList, setEventTypeList] = useState([]);
  const [contributeTypeList, setContributeTypeList] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [allContributeTypes, setAllContributeTypes] = useState([]);

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
        // const uniqueContributes = Array.from(
        //   new Map(
        //     events.data.flatMap((event) =>
        //       event.contributeTypes.map((ct) => [ct.contributeTypeId, ct])
        //     )
        //   ).values()
        // );
        // setAllContributeTypes([
        //   { contributeTypeId: "all", contributeTypeName: "All" },
        //   ...uniqueContributes,
        // ]);

        // Set all contribute types
        setContributeTypeList([
          { contributeTypeId: "all", contributeTypeName: "All" },
          ...(contributeTypes || []),
        ]);
      } catch (error) {
        console.error("Error fetching filter data:", error);
      }
      
    };
    fetchData();
    
  }, []);

  const handleFilterChange = (operator, value) => {
    // const key = `${operator}Id`;
    const updated = {
      ...filters,
      [`${operator}Id`]:
        value === "all" ? "" : operator === "eventType" ? Number(value) : value,
      ...(operator === "eventType" && { contributeTypeId: "" }),
    };
    setFilters(updated);
    onApplyFilters(updated);
  };

  const handleSlotChange = (operation,value) => {
    const updated = { ...filters, slotStatus: value };
    setFilters(updated);
    onApplyFilters(updated);
  };

  const handleDateChange = (start, end) => {
    const updated = { ...filters, startDate: start, endDate: end };
    setFilters(updated);
    onApplyFilters(updated);
  };
  return (
    <section className="w-full mb-8 justify-center flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <h1 className="h-9 text-2xl font-semibold text-green">Filter</h1>
      <div className="flex w-full gap-3 md:gap-7 flex-row">
        <SelectHistoryComponent values={provinceList} operator="province" onChange={handleFilterChange} value={filters.provinceId}/>
        <SelectHistoryComponent values={eventTypeList} operator="eventType" onChange={handleFilterChange} value={filters.eventTypeId}/>
        <SelectHistoryComponent values={contributeTypeList} operator="contributeType" onChange={handleFilterChange} value={filters.contributeTypeId}/>
        <SelectHistoryComponent values={categories} operator="category" onChange={handleFilterChange} value={filters.categoryId}/>
        <SelectHistoryComponent values={slots} operator="slot" onChange={handleSlotChange} value={filters.slotStatus}/>
        <DateComponent onDateChange={handleDateChange} />
      </div>
    </section>
  );
}