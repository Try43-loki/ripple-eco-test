"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// slot options
export const slots = [
  { label: "Available", value: "available" },
  { label: "Unavailable", value: "unavailable" },
];

export function SelectComponent({ operator, values, onChange }) {
  const [selectValue, setSelectValue] = useState("");

  // Determine data source
  let data = [];
  switch (operator) {
    case "eventType":
    case "category":
    case "province":
    case "contributeType":
      data = values || [];
      break;
    case "slot":
      data = slots;
      break;
    default:
      data = [];
  }

  // Helper functions
  const getValue = (item) =>
    item.name ||
    item.provinceName ||
    item.eventType ||
    item.contributeTypeName ||
    item.label ||
    item.categoryName ||
    "";

  const getId = (item) =>
    item.id ||
    item.provinceId ||
    item.eventTypeId ||
    item.contributeTypeId ||
    item.categoryId ||
    item.value ||
    "";

  const handleSelectChange = (value) => {
    setSelectValue(value);
    if (onChange) onChange(operator, value);
  };

  return (
    <Select value={selectValue} onValueChange={handleSelectChange}>
      <SelectTrigger className="w-full border-none bg-lighter-white !text-dark-gray">
        <SelectValue placeholder={`Choose ${operator}`} />
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-dark-gray">
        <SelectGroup>
          {data.map((item) => (
            <SelectItem
              key={`${operator}-${getId(item)}`}
              value={String(getId(item))}
              className="!hover:bg-light-gray cursor-pointer"
            >
              {getValue(item)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
