"use client";

import React from "react";
import { Search } from "lucide-react";

const SearchBarComponent = ({ placeholder = "Search", icon = null }) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // prevent page reload for now
  // };
  return (
    <form
      // onSubmit={handleSubmit}
      className="flex w-full md:max-w-[914px] items-center 
                 border border-stroke rounded-lg md:rounded-2xl 
                 bg-[#f6f7f9] px-3 py-2.5 md:py-3 
                 focus-within:ring-2 focus-within:ring-primary 
                 "
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full outline-none bg-transparent 
                   text-xs md:text-sm lg:text-base ml-3 
                   placeholder:text-description"
        aria-label="Search input"
      />
      <div className="ml-2">
        {icon || <Search className="h-4 w-4 md:h-5 md:w-5 text-description" />}
      </div>
    </form>
  );
};

export default SearchBarComponent;
