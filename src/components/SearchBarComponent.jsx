"use client";

import React from "react";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBarComponent = ({
  placeholder = "Search",
  icon = null,
  pagePath,
}) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // prevent page reload for now
  // };
  const [searchQuery, setSearchQuery] = useState(" ");
  const [debouncedQuery, setDebouncedQuery] = useState(""); // state to hold debounced value
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const handler = setTimeout(() => {
      const trimmedQuery = searchQuery.trim();
      if (trimmedQuery === "") {
        router.push(pagePath);
      } else {
        setDebouncedQuery(trimmedQuery);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery !== "") {
      router.push(`${pathName}?search=${encodeURIComponent(debouncedQuery)}`);
    }
  }, [debouncedQuery, pathName, router]);
  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full items-center
             border border-lightes-white rounded-lg md:rounded-2xl 
             bg-light-gray px-3 py-1 md:py-1.5
             focus-within:ring-2 focus-within:ring-green
                 "
    >
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 outline-none bg-transparent text-green 
             text-xs md:text-sm lg:text-base ml-3 
             placeholder:text-lighters-green"
        aria-label="Search input"
        // value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="ml-2">
        {icon || <Search className="h-4 w-4 md:h-5 md:w-5 text-meduim-gray" />}
      </div>
    </form>
  );
};

export default SearchBarComponent;
