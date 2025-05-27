"use client";
import { usePathname } from "next/navigation";
import React from "react";
function HeaderComponent() {
  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold text-green">Dashboard</h1>
        <article className="flex justify-center items-center gap-x-4">
          <div className="p-2 rounded-xl h-10 w-10  bg-lighter-white flex justify-center items-center">
            <Bell className="text-light-green" size={20} />
          </div>
          <div className="px-1 h-10 rounded-lg bg-lighter-white flex justify-center items-center gap-x-2">
            <Avatar>
              <AvatarImage src="/icons/UNEP.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="truncate w-32 text-md font-semibold text-light-green">
              United Nations Environment Program (UNEP)
            </h2>

            <ProfileDropdownComponent />
          </div>
        </article>
      </div>
    </>
  );
}

export default HeaderComponent;
