"use client";

import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const DateComponent = ({ className }) => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  return (
    <div className={cn("grid gap-2 w-full", className)}>
      <Popover>
        <PopoverTrigger
          className="bg-lighter-white border-light-strok hover:bg-lighter-white text-black"
          asChild
        >
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[220px] justify-start text-left font-normal",
              !date && "text-black"   //text-muted-foreground
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
