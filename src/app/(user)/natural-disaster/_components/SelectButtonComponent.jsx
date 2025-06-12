"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function BtnSelectType() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("type", value);
    } else {
      params.delete("type");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="border-none bg-lighter-white !text-dark-gray">
        <SelectValue placeholder="Select Type" />
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-dark-gray">
        <SelectGroup>
          <SelectItem
            className="!hover:bg-light-gray cursor-pointer"
            value="EARTHQUAKE"
          >
            Earthquakes
          </SelectItem>
          <SelectItem
            className="!hover:bg-light-gray cursor-pointer"
            value="FLOOD"
          >
            Floods
          </SelectItem>
          <SelectItem
            className="!hover:bg-light-gray cursor-pointer"
            value="TYPHOONS"
          >
            Typhoons
          </SelectItem>
          <SelectItem
            className="!hover:bg-light-gray cursor-pointer"
            value="WILDFIRE"
          >
            Wildfires
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function BtnSelectSeverity() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("severity", value);
    } else {
      params.delete("severity");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="border-none bg-lighter-white !text-dark-gray">
        <SelectValue placeholder="Severity" />
      </SelectTrigger>
      <SelectContent className="bg-white border border-light-strok text-dark-gray">
        <SelectGroup>
          <SelectItem value="LOW">Low</SelectItem>
          <SelectItem value="MEDIUM">Medium</SelectItem>
          <SelectItem value="HIGH">High</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function DateRangComponent({ className }) {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger
          className="bg-lighter-white border-light-strok hover:bg-lighter-white text-gray-600"
          asChild
        >
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[320px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-white border border-light-strok"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            modifiersClassNames={{
              range_start: "bg-green-600 text-white",
              range_end: "bg-green-600 text-white",
              range_middle: "bg-green-100 text-green-800",
              selected: "bg-green-500 text-white",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
