"use client";
import React from "react";

import { Label } from "@/components/ui/label";
import { SelectComponent } from "./SelectComponent";
import { DateRangComponent } from "./DateRangComponent";
const FilterEcoEventComponent = () => {
  return (
    <section className="w-full mb-8 justify-center  flex flex-col gap-4 md:flex-row md:items-center md:gap-6 ">
      {/* Search bar */}
      <div className="flex justify-center  items-end gap-x-8">
        <h1 className="h-9 text-2xl font-semibold text-green ">Filter </h1>
        <div className="flex w-full gap-3 md:gap-4">
          <div className="grid w-[200px] gap-1.5">
            {/* <Label className="text-dark-gray">Location</Label> */}
            <SelectComponent className="w-[400px]" operator={"Location"} />
          </div>
          <div className="grid w-[200px] gap-1.5">
            {/* <Label className="text-dark-gray">Event type</Label> */}
            <SelectComponent operator="Event_type" />
          </div>
          <div className="grid w-[200px] gap-1.5">
            {/* <Label className="text-dark-gray">Contribute types</Label> */}
            <SelectComponent operator="Contribute_type" />
          </div>
          <div className="grid w-[200px] gap-1.5">
            {/* <Label className="text-dark-gray">Categories</Label> */}
            <SelectComponent operator="Categories" />
          </div>
          <div className="grid w-[200px] gap-1.5">
            {/* <Label className="text-dark-gray"> Slot</Label> */}
            <SelectComponent operator="Slot" />
          </div>
          <div className="grid gap-1.5">
            {/* <Label className="text-dark-gray"> Date range</Label> */}
            <DateRangComponent />
          </div>
        </div>
      </div>

      {/* Label */}
      {/* <span className="hidden md:inline font-semibold text-sm text-muted-foreground">
        Filter:
      </span> */}

      {/* Filter dropdowns */}
    </section>
  );
};

export default FilterEcoEventComponent;
