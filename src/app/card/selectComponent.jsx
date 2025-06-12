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

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="1">Apple</SelectItem>
          <SelectItem value="2">Banana</SelectItem>
          <SelectItem value="3">Blueberry</SelectItem>
          <SelectItem value="4">Grapes</SelectItem>
          <SelectItem value="5">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
