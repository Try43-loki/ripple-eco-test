import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const FilterSelectComponent = ({ label, options }) => {
  return (
    <Select>
      <SelectTrigger className="bg-light-gray px-5 border-none focus-visible:ring-0 font-medium w-full">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className="bg-white w-full border-lightes-white text-lighter-green">
        {options.map((options) => (
          <SelectItem key={options} value={options}>
            {options}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FilterSelectComponent;
