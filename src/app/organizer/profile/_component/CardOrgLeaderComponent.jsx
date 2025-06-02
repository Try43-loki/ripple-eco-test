import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardOrgLeaderComponent = () => {
  return (
    <article>
      <Link href="/">
        <div className="bg-white w-full border-none flex flex-col py-4 px-2 ">
          {/* Title Rank */}
          <span className="font-semibold text-lg">Your rank</span>
          <div className="flex items-center w-80 gap-x-2.5 p-2">
            <p className="px-2 bg-light-gray rounded-full">4</p>
            <div className="w-12.5 h-12.25">
              <img
                src="/assets/profileVolunteer.png"
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <h2 className="text-strong-gray text-sm">
                United Nations Environment Program (UNEP)
              </h2>
              <div className="flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-orange text-orange" />
                <Star className="w-3 h-3 fill-orange text-orange" />
                <Star className="w-3 h-3 fill-light-gray text-light-gray" />
                <Star className="w-3 h-3 fill-light-gray text-light-gray" />
                <Star className="w-3 h-3 fill-light-gray text-light-gray" />
                <p className="text-sm">4.9</p>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div>
            <div className="px-2 py-1 rounded-2xl bg-blue">Recycling</div>
            <p>84 events</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CardOrgLeaderComponent;
