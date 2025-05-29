import React from "react";
import Image from "next/image";
import { DollarSign, Mail } from "lucide-react";

// import { DollarSign, Mail } from "lucide-react";

const CardEcoEventComponent = () => {
  return (
    <div className="flex gap-8 pt-6 w-full ">
      <div className=" w-[250px] md:w-[270px] lg:w-[300px] pb-6 bg-white rounded-2xl shadow-md ">
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
            <span className="w-2 h-2 bg-blue rounded-full inline-block"></span>
            <p className="text-blue text-sm font-semibold">Ongoing</p>
          </div>

          {/* Date */}
          <p className="text-dark-green text-sm">Mon, 12 May at 8 AM</p>

          {/* Title */}
          <h3 className="text-dark-green text-lg font-bold leading-tight mt-1">
            Green Oasis going <span className="block">Miyawaki</span>
          </h3>

          {/* Location & Going Info */}
          <p className="text-light-green text-sm mt-1">Phnom Penh, Cambodia</p>
          <p className="text-lighter-green text-sm mt-1 mb-3">100 going</p>

          {/* Action Buttons */}
          <div className="flex pt-2 justify-between">
            <button className="py-2 px-8 md:px-11 lg:px-14 bg-light-gray rounded-md flex items-center gap-2">
              <Image
                src="/assets/tick-circle.png"
                alt="tick-circle"
                width={20}
                height={10}
                className="h-5"
              ></Image>
              <p className="text-sm text-dark-green font-bold">Going</p>
            </button>

            <button className="p-2 bg-light-gray rounded-md">
              <DollarSign size={18} />
            </button>

            <button className="p-2 bg-light-gray rounded-md">
              <Mail size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEcoEventComponent;
