import React from "react";
import Image from "next/image";
import { Building, User2, Users2 } from "lucide-react";

const ChampionsLeaderboardComponent = () => {
  return (
    <div className="w-full ">
      <article className="relative bg-white rounded-3xl shadow-md overflow-visible flex flex-col md:flex-row lg:flex-row justify-between items-start p-6 sm:p-8 md:p-10 lg:p-12 ">
        {/* ----- Left side: toggle + text ----- */}
        <div className="max-w-full md:max-w-lg mb-20 md:mb-0">
          <div className="flex gap-3 mb-4">
            <button className="flex items-center gap-1 md:gap-2 lg:gap-2 px-2 py-1 lg:px-3 lg:py-2 rounded-xl border border-gray-300 text-dark-green shadow-sm text-xs md:text-base lg:text-lg">
              <Building size={15} />
              Organizer
            </button>
            <button className="flex items-center gap-1 md:gap-2 lg:gap-2 px-2 py-1 lg:px-3 lg:py-2 rounded-xl bg-green text-white shadow-inner text-xs md:text-base lg:text-lg">
              <Users2 size={15} />
              Volunteer
            </button>
          </div>

          {/* Title & description */}
          <h1 className="text-green text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
            Green Champions Leaderboard
          </h1>
          <p className="text-dark-green text-xs md:text-md lg:text-lg mt-2 max-w-80">
            Share more, do more—earn your spot and motivate others to join in.
          </p>
        </div>

        {/* No responsive yet */}

        {/* ----- Right side: podiums ----- */}
        <div className="relative flex-1">
          {/* Podium container pinned to bottom-right */}
          <div className="absolute top-1.5 right-0 flex items-end ">
            {/* 2nd place */}
            <div className="flex flex-col items-center relative z-0">
              {/* Profile + wreath */}
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
                  className="rounded-full "
                />
                <Image
                  src="/assets/leaderboard/laurel-wreath-right-02.png"
                  alt=""
                  width={20}
                  height={64}
                />
              </div>
              {/* Podium block */}
              <Image
                src="/assets/leaderboard/board-2.png"
                alt="2nd"
                width={130}
                height={60}
              />
            </div>

            {/* 1st place */}
            <div className="flex flex-col items-center relative z-10">
              {/* Profile + wreath */}
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
                  className="rounded-full "
                />
                <Image
                  src="/assets/leaderboard/laurel-wreath-right-01.png"
                  alt=""
                  width={20}
                  height={64}
                />
              </div>
              {/* Podium block */}
              <Image
                src="/assets/leaderboard/board.png"
                alt="1st"
                width={130}
                height={100}
              />
            </div>

            {/* 3rd place */}
            <div className="flex flex-col items-center relative z-0">
              {/* Profile + wreath */}
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
              {/* Podium block */}
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
