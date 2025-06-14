"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addMonths, format } from "date-fns";
import { ChevronDownIcon, RotateCcwIcon, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export function FilterPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [type, setType] = useState("");
  const [severity, setSeverity] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const handleReset = () => {
    setType("");
    setSeverity("");
    setStartDate(undefined);
    setEndDate(undefined);

    const params = new URLSearchParams(searchParams.toString());
    params.delete("disasterType");
    params.delete("severityType");
    params.delete("startDate");
    params.delete("endDate");

    router.push(`?${params.toString()}`);
  };

  const handleStartDateSelect = (date) => {
    if (date) {
      setStartDate(date);
      updateQuery("startDate", date.toISOString().split("T")[0]);
      setOpenStart(false);
    }
  };

  const handleEndDateSelect = (date) => {
    if (date) {
      setEndDate(date);
      updateQuery("endDate", date.toISOString().split("T")[0]);
      setOpenEnd(false);
    }
  };

  return (
    <div className="flex gap-4 justify-center items-end">
      <span className="font-medium text-base text-dark-gray pb-1">
        Filter by:
      </span>

      {/* TYPE */}
      <div className="flex flex-col">
        <Label className="text-sm font-medium text-gray-700 px-1">Type</Label>
        <Select
          value={type}
          onValueChange={(val) => {
            setType(val);
            updateQuery("disasterType", val);
          }}
        >
          <SelectTrigger className="border border-gray-300 bg-white text-gray-900 min-w-[160px] rounded-md">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent className="bg-white text-gray-900 border border-gray-200 shadow-md rounded-md">
            <SelectGroup>
              <SelectItem value="EARTHQUAKE">Earthquakes</SelectItem>
              <SelectItem value="FLOOD">Floods</SelectItem>
              <SelectItem value="TYPHOONS">Typhoons</SelectItem>
              <SelectItem value="WILDFIRE">Wildfires</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* SEVERITY */}
      <div className="flex flex-col">
        <Label className="text-sm font-medium text-gray-700 px-1">
          Severity
        </Label>
        <Select
          value={severity}
          onValueChange={(val) => {
            setSeverity(val);
            updateQuery("severityType", val);
          }}
        >
          <SelectTrigger className="border border-gray-300 bg-white text-gray-900 min-w-[160px] rounded-md">
            <SelectValue placeholder="Select Severity" />
          </SelectTrigger>
          <SelectContent className="bg-white text-gray-900 border border-gray-200 shadow-md rounded-md">
            <SelectGroup>
              <SelectItem value="GREEN">Low</SelectItem>
              <SelectItem value="ORANGE">Medium</SelectItem>
              <SelectItem value="RED">High</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* START DATE PICKER */}
      <div className="flex flex-col">
        <Label className="text-sm font-medium text-gray-700 px-1">
          Start Date
        </Label>
        <Popover open={openStart} onOpenChange={setOpenStart}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-48 justify-start text-left font-normal bg-white border border-gray-300 text-gray-700 shadow-sm"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span className={startDate ? "" : "text-gray-400"}>
                {startDate
                  ? format(startDate, "MMM dd, yyyy")
                  : "Select start date"}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2 bg-white border border-gray-200 shadow-lg rounded-md">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={handleStartDateSelect}
              className="rounded-md"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* END DATE PICKER */}
      <div className="flex flex-col">
        <Label className="text-sm font-medium text-gray-700 px-1">
          End Date
        </Label>
        <Popover open={openEnd} onOpenChange={setOpenEnd}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-48 justify-start text-left font-normal bg-white border border-gray-300 text-gray-700 shadow-sm"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span className={endDate ? "" : "text-gray-400"}>
                {endDate ? format(endDate, "MMM dd, yyyy") : "Select end date"}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2 bg-white border border-gray-200 shadow-lg rounded-md">
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={handleEndDateSelect}
              className="rounded-md"
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* RESET BUTTON */}
      <div className="flex self-end">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-sm text-white bg-green hover:bg-green-800"
          onClick={handleReset}
        >
          <RotateCcwIcon className="w-4 h-4" />
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
