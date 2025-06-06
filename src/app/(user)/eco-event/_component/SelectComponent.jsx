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
export const slots = [
  {
    label: "Available",
    value: "available",
  },
  {
    label: "Unavailable",
    value: "unavailable",
  },
];

export function SelectComponent({ operator, values, onChange }) {
  const [selectValue, setSelectValue] = useState("");

  let data = [];
  switch (operator) {
    case "eventType":
    case "category":
    case "province":
      data = values || [];
      break;
    case "contributeType":
      data = values || [];
      break;
    case "slot":
      data = slots;
      break;
    default:
      data = [];
  }

  const getValue = (item) =>
    item.name ||
    item.provinceName ||
    item.eventType ||
    item.contributeTypeName ||
    item.label ||
    item.categoryName;

  const getKey = (item, index) =>
    item.id ||
    item.provinceId ||
    item.eventTypeId ||
    item.contributeTypeId ||
    item.categoryId ||
    item.value ||
    index;

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
          {data.map((item, index) => (
            <SelectItem
              key={getKey(item, index)}
              value={getValue(item)}
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
