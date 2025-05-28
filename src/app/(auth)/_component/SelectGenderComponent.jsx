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

export function SelectGenderComponent() {
  return (
    <Select>
      <SelectTrigger className="w-full focus-visible:ring-[0px] hover:text-gray-800 text-gray-500 ring-0 bg-lighter-white">
        <SelectValue placeholder="Select a gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="male">Male</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
