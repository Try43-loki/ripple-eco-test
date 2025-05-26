"use client";
import React from "react";
import Image from "next/image";

const MarqueeComponent = () => {
  const items = [
    "Eco Event",
    "Tree Planting",
    "Animal Charity",
    "Beach Plastic Clean Up",
    "Drainage Clean Up",
    "Waste Recycle",
  ];

  return (
    <section className="w-full py-6 sm:py-8 md:py-10 bg-green overflow-hidden relative">
      <div className="whitespace-nowrap animate-scroll">
        <div className="inline-flex gap-10 sm:gap-14 md:gap-10">
          {[...items, ...items].map((title, index) => (
            <div
              key={index}
              className="flex items-center gap-13 md:gap-15 lg:gap-20 px-4 sm:px-6 md:px-10"
            >
              <Image
                src="/assets/eco.png"
                alt="eco"
                width={10}
                height={10}
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              ></Image>
              <h3 className="text-white text-base sm:text-lg md:text-2xl whitespace-nowrap">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: inline-block;
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default MarqueeComponent;
