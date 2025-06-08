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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MultiSelectDropdown({ provincesList }) {
  const [selected, setSelected] = useState(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSelected(districtId, districtName) {
    setSelected(districtName);
    const params = new URLSearchParams(searchParams);

    if (districtId) {
      params.set("search", districtId);
    } else {
      params.delete("search");
    }
    const basePath = pathname.split("/").slice(0, 2).join("/");
    const newDistrictName = districtName.replace(/\s+/g, "");
    replace(`${basePath}/${newDistrictName.toString()}?${params.toString()}`);
  }

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
        className="bg-white text-black shadow-lg border border-gray-200 rounded-xl w-[670px] h-[300px] mt-2 scrollbar-hide"
      >
        {provincesList.data.map((value) => (
          <DropdownMenuSub key={value.provinceId}>
            <DropdownMenuSubTrigger className=" hover:cursor-pointer hover:bg-blue-200 rounded-md px-2 py-1.5 flex justify-between w-full">
              <span>{value.provinceName}</span>
            </DropdownMenuSubTrigger>

            <DropdownMenuSubContent className="bg-white border border-gray-200 shadow-lg rounded-xl">
              {value.districtList.map((item) => (
                <DropdownMenuItem
                  key={item.districtId}
                  onClick={() =>
                    handleSelected(item.districtId, item.districtName)
                  }
                  className="hover:bg-gray-100 px-2 py-1.5 rounded-md"
                >
                  {item.districtName}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
