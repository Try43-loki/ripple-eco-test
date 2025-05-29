"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const provinces = {
  "Phnom Penh": ["Phnom Penh", "Battambang", "Kandal"],
  Battambang: ["Phnom Penh", "Battambang", "Kandal"],
  Kandal: ["Phnom Penh", "Battambang", "Kandal"],
};

export default function SingleSelectDropdown() {
  const [selected, setSelected] = useState(null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white rounded-2xl text-black w-full h-[50px] justify-between hover:cursor-pointer p-5 border border-gray-300 shadow-sm hover:bg-gray-100">
          <span className="text-base text-strong-gray">
            {selected ?? "Select Province"}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="bg-white text-black shadow-lg border border-gray-200 rounded-xl w-[400px] mt-2"
      >
        {Object.entries(provinces).map(([group, items]) => (
          <DropdownMenuSub key={group}>
            <DropdownMenuSubTrigger className="hover:bg-gray-100 hover:cursor-pointer rounded-md px-2 py-1.5 flex justify-between w-full">
              <span>{group}</span>
            </DropdownMenuSubTrigger>

            <DropdownMenuSubContent className="bg-white border border-gray-200 shadow-lg rounded-xl">
              {items.map((item) => (
                <DropdownMenuItem
                  key={item}
                  onClick={() => setSelected(item)}
                  className="hover:bg-gray-100 px-2 py-1.5 rounded-md"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
