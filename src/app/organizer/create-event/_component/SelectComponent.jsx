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

// Define the contribute type restrictions directly in the component
const contributeTypeRestrictions = [
  {
    contributeTypeId: 3,
    contributeTypeName: "donation",
    eventTypeId: 1,
  },
  {
    contributeTypeId: 2,
    contributeTypeName: "free",
    eventTypeId: 2,
  },
  {
    contributeTypeId: 1,
    contributeTypeName: "fee",
    eventTypeId: 2,
  },
  {
    contributeTypeId: 4,
    contributeTypeName: "volunteer",
    eventTypeId: 1,
  },
  {
    contributeTypeId: 5,
    contributeTypeName: "donation and volunteer",
    eventTypeId: 1,
  },
];

export function SelectComponent({
  operator,
  value,
  onChange,
  placeholder,
  selectedEventType, // Pass the selected event type value (not ID)
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
      if (selectedEventType) {
        // Find the event type ID from the selected event type value
        const eventType = eventTypes.find(
          (et) => et.value === selectedEventType
        );
        const eventTypeId = eventType ? eventType.id : null;

        if (eventTypeId) {
          // Get allowed contribute type names for this event type
          const allowedContributeTypes = contributeTypeRestrictions
            .filter((restriction) => restriction.eventTypeId === eventTypeId)
            .map((restriction) => restriction.contributeTypeName);

          // Filter contribute types to only show allowed ones
          data = contributeType.filter((item) =>
            allowedContributeTypes.includes(item.value)
          );
        } else {
          data = contributeType; // Show all if event type not found
        }
      } else {
        data = []; // Show no options if no event type selected
      }
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
        {data?.length > 0
          ? data.map((item) => (
              <SelectItem key={item?.id} value={item.value}>
                {item.value}
              </SelectItem>
            ))
          : operator === "contributeType" &&
            !selectedEventType && (
              <div className="px-2 py-1 text-sm text-gray-500">
                Please select an event type first
              </div>
            )}
      </SelectContent>
    </Select>
  );
}
