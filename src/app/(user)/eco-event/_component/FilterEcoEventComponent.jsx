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

const FilterEcoEventComponent = () => {
  const router = useRouter();

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
      const provinces = await getAllProvincesService();
      const events = await getAllEventTypesService();
      const contributes = await getAllContributeTypesService();
      const cats = await getAllEventCategoriesService();

      setProvinceList(provinces.data);
      setEventTypeList(events.data);
      setContributeTypeList(contributes.data);
      setCategories(cats.data);
    };

    fetchData();
  }, []);

  //  search
  const updateRoute = (updatedFilters) => {
    const searchParams = new URLSearchParams();

    Object.entries(updatedFilters).forEach(([key, value]) => {
      if (value) searchParams.set(key, value);
    });

    router.push(`/eco-event?${searchParams.toString()}`);
  };

  // filter
  const handleFilterChange = (operator, value) => {
    const updated = {
      ...filters,
      [`${operator}Id`]: value,
    };

    setFilters(updated);
    updateRoute(updated);
  };

  const handleSlotChange = (value) => {
    const updated = {
      ...filters,
      slotStatus: value,
    };

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

  return (
    <section className="w-full mb-8 justify-center flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <div className="flex justify-center items-center gap-x-20">
        <h1 className="h-9 text-2xl font-semibold text-green">Filter</h1>
        <div className="flex w-full gap-3 md:gap-7 flex-row ">
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
            className="w-[235px]"
            values={[]}
            operator="slot"
            onChange={handleSlotChange}
          />
          <DateRangComponent onDateChange={handleDateChange} />
        </div>
      </div>
    </section>
  );
};

export default FilterEcoEventComponent;
