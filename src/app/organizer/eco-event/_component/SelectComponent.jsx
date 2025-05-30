import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  categories,
  certificates,
  contributeType,
  eventTypes,
  locations,
  slots,
} from "@/data";

export function SelectComponent({ operator }) {
  let data = [];
  switch (operator) {
    case "Event_type":
      data = eventTypes;
      break;
    case "Categories":
      data = categories;

      break;
    case "Certificate":
      data = certificates;
      break;
    case "Location":
      data = locations;

      break;
    case "Contribute_type":
      data = contributeType;
      break;
    case "Slot":
      data = slots;
      break;
    default:
      break;
  }
  return (
    <Select>
      <SelectTrigger className="w-full border-none bg-lighter-white !text-gray-600">
        <SelectValue placeholder={`Choose ${operator}`} />
      </SelectTrigger>
      <SelectContent className="bg-white  border border-light-strok text-gray-600">
        <SelectGroup className="">
          {data?.map((item, index) => (
            <SelectItem
              key={index}
              value={item.value}
              className=" !hover:bg-light-gray  cursor-pointer transition ease-in duration-200"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
