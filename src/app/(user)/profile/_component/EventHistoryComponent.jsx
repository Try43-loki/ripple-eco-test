"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Armchair,
  BadgeDollarSign,
  Ban,
  ChevronDown,
  Gift,
  Hammer,
  HandHeart,
  Handshake,
  HeartHandshake,
  NotebookPen,
  Recycle,
  TreeDeciduous,
} from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import CardEndedEcoEvent from "./EventHistoryComponent";

const EventHistoryComponent = () => {
  const [date, setDate] = useState(null);

  return (
    <main>
      <section className="flex gap-x-7 items-center">
        <h2 className="text-5">Filter:</h2>
        <div className="flex items-center gap-x-4">
          <Select>
            <SelectTrigger className="w-auto rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <SelectValue
                placeholder="Province"
                className="placeholder:text-5 placeholder:text-light-gray"
              />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border border-border px-4 py-1 text-strong-gray text-[18px] max-h-[290px]">
              <SelectGroup>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="mst">
                  Mountain Standard Time (MST)
                </SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                <SelectItem value="akst">
                  Alaska Standard Time (AKST)
                </SelectItem>
                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                <SelectItem value="hst1">Hawaii Standard Time (HST)</SelectItem>
                <SelectItem value="hst2">Hawaii Standard Time (HST)</SelectItem>
                <SelectItem value="hst3">Hawaii Standard Time (HST)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">Event Type</h3>
              <ChevronDown className="w-3.5 h-3.5 text-strong-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-xl border border-border">
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <NotebookPen className="w-5 h-5 text-strong-gray" />
                Seminar
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Hammer className="w-5 h-5 text-strong-gray" />
                Hand-on Event
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">Contribute Type</h3>
              <ChevronDown className="w-3.5 h-3.5 text-strong-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-xl border border-border">
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <HandHeart className="w-5 h-5 text-strong-gray" />
                Donation
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Handshake className="w-5 h-5 text-strong-gray" />
                Volunteer
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <HeartHandshake className="w-5 h-5 text-strong-gray" />
                Volunteer and Donation
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Gift className="w-5 h-5 text-strong-gray" />
                Free
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <BadgeDollarSign className="w-5 h-5 text-strong-gray" />
                Fees
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">Category Type</h3>
              <ChevronDown className="w-3.5 h-3.5 text-strong-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-xl border border-border">
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Recycle className="w-5 h-5 text-strong-gray" />
                Environment Cleaning
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <TreeDeciduous className="w-5 h-5 text-strong-gray" />
                Tree Planting
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <HandHeart className="w-5 h-5 text-strong-gray" />
                Donation
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-xl h-10.5 px-6 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">Slot</h3>
              <ChevronDown className="w-3.5 h-3.5 text-strong-gray" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-xl border border-border">
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Armchair className="w-5 h-5 text-strong-gray" />
                Available
              </DropdownMenuItem>
              <DropdownMenuItem className="w-full flex flex-row items-center gap-x-2.5 text-strong-gray pl-5 p-2.5 rounded-lg">
                <Ban className="w-5 h-5 text-strong-gray" />
                Unavailable
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-2 rounded-2xl h-10.5 px-6.25 py-5 bg-light-gray border-none">
              <h3 className="text-strong-gray">{date ? format(date, "MMM dd, yyyy") : "Date Range"}</h3>
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
        <CardEndedEcoEvent />
        <CardEndedEcoEvent />
        <CardEndedEcoEvent />
      </section>
    </main>
  );
};

export default EventHistoryComponent;
