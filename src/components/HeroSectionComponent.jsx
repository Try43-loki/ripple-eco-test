import Image from "next/image";
import React from "react";
import SearchBarComponent from "./SearchBarComponent";

const HeroSectionComponent = ({ text, description, showSearchBar }) => {
  return (
    <article className="w-full relative">
      <Image
        src="/assets/sub-banner.jpg"
        alt="sub-banner"
        className="object-cover w-full"
        height={300}
        width={100}
      />

      <div className="w-full absolute space-y-3 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-5xl  px-4 md:px-20 lg:px-[150px] text-white text-center flex flex-col items-center">
        <h2 className="font-bold text-lg md:text-2xl lg:text-4xl">
          {text || "Title"}
        </h2>
        <p className="text-sm md:text-base lg:text-xl max-w-lg !text-light-gray">
          {description || "Description"}
        </p>
        {showSearchBar && (
          <div className="w-full">
            <SearchBarComponent />
          </div>
        )}
      </div>
    </article>
  );
};

export default HeroSectionComponent;
