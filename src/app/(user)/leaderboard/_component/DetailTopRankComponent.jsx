import React from "react";
import Image from "next/image";

const DetailTopRankComponent = () => {
  // mock data
  const rankData = [
    {
      rank: 1,
      username: "Koko",
      score: 12,
      hashtag: "#RiverCleanup",
      leftIcon: "/assets/laurel-wreath-left-01.png",
      rightIcon: "/assets/laurel-wreath-right-01.png",
      textColor: "text-strong-yellow",
    },
    {
      rank: 2,
      username: "Kaka",
      score: 12,
      hashtag: "#RiverCleanup",
      leftIcon: "/assets/laurel-wreath-left-02.png",
      rightIcon: "/assets/laurel-wreath-right-02.png",
      textColor: "text-darker-gray",
    },
    {
      rank: 3,
      username: "Mama",
      score: 12,
      hashtag: "#RiverCleanup",
      leftIcon: "/assets/laurel-wreath-left-03.png",
      rightIcon: "/assets/laurel-wreath-right03.png",
      textColor: "text-red",
    },
    ...Array.from({ length: 6 }, (_, i) => ({
      rank: i + 4,
      username: "Username",
      score: 12,
      hashtag: "#RiverCleanup",
      leftIcon: null,
      rightIcon: null,
      textColor: "text-dark-green",
    })),
  ];

  return (
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
                  src="/assets/image.jpg"
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
                <p className="font-bold">{user.score}</p>
                <p className="bg-meduim-white px-2 py-1 lg:px-5 lg:py-2 rounded-full">
                  {user.hashtag}
                </p>
              </div>
            </article>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DetailTopRankComponent;
