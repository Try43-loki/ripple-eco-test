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
} from "@/data";

export function SelectComponent({
  operator,
  value,
  onChange,
  placeholder,
  ...props
}) {
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
    default:
      break;
  }

  return (
    <Select value={value} onValueChange={onChange} {...props}>
      <SelectTrigger className="w-full border-none bg-lighter-white !text-gray-600">
        <SelectValue placeholder={placeholder || `Choose ${operator}`} />
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-gray-600">
        <SelectGroup>
          {data?.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
