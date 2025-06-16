"use client";
import React from "react";
import { SelectComponent } from "./SelectComponent";
import SearchComponent from "./SearchComponent";
import { DateRangComponent } from "./DateRangComponent";

const EcoEventFilterComponent = () => {
  return (
    <section className="w-full py-4 flex flex-wrap gap-4 items-center">
      <div className="w-full md:max-w-40">
        <SearchComponent
          className="w-full cursor-pointer"
          operator="dashboard"
        />
      </div>
      <div className="w-full md:max-w-42 ">
        <SelectComponent
          className="w-full cursor-pointer"
          operator="Event type"
        />
      </div>
      <div className="w-full md:max-w-48 ">
        <SelectComponent
          className="w-full cursor-pointer"
          operator="Contribute type"
        />
      </div>
      <div className="w-full md:max-w-48 ">
        <SelectComponent
          className="w-full cursor-pointer"
          operator="Categories"
        />
      </div>
      <div className="w-full md:max-w-40 ">
        <SelectComponent className="w-full cursor-pointer" operator="Slot" />
      </div>
      <div className="w-full md:max-w-32">
        <DateRangComponent className="cursor-pointer" />
      </div>
    </section>
  );
};

export default EcoEventFilterComponent;
