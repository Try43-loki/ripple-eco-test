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
      className="flex w-full items-center
             border border-lightes-white rounded-lg md:rounded-2xl 
             bg-light-gray px-3 py-1 md:py-2
             focus-within:ring-2 focus-within:ring-green
                 "
    >
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 outline-none bg-transparent text-green 
             text-xs md:text-sm lg:text-base ml-3 
             placeholder:text-dark-green"
        aria-label="Search input"
      />
      <div className="ml-2">
        {icon || <Search className="h-4 w-4 md:h-5 md:w-5 text-meduim-gray" />}
      </div>
    </form>
  );
};

export default SearchBarComponent;
