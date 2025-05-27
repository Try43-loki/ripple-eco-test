import Image from "next/image";
import React from "react";
import SearchBarComponent from "./SearchBarComponent";

const HeroSectionComponent = ({ text, description, showSearchBar }) => {
  return (
    <article>
      <Image
        src="/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute w-full max-w-5xl px-4 md:px-20 text-white text-center flex flex-col items-center">
        <h2 className="font-bold text-lg md:text-2xl lg:text-4xl">
          {text || "Title"}
        </h2>
        <p className="text-sm md:text-base lg:text-xl max-w-xl">
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
