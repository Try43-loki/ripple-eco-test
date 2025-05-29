import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardEcoEventEndedComponent = () => {
  return (
    <div className="">
      <div className=" w-[250px] md:w-[270px] cursor-pointer lg:w-[270px] pb-6 bg-white rounded-2xl shadow-md ">
        {/* Image Section */}
        <div className="relative w-full h-[150px]">
          {/* Background Image */}
          <Image
            src="/assets/eventImage.png"
            alt="Event"
            fill
            className="w-full h-full object-cover rounded-t-2xl"
          ></Image>

          {/* Soft black overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-t-2xl z-0"></div>

          {/* Overlay content */}
          <div className="absolute top-2 left-2 flex gap-2 flex-wrap z-10">
            <span className="bg-white/90 text-xs text-darker-gray px-2 py-1 rounded-2xl shadow">
              Seminar | Tree Planting
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="px-5 text-left">
          {/* Status */}
          <div className="flex items-center gap-2 pt-2 pb-1">
            <span className="w-2 h-2 bg-meduim-green rounded-full inline-block"></span>
            <p className="text-meduim-green text-sm font-semibold">Finished</p>
          </div>

          {/* Date */}
          <p className="text-dark-green text-sm">Mon, 12 May at 8 AM</p>

          {/* Title */}
          <h3 className="text-dark-green text-lg font-bold leading-tight mt-1">
            Green Oasis going <span className="block">Miyawaki</span>
          </h3>

          {/* Location & Going Info */}
          <p className="text-light-green text-sm mt-1">Phnom Penh, Cambodia</p>
          <p className="text-light-green text-sm mt-1 mb-3">100 going</p>

          {/* Action Buttons */}
          <button className="w-full cursor-pointer flex justify-center py-2 bg-light-gray rounded-md text-dark-green font-semibold text-sm lg:text-md">
            Event Ended
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEcoEventEndedComponent;
