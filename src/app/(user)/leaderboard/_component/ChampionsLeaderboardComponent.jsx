import React from "react";
import Image from "next/image";

const ChampionsLeaderboardComponent = () => {
  return (
    <div className="w-[2260px] pr-12 md:pr-40 lg:pr-90 pt-80 ">
      <section className="relative px-6 md:px-20 lg:px-45 ">
        <article className="bg-white rounded-3xl shadow-md overflow-visible flex justify-between items-start px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10">
          {/* Left side: toggle + text */}
          <div className="max-w-xl">
            {/* Toggle */}
            <div className="flex gap-3 mb-4 justify-start">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 text-gray-800 shadow-sm">
                <Image
                  src="/assets/building.png"
                  alt="building"
                  width={20}
                  height={20}
                />
                <span className="font-medium text-sm md:text-base lg:text-lg">
                  Organizer
                </span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green text-white shadow-inner">
                <Image
                  src="/assets/profile2user.png"
                  alt="user"
                  width={20}
                  height={20}
                />
                <span className="font-medium text-sm md:text-base lg:text-lg">
                  User
                </span>
              </button>
            </div>

            {/* Title & description */}
            <h1 className="text-green text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Green Champions Leaderboard
            </h1>
            <p className="text-dark-green text-sm md:text-base lg:text-lg mt-2">
              Share more, do more—earn your spot and motivate others to join in.
            </p>
          </div>

          {/* Right side: podiums */}
          <div className="flex items-end gap-6 relative -mr-0">
            {/* 2nd place */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="rounded-t-3xl flex justify-center items-end">
                  {/* <span className="text-white text-2xl font-bold mb-3">2</span> */}
                  <Image src="/assets/board-2.png" alt="board" width={130} height={60} className=""></Image>
                </div>
                <Image
                  src="/assets/profile.png"
                  alt="2nd"
                  width={64}
                  height={64}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
                />
              </div>
              {/* <span className="text-gray-600 text-sm mt-2">2nd</span> */}
            </div>

            {/* 1st place */}
            <div className="flex flex-col items-center z-10">
              <div className="relative">
                <div className=" rounded-t-3xl flex justify-center items-end">
                  <Image src="/assets/board.png" alt="board" width={130} height={100} className=""></Image>
                  {/* <span className="text-white text-2xl font-bold mb-3">1</span> */}
                </div>
                <Image
                  src="/assets/profile.png"
                  alt="1st"
                  width={64}
                  height={64}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
                />
              </div>
              {/* <span className="text-gray-600 text-sm mt-2">1st</span> */}
            </div>

            {/* 3rd place */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="rounded-t-3xl flex justify-center items-end">
                  <Image src="/assets/board-3.png" alt="board" width={130} height={60} className=""></Image>
                  {/* <span className="text-white text-2xl font-bold mb-3">3</span> */}
                </div>
                <Image
                  src="/assets/image.png"
                  alt="3rd"
                  width={64}
                  height={64}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
                />
              </div>
              {/* <span className="text-gray-600 text-sm mt-2">3rd</span> */}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ChampionsLeaderboardComponent;
