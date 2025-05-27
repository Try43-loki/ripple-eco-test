import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const FilterEcoEventComponent = () => {
  const filters = [
    { id: "province", placeholder: "Province" },
    { id: "eventType", placeholder: "Event Type" },
    { id: "contributeType", placeholder: "Contribute Type" },
    { id: "categoryType", placeholder: "Category Type" },
    { id: "slot", placeholder: "Slot" },
    { id: "dateRange", placeholder: "Date Range" },
  ];
  return (
    <div className="px-4 py-8 md:px-20 lg:px-[150px]">
      <div className="flex flex-wrap justify-start lg:gap-7 items-center gap-4">
        {/* Aligned label */}
        <div className="min-w-[80px] flex items-center text-gray-700 font-medium">
          Filter by:
        </div>

        {/* Filters */}
        {filters.map((filter) => (
          <Select key={filter.id}>
            <SelectTrigger className="bg-light-gray border-none focus-visible:ring-0 text-lighter-green font-medium min-w-[162px]">
              <SelectValue placeholder={filter.placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="recycling">Recycling</SelectItem>
              <SelectItem value="cleanup">Clean-up</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        ))}
      </div>
    </div>
  );
};

export default FilterEcoEventComponent;
