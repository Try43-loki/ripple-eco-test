"use client";

import { CircleCheck, Dot, Forward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardArchivesComponent = () => {
  return (
    <article>
      <Link href="">
        <div className="flex w-full gap-5 pr-3.5 shadow-xl rounded-xl">
          {/* Left Side */}
          <div className="relative w-fit">
            <Image
              width={250}
              height={250}
              src="/assets/eventImage.png"
              alt="Green Oasis going Miyawaki event"
              className="rounded-2xl object-cover h-full w-full "
            />
            <div className="absolute px-4 p-1.5 bg-white text-black text-xs top-1.5 left-3 rounded-xl">
              <p>Seminar | Tree Planting</p>
            </div>
          </div>
          {/* Right Side As Col */}
          <div className="flex flex-col">
            {/* Top */}
            <div className="flex w-full flex-col p-2 ">
              <p className="text-sm">Mon, 12 May</p>
              <h2 className="text-2xl font-bold">Green Oasis Going Miyakawi</h2>
              <p className="text-sm font-medium text-meduim-gray mt-1">
                Phnom Penh, Cambodia
              </p>
            </div>
            {/* Middle*/}
            <div className="flex justify-between p-2">
              <p className="line-clamp-3 text-sm w-1/2 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-sm text-strong-gray self-end">100 going</p>
            </div>
            {/* Bottom */}
            <div className="flex  justify-between gap-x-3.5 p-2">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center px-3 h-6 bg-light-gray text-strong-gray rounded-lg text-xs w-20 ">
                  <Dot size={32} />
                  <span className="text-strong-gray font-medium ">Cancel</span>
                </div>
              </div>
              <div className="flex gap-3.5">
                <div className="flex items-center justify-center text-dark-gray gap-x-2 px-6.5 py-1.5 bg-light-gray  text-xs font-bold rounded-lg">
                  <CircleCheck />
                  <span className="text-base font-semibold ">Going</span>
                </div>
                <div className=" flex justify-center text-dark-gray items-center w-[50px] bg-light-gray text-xs font-bold rounded-lg">
                  <Forward />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CardArchivesComponent;
