"use client"
import React from 'react'

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
          <section className="w-full py-10 bg-[#048D4C] overflow-hidden relative">
        <div className="whitespace-nowrap animate-scroll">
          <div className="inline-flex gap-20">
            {[...items, ...items].map((title, index) => (
              <div key={index} className="flex items-center gap-25 px-10">
                <img src="/eco.png" alt="eco" className="w-7 h-7" />
                <h3 className="text-white text-2xl">{title}</h3>
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
            animation: scroll 10s linear infinite;
          }
        `}</style>
      </section>
  )
}

export default MarqueeComponent