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
import { locations } from "@/data";

export default function SearchComponent() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const data = locations;
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
  return (
    <Popover open={open} onOpenChange={setOpen} className="w-full border-none">
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="  justify-between border-none font-light bg-lighter-white text-gray-600 hover:bg-lighter-white hover:text-gray-600"
        >
          {value
            ? data.find((item) => item.value === value)?.label
            : "Select Province"} 
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 border border-light-strok text-gray-600">
        <Command className=" bg-white">
          <CommandInput placeholder="Search Province..." className="h-9 " />
          <CommandList>
            <CommandEmpty>No Province found.</CommandEmpty>
            <CommandGroup>
              {data?.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => {
                    setValue(item.value);
                    setOpen(false);
                    console.log("Selected Province:", item.value);
                  }}
                >
                  {item?.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
