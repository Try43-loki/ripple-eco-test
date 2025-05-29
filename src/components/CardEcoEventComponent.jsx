import React from "react";
import Image from "next/image";
import { DollarSign, Mail } from "lucide-react";
import { RequestFormComponent } from "./RequesFormComponent";
import DonationFormComponent from "./DonationFormComponent";
import Link from "next/link";
import { DialogDescription } from "@radix-ui/react-dialog";
import { DialogFooter } from "./ui/dialog";
import InviteFirendFormComponent from "./InviteFirendFormComponent";

const CardEcoEventComponent = () => {
  return (
    <div className="">
      <div className=" w-[250px] md:w-[270px] lg:w-[270px] pb-6 bg-white rounded-2xl shadow-md ">
        {/* Image Section */}
        <Link href={`/eco-event/${2}`}>
          <div className="relative w-full h-[150px]">
            {/* Background Image */}
            <Image
              src="/assets/eventImage.png"
              alt="Event"
              fill
              className="w-full h-full object-cover rounded-t-2xl"
            />

            {/* Soft black overlay */}
            <div className="absolute inset-0 bg-black/20 rounded-t-2xl z-0"></div>

            {/* Overlay content */}
            <div className="absolute top-2 left-2 flex gap-2 flex-wrap z-10">
              <span className="bg-white/90 text-xs text-darker-gray px-2 py-1 rounded-2xl shadow">
                Seminar | Tree Planting
              </span>
            </div>
          </div>
        </Link>

        {/* Info Section */}

        <div className="px-5 text-left">
          {/* Status */}
          <Link href={`/eco-event/${2}`}>
            <div className="flex items-center gap-2 pt-2 pb-1">
              <span className="w-2 h-2 bg-orange rounded-full inline-block"></span>
              <p className="text-orange text-sm font-semibold">Upcoming</p>
            </div>

            {/* Date */}
            <p className="text-dark-green text-sm">Mon, 12 May at 8 AM</p>

            {/* Title */}
            <h3 className="text-dark-green text-lg font-bold leading-tight mt-1">
              Green Oasis going <span className="block">Miyawaki</span>
            </h3>

            {/* Location & Going Info */}
            <p className="text-light-green text-sm mt-1">
              Phnom Penh, Cambodia
            </p>
            <p className="text-light-green text-sm mt-1 mb-3">100 going</p>
          </Link>
          {/* Action Buttons */}
          <div className="flex pt-2 cursor-pointer justify-between gap-x-2 w-full !border-none">
            <RequestFormComponent />

            <button className="p-2 cursor-pointer bg-light-gray rounded-md">
              <DonationFormComponent />
            </button>

            <button className="p-2 cursor-pointer bg-light-gray rounded-md">
              <InviteFirendFormComponent />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEcoEventComponent;
