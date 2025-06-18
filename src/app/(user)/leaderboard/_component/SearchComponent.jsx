"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getAllProvincesService } from "@/service/ecoEventService";
import { getUserFilterService } from "@/service/leaderboardService";
// import { locations } from "@/data";

export default function SearchComponent() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState([]); 
  // const [loading, setLoading] = React.useState(true);

 React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserFilterService();
        setData(result);
      } catch (err) {
        console.error("Failed to fetch filter data", err);
      }
    };
    fetchData();
  }, []);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    // <Popover open={open} onOpenChange={setOpen} className="w-full border-none">
    //   <PopoverTrigger asChild>
    //     <Button
    //       variant="outline"
    //       role="combobox"
    //       aria-expanded={open}
    //       onClick={() => setOpen(!open)}
    //       className="  justify-between border-none font-light bg-lighter-white text-gray-600 hover:bg-lighter-white hover:text-gray-600"
    //     >
    //       {value
    //         ? data.find((item) => item.value === value)?.label
    //         : "Select Province"} 
    //       <ChevronsUpDown className="opacity-50" />
    //     </Button>
    //   </PopoverTrigger>
    // </Popover>
    <p>hello!!!</p>
  );
}
