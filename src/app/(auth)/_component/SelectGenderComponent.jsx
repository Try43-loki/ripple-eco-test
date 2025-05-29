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
      <SelectTrigger className="w-full border-none bg-lighter-white !text-gray-600">
        <SelectValue placeholder="Select a gender" />
      </SelectTrigger>
      <SelectContent className="bg-white  border border-light-strok text-gray-600">
        <SelectGroup>
          <SelectItem value="female">Female</SelectItem>
          <SelectItem value="male">Male</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
