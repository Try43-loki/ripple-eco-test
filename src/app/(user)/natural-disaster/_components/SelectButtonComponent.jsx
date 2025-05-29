"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function BtnSelectType() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-light-gray !text-dark-gray border">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="earthquakes">Earthquakes</SelectItem>
          <SelectItem value="floods">Floods</SelectItem>
          <SelectItem value="typhoons">Typhoons</SelectItem>
          <SelectItem value="wildfires">Wildfires</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function BtnSelectSeverity() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-light-gray !text-dark-gray border">
        <SelectValue placeholder="Severity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function DatePickerDemo() {
  const [date, setDate] = React.useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal bg-light-gray !text-dark-gray border",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
