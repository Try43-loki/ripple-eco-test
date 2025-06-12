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
      <SelectTrigger className="w-full border-none bg-lighter-white !text-dark-gray">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-dark-gray">
        <SelectGroup>
          <SelectItem
            className="!hover:bg-light-gray cursor-pointer"
            value="earthquakes"
          >
            Earthquakes
          </SelectItem>
          <SelectItem
            className="!hover:bg-light-gray cursor-pointer"
            value="floods"
          >
            Floods
          </SelectItem>
          <SelectItem
            className="!hover:bg-light-gray cursor-pointer"
            value="typhoons"
          >
            Typhoons
          </SelectItem>
          <SelectItem
            className="!hover:bg-light-gray cursor-pointer"
            value="wildfires"
          >
            Wildfires
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function BtnSelectSeverity() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] !text-dark-gray border bg-white">
        <SelectValue placeholder="Severity" />
      </SelectTrigger>
      <SelectContent className={"bg-white"}>
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

export function DatePickerDemo({ order }) {
  const [date, setDate] = React.useState();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal  !text-dark-gray border bg-white",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, "PPP")
          ) : (
            <span> {order === 1 ? "Start Date" : "End Date"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white">
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
