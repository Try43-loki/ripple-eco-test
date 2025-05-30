"use client";
import React from "react";
import FilterSelectComponent from "./FilterSelectComponent";
import SearchBarComponent from "@/components/SearchBarComponent";

import { SelectComponent } from "./SelectComponent";
import { Label } from "@/components/ui/label";
import SearchComponent from "./SearchComponent";
const EcoEventFilterComponent = () => {
  return (
    <section className="w-full py-4 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      {/* Search bar */}
      <div className="w-full">
        <SearchBarComponent />
      </div>

      {/* Label */}
      <span className="hidden md:inline font-semibold text-sm text-muted-foreground">
        Filter:
      </span>

      {/* Filter dropdowns */}
      <div className="flex w-fullgap-3 md:gap-4">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label>Location</Label>
          <SearchComponent operator={"dashboard"} />
        </div>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label>Event type</Label>
          <SelectComponent operator="Event_type" />
        </div>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label>Contribute types</Label>
          <SelectComponent operator="Contribute_type" />
        </div>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label>Categories</Label>
          <SelectComponent operator="Categories" />
        </div>
        <div className="grid w-full max-w-sm gap-1.5">
          <Label>Slot</Label>
          <SelectComponent operator="Slot" />
        </div>
      </div>
    </section>
  );
};

export default EcoEventFilterComponent;
