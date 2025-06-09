"use client";
import React from "react";
import { SelectComponent } from "./SelectComponent";
import SearchComponent from "./SearchComponent";
import { DateRangComponent } from "./DateRangComponent";

const EcoEventFilterComponent = () => {
  return (
    <section className="w-full py-4 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      {/* Search bar */}
      <div className="flex w-full items-center justify-between gap-x-7">
        {/* <div className="grid w-[500px] gap-1.5">
          <SearchBarComponent className="grow" />
        </div> */}
        <div className="flex items-center w-full justify-between">
          <div className="grid w-[200px] gap-1.5">
            <SearchComponent className="w-[400px]" operator={"dashboard"} />
          </div>
          <div className="grid w-[200px] gap-1.5">
            <SelectComponent className="w-full" operator="Event type" />
          </div>
          <div className="grid w-[200px] gap-1.5">
            <SelectComponent operator="Contribute type" />
          </div>
          <div className="grid w-[200px] gap-1.5">
            <SelectComponent operator="Categories" />
          </div>
          <div className="grid w-[200px] gap-1.5">
            <SelectComponent operator="Slot" />
          </div>
          <div className="grid  gap-1.5">
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

export default EcoEventFilterComponent;
