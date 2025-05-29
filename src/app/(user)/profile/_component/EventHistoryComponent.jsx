"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import CardEndedEcoEvent from "./EventHistoryComponent";
import SlotDropdownComponent from "./SlotDropdownComponent";
import CategoryDropdown from "./CategoryDropdown";
import ContributeDropdown from "./ContributeDropdown";
import EventTypeDropdown from "./EventTypeDropdown";
import ProvinceDropdown from "./ProvinceDropdown";

const EventHistoryComponent = () => {
  const [date, setDate] = useState(null);

  return (
    <main>
      <section className="flex gap-x-7 items-center">
        <h2 className="text-5">Filter:</h2>
        <div className="flex items-center gap-x-4">
          <ProvinceDropdown/>

          <EventTypeDropdown/>

          <ContributeDropdown/>

          <CategoryDropdown/>

          <SlotDropdownComponent/>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-2xl h-10.5 px-6.25 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">Date</h3>
              <ChevronDown className="w-[14px] h-[14px] text-strong-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 rounded-2xl border-1 border-border shadow-lg w-auto">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <section className="mt-10 flex items-center justify-between">
        <CardEndedEcoEvent />
      </section>
    </main>
  );
};

export default EventHistoryComponent;