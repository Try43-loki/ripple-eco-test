import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex w-full h-[200px] md:h-[300px] lg:h-[400px] justify-center items-center">
      <Image
        src="/sub-banner.jpg"
        alt="sub-banner"
        fill
        className="object-cover"
      />
      <div className="absolute flex flex-col items-center text-white px-4 text-center">
        <h2 className="font-bold text-lg md:text-2xl lg:text-4xl">
          DISCUSSION
        </h2>
        <p className="text-sm md:text-base lg:text-xl max-w-xl">
          Share ideas, explore solutions, and connect with others driving
          environmental change.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
