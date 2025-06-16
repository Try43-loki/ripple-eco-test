"use client";

import React, { useEffect, useState } from "react";
import {
  getAllProvincesService,
  getAllEventTypesService,
  getAllContributeTypesService,
  getAllEventCategoriesService,
} from "@/service/ecoEventService";
import { DateComponent } from "./DateComponent";
import { SelectComponent } from "../../eco-event/_component/SelectComponent";
const slots = [
  { slotId:1, label: "Available", value: "AVAILABLE"},
  { slotId:2, label: "Unavailable", value: "UNAVAILABLE"},
];
export default function FilterEventHistoryComponent({ onApplyFilters }) {
  const [provinceList, setProvinceList] = useState([]);
  const [eventTypeList, setEventTypeList] = useState([]);
  const [contributeTypeList, setContributeTypeList] = useState([]);
  const [categories, setCategories] = useState([]);
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
      const [
        provinces,
        eventTypes,
        contributeTypes,
        categories,
      ] = await Promise.all([
        getAllProvincesService(),
        getAllEventTypesService(),
        getAllContributeTypesService(),
        getAllEventCategoriesService(),
      ]);
      setProvinceList(provinces.data || []);
      setEventTypeList(eventTypes.data || []);
      setContributeTypeList(contributeTypes.data || []);
      setCategories(categories.data || []);
    };
    fetchData();
  }, []);

  const handleFilterChange = (operator, value) => {
    const key = `${operator}Id`;
    const updated = { ...filters, [key]: value };
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
        <SelectComponent values={provinceList} operator="province" onChange={handleFilterChange} />
        <SelectComponent values={eventTypeList} operator="eventType" onChange={handleFilterChange} />
        <SelectComponent values={contributeTypeList} operator="contributeType" onChange={handleFilterChange} />
        <SelectComponent values={categories} operator="category" onChange={handleFilterChange} />
        <SelectComponent values={slots} operator="slot" onChange={handleSlotChange} />
        <DateComponent onDateChange={handleDateChange} />
      </div>
    </section>
  );
}