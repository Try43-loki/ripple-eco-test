"use client"
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Armchair, BadgeDollarSign, Ban, ChevronDown, Gift, Hammer, HandHeart, Handshake, HeartHandshake, NotebookPen, Recycle, TreeDeciduous } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import CardEndedEcoEvent from './CardEndedEcoEvent';
  
const EventHistoryComponent = () => {
    const [dates, setDates] = React.useState([]);
  return (
    <main>
      <section className="flex gap-x-7 items-center">
        <h2 className="text-[20px]">Filter:</h2>
        <div className="flex items-center gap-x-[15px]">
          <Select>
            <SelectTrigger className="w-auto rounded-[16px] h-[42px] px-[25px] py-[20px] bg-[#F6F7F9] border-none">
              <SelectValue placeholder="Province" className="placeholder:text-[20px] placeholder:text-[#697D74]"/>
            </SelectTrigger>
            <SelectContent className="rounded-[20px] border-1 border-[#D8E2DD] px-[15px] py-[5px] text-[#697D74] text-[18px] h-[290px]">
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
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-[8px] rounded-[16px] h-[42px] px-[25px] py-[20px] bg-[#F6F7F9] border-none">
                <h3 className="text-[#697D74]">Event Type</h3> 
                <ChevronDown className="w-[14px] h-[14px] text-[#697D74]"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-[16px] border-1 border-[#D8E2DD]">
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <NotebookPen className="w-[19px] h-[19px] text-[#697D74]" />
                    Seminar
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <Hammer className='w-[19px] h-[19px] text-[#697D74]' />
                    Hand-on Event
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-[8px] rounded-[16px] h-[42px] px-[25px] py-[20px] bg-[#F6F7F9] border-none">
                <h3 className="text-[#697D74]">Contribute Type</h3> 
                <ChevronDown className="w-[14px] h-[14px] text-[#697D74]"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-[16px] border-1 border-[#D8E2DD]">
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <HandHeart className="w-[19px] h-[19px] text-[#697D74]" />
                    Donation
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <Handshake className='w-[19px] h-[19px] text-[#697D74]' />
                    Volunteer
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <HeartHandshake className='w-[19px] h-[19px] text-[#697D74]' />
                    Volunteer and Donation
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <Gift className='w-[19px] h-[19px] text-[#697D74]' />
                    Free
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <BadgeDollarSign className='w-[19px] h-[19px] text-[#697D74]' />
                    Fees
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-[8px] rounded-[16px] h-[42px] px-[25px] py-[20px] bg-[#F6F7F9] border-none">
                <h3 className="text-[#697D74]">Category Type</h3> 
                <ChevronDown className="w-[14px] h-[14px] text-[#697D74]"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-[16px] border-1 border-[#D8E2DD]">
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <Recycle  className="w-[19px] h-[19px] text-[#697D74]" />
                    Environment Cleaning
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <TreeDeciduous className='w-[19px] h-[19px] text-[#697D74]' />
                    Tree Planting
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <HandHeart className="w-[19px] h-[19px] text-[#697D74]" />
                    Donation
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-[8px] rounded-[16px] h-[42px] px-[25px] py-[20px] bg-[#F6F7F9] border-none">
                <h3 className="text-[#697D74]">Slot</h3> 
                <ChevronDown className="w-[14px] h-[14px] text-[#697D74]"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-auto p-4 space-y-1 rounded-[16px] border-1 border-[#D8E2DD]">
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <Armchair className="w-[19px] h-[19px] text-[#697D74]" />
                    Available
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full flex flex-row items-center gap-x-[10px] text-[#697D74] pl-[20px] p-[10px] rounded-[10px]">
                    <Ban className='w-[19px] h-[19px] text-[#697D74]' />
                    Unavailable
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-auto flex items-center gap-x-[8px] rounded-[16px] h-[42px] px-[25px] py-[20px] bg-[#F6F7F9] border-none">
                <h3 className="text-[#697D74]">Date Rang</h3> 
                <ChevronDown className="w-[14px] h-[14px] text-[#697D74]"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 rounded-[16px] border border-[#D8E2DD] shadow-lg w-auto">
                <h1>
                  Date
                </h1>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      <section className="mt-10 flex items-center justify-between">
        <CardEndedEcoEvent/>
        <CardEndedEcoEvent/>
        <CardEndedEcoEvent/>
        <CardEndedEcoEvent/>
      </section>
    </main>
  );
}

export default EventHistoryComponent