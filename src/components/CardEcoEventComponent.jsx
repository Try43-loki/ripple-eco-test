import React from "react";
import Image from "next/image";
import { RequestFormComponent } from "./RequesFormComponent";
import DonationFormComponent from "./DonationFormComponent";
import InviteFirendFormComponent from "./InviteFirendFormComponent";

import { UpdateEventComponent } from "./UpdateEventComponent";
import Link from "next/link";

const CardEcoEventComponent = ({ href, operator }) => {
  return (
    <div className="relative w-[250px] md:w-[270px] lg:w-[280px] pb-6 bg-white rounded-2xl shadow-md">
      {/* <div className="absolute inset-0 bg-black/20 rounded-t-2xl z-0"></div> */}
      <div className="absolute  flex gap-2 flex-wrap z-[1] justify-between w-full p-2">
        <span className="bg-white/90 text-xs text-darker-gray px-2 py-1 rounded-2xl shadow ">
          Seminar | Tree Planting
        </span>
        {operator == "organizer" ? <UpdateEventComponent /> : null}
      </div>
      <Link href={href} className="cursor-pointer">
        <div>
          {/* Entire clickable area */}

          <div>
            {/* Image Section */}
            <div className="relative w-full h-[150px]">
              <Image
                src="/assets/eventImage.png"
                alt="Event"
                fill
                className="w-full h-full object-cover rounded-t-2xl brightness-75"
              />
            </div>

            {/* Info Section */}
            <div className="px-5 text-left">
              <div className="flex items-center gap-2 pt-2 pb-1">
                <span className="w-2 h-2 bg-orange rounded-full inline-block"></span>
                <p className="text-orange text-sm font-semibold">Upcoming</p>
              </div>
              <p className="text-dark-green text-sm">Mon, 12 May at 8 AM</p>
              <h3 className="text-dark-green text-lg font-bold leading-tight mt-1">
                Green Oasis going <span className="block">Miyawaki</span>
              </h3>
              <p className="text-light-green text-sm mt-1">
                Phnom Penh, Cambodia
              </p>
              <p className="text-light-green text-sm mt-1 mb-3">100 going</p>
            </div>
          </div>
        </div>
      </Link>
      {/* Action Buttons (outside the link) */}
      <div className="flex pt-2 cursor-pointer justify-between gap-x-2 w-full px-5">
        <RequestFormComponent />
        <button className="p-2 bg-light-gray rounded-md">
          <DonationFormComponent />
        </button>
        <button className="p-2 bg-light-gray rounded-md">
          <InviteFirendFormComponent />
        </button>
      </div>
    </div>
  );
};

export default CardEcoEventComponent;
