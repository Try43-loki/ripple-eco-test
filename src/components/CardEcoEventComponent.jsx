import React from "react";
import Image from "next/image";
import { RequestFormComponent } from "./RequesFormComponent";
import DonationFormComponent from "./DonationFormComponent";
import InviteFirendFormComponent from "./InviteFirendFormComponent";

import Link from "next/link";
import { ListComponent } from "@/app/organizer/eco-event/_component/ListComponent";
import clsx from "clsx";

const CardEcoEventComponent = ({
  href,
  operator,
  type,
  contribute,
  category,
  status,
  title,
  description,
  date,
  participats,
  location,
}) => {
  return (
    <div className="relative w-[250px] md:w-[270px] lg:w-[280px] pb-6 bg-white rounded-2xl shadow-md">
      <div className="absolute  flex gap-2 flex-wrap z-[1] justify-between w-full p-2">
        <span className="bg-white/90 text-xs text-darker-gray px-2 py-1 rounded-2xl shadow ">
          {`${type} | ${category}`}
        </span>
        {operator == "organizer" ? <ListComponent /> : null}
      </div>
      <Link
        href={
          operator == "organizer" ? "/organizer/eco-event/1" : "/eco-event/1"
        }
        className="cursor-pointer"
      >
        <div>
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
                <span
                  className={clsx(
                    "w-2 h-2  rounded-full inline-block",
                    {
                      "bg-meduim-green": status == "Finished",
                    },
                    {
                      "bg-meduim-gray ": status == "Cancel",
                    },
                    {
                      "bg-blue ": status == "Ongoing",
                    },
                    {
                      "bg-orange ": status == "Upcoming",
                    }
                  )}
                ></span>

                <p
                  className={clsx(
                    "text-sm font-semibold",
                    {
                      "text-meduim-green ": status == "Finished",
                    },
                    {
                      "text-meduim-gray ": status == "Cancel",
                    },
                    {
                      "text-blue ": status == "Ongoing",
                    },
                    {
                      "text-orange ": status == "Upcoming",
                    }
                  )}
                >
                  {status}
                </p>
              </div>
              <p className="text-dark-green text-sm">{date}</p>
              <h3 className="text-dark-green text-lg font-bold leading-tight mt-1">
                {title}
              </h3>
              <p className="text-light-green text-sm mt-1">
                {location} , Cambodia
              </p>
              <p className="text-light-green text-sm mt-1 mb-3">
                {participats} going
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* Action Buttons (outside the link) */}
      {status == "Finished" ? (
        <div className="flex pt-2 cursor-pointer justify-between gap-x-2 w-full px-5">
          <div className=" font-semibold text-gray-600 py-2 px-8 md:px-11 lg:px-10 bg-light-gray rounded-md w-full flex justify-center items-center gap-2">
            Event Ended
          </div>
        </div>
      ) : (
        <div className="flex pt-2 cursor-pointer justify-between gap-x-2 w-full px-5">
          <RequestFormComponent className="grow" contribute={contribute} />
          <button
            className={`p-2 bg-light-gray rounded-md ${
              type == "Seminar" ||
              contribute == "Volunteer" ||
              contribute == "Donation"
                ? "hidden"
                : "block"
            }`}
          >
            <DonationFormComponent />
          </button>

          <button className="p-2 bg-light-gray rounded-md">
            <InviteFirendFormComponent
              eventId={"bc941419-995f-4ab7-bf73-9a3f19e5e27a"}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default CardEcoEventComponent;
