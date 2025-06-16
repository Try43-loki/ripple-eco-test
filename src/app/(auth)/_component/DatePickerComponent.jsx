"use client";

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

export function DatePickerComponent({
  value,
  onChange,
  placeholder = "Pick a date",
  name,
  disabled = false,
  ...props
}) {
  // Use the value from props (controlled by react-hook-form) instead of internal state
  const selectedDate = value;

  const handleDateSelect = (selectedDate) => {
    // Call the onChange function passed from react-hook-form Controller
    if (onChange) {
      onChange(selectedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="bg-white border border-light-strok text-gray-600"
      >
        <Button
          variant={"outline"}
          disabled={disabled}
          className={cn(
            "w-full justify-between bg-lighter-white !text-gray-600 text-left font-normal border border-light-strok hover:bg-lighter-white hover:text-gray-600",
            !selectedDate && "text-muted-foreground"
          )}
        >
          {selectedDate ? (
            format(selectedDate, "PPP")
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-white border-light-strok w-auto p-0"
        align="center"
      >
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          initialFocus
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
