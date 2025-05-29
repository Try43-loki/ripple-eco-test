"use client"; // Only needed if you're using Next.js with app directory

import React, { useState } from "react";
import Image from "next/image";
import { Building, Users2 } from "lucide-react";

const ChampionsLeaderboardComponent = () => {
  const [selectedRole, setSelectedRole] = useState("volunteer");

  return (
    <div className="w-full">
      <article className="relative bg-white rounded-3xl shadow-md overflow-visible flex flex-col md:flex-row lg:flex-row justify-between items-start p-6 sm:p-8 md:p-10 lg:p-12">
        {/* ----- Left side: toggle + text ----- */}
        <div className="max-w-full md:max-w-lg mb-20 md:mb-0">
          {/* Toggle Buttons */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setSelectedRole("volunteer")}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border shadow-sm text-xs md:text-base lg:text-lg transition-all ${
                selectedRole === "volunteer"
                  ? "bg-green text-white"
                  : "border-gray-300 text-dark-green"
              }`}
            >
              <Users2 size={15} />
              User
            </button>
            <button
              onClick={() => setSelectedRole("organizer")}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border shadow-sm text-xs md:text-base lg:text-lg transition-all ${
                selectedRole === "organizer"
                  ? "bg-green text-white"
                  : "border-gray-300 text-dark-green"
              }`}
            >
              <Building size={15} />
              Organizer
            </button>
          </div>

          {/* Dynamic Title & Description */}
          <h1 className="text-green text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Green Champions Leaderboard
          </h1>
          <p className="text-dark-green text-xs md:text-md lg:text-lg mt-2 max-w-80">
            Share more, do more—earn your spot and motivate others to join in.
          </p>
        </div>

        {/* ----- Right side: podiums ----- */}
        <div className="relative flex-1">
          <div className="absolute top-1.5 right-0 flex items-end">
            {/* 2nd place */}
            <div className="flex flex-col items-center relative z-0">
              <div className="absolute -top-8 sm:-top-10 md:-top-12 flex items-center gap-1">
                <Image
                  src="/assets/leaderboard/laurel-wreath-left-02.png"
                  alt=""
                  width={20}
                  height={64}
                />
                <Image
                  src="/assets/leaderboard/image.jpg"
                  alt="2nd"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <Image
                  src="/assets/leaderboard/laurel-wreath-right-02.png"
                  alt=""
                  width={20}
                  height={64}
                />
              </div>
              <Image
                src="/assets/leaderboard/board-2.png"
                alt="2nd"
                width={130}
                height={60}
              />
            </div>

            {/* 1st place */}
            <div className="flex flex-col items-center relative z-10">
              <div className="absolute -top-10 sm:-top-12 md:-top-14 flex items-center gap-1">
                <Image
                  src="/assets/leaderboard/laurel-wreath-right-01.png"
                  alt=""
                  width={20}
                  height={64}
                />
                <Image
                  src="/assets/leaderboard/image.jpg"
                  alt="1st"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <Image
                  src="/assets/leaderboard/laurel-wreath-right-01.png"
                  alt=""
                  width={20}
                  height={64}
                />
              </div>
              <Image
                src="/assets/leaderboard/board.png"
                alt="1st"
                width={130}
                height={100}
              />
            </div>

            {/* 3rd place */}
            <div className="flex flex-col items-center relative z-0">
              <div className="absolute -top-8 sm:-top-10 md:-top-12 flex items-center gap-1">
                <Image
                  src="/assets/leaderboard/laurel-wreath-left-03.png"
                  alt=""
                  width={20}
                  height={64}
                />
                <Image
                  src="/assets/leaderboard/image.jpg"
                  alt="3rd"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <Image
                  src="/assets/leaderboard/laurel-wreath-right03.png"
                  alt=""
                  width={20}
                  height={64}
                />
              </div>
              <Image
                src="/assets/leaderboard/board-3.png"
                alt="3rd"
                width={130}
                height={60}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ChampionsLeaderboardComponent;
