import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  categories,
  certificates,
  contributeType,
  eventTypes,
  locations,
} from "@/utils/data";

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
    case "contributeType":
      data = contributeType;
      break;
    default:
      break;
  }
  console.log("Select Component", value);

  return (
    <Select disabled={true} value={value} onValueChange={onChange} {...props}>
      <SelectTrigger className="w-full border-none bg-lighter-white !text-gray-600">
        <SelectValue placeholder={placeholder || `Choose ${operator}`} />
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-gray-600">
        {data?.map((item) => (
          <SelectItem key={item?.id} value={item.value}>
            {item.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
