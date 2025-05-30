"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickComponent() {
    const [date, setDate] = useState(undefined)

  return (
    <Popover>
      <PopoverTrigger asChild className="border-1 border-strong-gray">
        <Button
          variant="outline"
          className={cn(
            "w-45 justify-start text-left font-normal ",
            !date && "text-strong-gray"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span className="flex flex-row items-center justify-between w-full">Selected Date <ChevronDown className="w-4.5 h-4.5"/></span>}

        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
