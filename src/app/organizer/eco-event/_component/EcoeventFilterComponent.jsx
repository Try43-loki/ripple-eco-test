"use client";
import React from "react";
import FilterSelectComponent from "./FilterSelectComponent";
import SearchBarComponent from "@/components/SearchBarComponent";

const filters = {
  province: ["Phnom Penh", "Siem Reap", "Kampot"],
  eventType: ["Hand-on Events", "Seminar"],
  contributeType: [
    "Donation",
    "Volunteer",
    "Volunteer and Donation",
    "Free and Fees",
    "Fees",
  ],
  categoryType: ["Environment Cleaning", "Tree Planting", "Donation"],
  slot: ["Available", "Unavailable"],
};

const EcoeventFilterComponent = () => {
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
        <FilterSelectComponent label="Province" options={filters.province} />
        <FilterSelectComponent label="Event type" options={filters.eventType} />
        <FilterSelectComponent
          label="Contribute Types"
          options={filters.contributeType}
        />
        <FilterSelectComponent
          label="Category Type"
          options={filters.categoryType}
        />
        <FilterSelectComponent label="Slot" options={filters.slot} />
      </div>
    </section>
  );
};

export default EcoeventFilterComponent;
