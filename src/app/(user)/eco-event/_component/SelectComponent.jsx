"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export function SelectComponent({ operator, values, onChange, value }) {
  // console.log("values", values);
  const getValue = (item) =>
    item.provinceName ||
    item.eventType || //  here
    item.contributeTypeName ||
    item.categoryName ||
    item.label ||
    "All";

  const getId = (item) =>
    item.provinceId ||
    item.eventTypeId ||
    item.contributeTypeId ||
    item.categoryId ||
    item.value ||
    "all";

  const handleSelectChange = (val) => {
    const mappedValue = val === "all" ? "" : val;
    if (onChange) onChange(operator, mappedValue);
  };

  return (
    <Select value={value || ""} onValueChange={handleSelectChange}>
      <SelectTrigger className="w-full border-none bg-lighter-white !text-dark-gray">
        <SelectValue
          placeholder={`Choose ${
            operator.charAt(0).toUpperCase() + operator.slice(1)
          }`}
        >
          {value &&
            getValue(
              values.find((item) => String(getId(item)) === String(value))
            )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-dark-gray">
        <SelectGroup>
          {values.map((item, index) => (
            <SelectItem
              key={`${operator}-${getId(item)}-${index}`}
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
