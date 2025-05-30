import React from "react";
import { Star } from "lucide-react";

// import SearchComponent from "./SearchComponent";
import Image from "next/image";
import SearchComponent from "@/app/(user)/leaderboard/_component/SearchComponent";
import { SelectComponent } from "../../create-event/_component/SelectComponent";

export const TopRankingOrgComponent = () => {
  const rankData = [
    {
      rank: 1,
      username: "Username",
      score: 5,
      hashtag: "#Tree plating",
      leftIcon: "/assets/leaderboard/laurel-wreath-left-01.png",
      rightIcon: "/assets/leaderboard/laurel-wreath-right-01.png",
      textColor: "text-strong-yellow",
    },
    {
      rank: 2,
      username: "Username",
      score: 4,
      hashtag: "#Tree plating",
      leftIcon: "/assets/leaderboard/laurel-wreath-left-02.png",
      rightIcon: "/assets/leaderboard/laurel-wreath-right-02.png",
      textColor: "text-darker-gray",
    },
    {
      rank: 3,
      username: "Username",
      score: 3,
      hashtag: "#Tree plating",
      leftIcon: "/assets/leaderboard/laurel-wreath-left-03.png",
      rightIcon: "/assets/leaderboard/laurel-wreath-right03.png",
      textColor: "text-red",
    },
    ...Array.from({ length: 6 }, (_, i) => ({
      rank: i + 4,
      username: "Username",
      score: 2 - i,
      hashtag: "#Tree plating",
      leftIcon: null,
      rightIcon: null,
      textColor: "text-dark-green",
    })),
  ];
  return (
    <>
      <section className="flex w-full gap-5 flex-col md:flex-row lg:flex-row justify-between bg-white ">
        {/* Top  */}
        <div>
          <h2 className="text-lg lg:text-xl xl:text-2xl text-dark-green font-bold">
            Top Organizer Ranking
          </h2>
        </div>

        <article className="flex gap-3 text-md md:text-lg lg:text-xl items-center justify-start ">
          <div className="w-full">
            <p className=" text-green ">Filter by:</p>
          </div>
          {/* province */}
          <SearchComponent />

          {/* category type */}
          <SelectComponent operator={"Categories"} />
        </article>
      </section>

      <section className="pt-10 bg-white mb-15">
        {/* Scrollable container */}
        <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2 s[-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]">
          {rankData.map((user) => (
            <article className="flex gap-4" key={user.rank}>
              {/* Rank Icon + Number */}
              <div className="flex gap-2 items-center justify-center">
                {user.leftIcon && (
                  <Image
                    src={user.leftIcon}
                    alt={`left-icon-${user.rank}`}
                    width={20}
                    height={20}
                  />
                )}
                <p
                  className={`text-xl lg:text-3xl font-bold ${user.textColor} ${
                    !user.leftIcon ? "ml-7" : ""
                  }`}
                >
                  {user.rank}
                </p>
                {user.rightIcon && (
                  <Image
                    src={user.rightIcon}
                    alt={`right-icon-${user.rank}`}
                    width={20}
                    height={20}
                  />
                )}
              </div>

              {/* Leaderboard Card */}
              <article className="flex flex-row justify-between w-full bg-white border border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
                <div className="flex items-center gap-4">
                  <Image
                    src="/assets/leaderboard/image.jpg"
                    alt="user image"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h2 className="text-sm md:text-lg lg:text-2xl text-dark-green font-medium">
                    {user.username}
                  </h2>
                </div>

                <div className="flex gap-6 md:gap-20 lg:gap-15 xl:gap-45 items-center text-sm md:text-lg lg:text-2xl text-dark-green">
                  <div className="flex justify-center items-center flex-col">
                    <p className="font-bold">{user.score}</p>
                    <div className="flex gap-1 text-orange">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                  </div>
                  <p className="bg-meduim-white text-lg px-2 py-1 lg:px-5 lg:py-2 rounded-full">
                    {user.hashtag}
                  </p>
                </div>
              </article>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
