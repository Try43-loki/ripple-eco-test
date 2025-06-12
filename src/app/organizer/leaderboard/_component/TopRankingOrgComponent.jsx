import React from "react";
import { Star } from "lucide-react";

// import SearchComponent from "./SearchComponent";
import Image from "next/image";
import SearchComponent from "@/app/(user)/leaderboard/_component/SearchComponent";
import { SelectComponent } from "../../create-event/_component/SelectComponent";
import { getAllOrganizerRankingService } from "@/service/leaderboardService";

export const TopRankingOrgComponent = async() => {
  const organizerData = await getAllOrganizerRankingService();
  const orgData = organizerData.data;
  const yellow400 = "#FF8C00";
  const rankData = orgData.map((organizer) => {
    let leftIcon = null;
    let rightIcon = null;
    let textColor = "text-dark-green";
    

    if (organizer.ranking === 1) {
      leftIcon = "/assets/leaderboard/laurel-wreath-left-01.png";
      rightIcon = "/assets/leaderboard/laurel-wreath-right-01.png";
      textColor = "text-strong-yellow";
    } else if (organizer.ranking === 2) {
      leftIcon = "/assets/leaderboard/laurel-wreath-left-02.png";
      rightIcon = "/assets/leaderboard/laurel-wreath-right-02.png";
      textColor = "text-darker-gray";
    } else if (organizer.ranking === 3) {
      leftIcon = "/assets/leaderboard/laurel-wreath-left-03.png";
      rightIcon = "/assets/leaderboard/laurel-wreath-right-03.png";
      textColor = "text-red";
    }
    return {
      rank: organizer.ranking,
      image:organizer.appUserResponse.profileImageUrl,
      username: `${organizer.appUserResponse.firstName.trim()} ${organizer.appUserResponse.lastName.trim()}`,
      score: Math.floor(organizer.averageRating),
      hashtag: "#Tree planting",
      leftIcon,
      rightIcon,
      textColor,
    };
  });
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
          {rankData.map((org) => (
            <article className="flex gap-4" key={org.rank}>
              {/* Rank Icon + Number */}
              <div className="flex gap-2 items-center justify-center">
                {org.leftIcon && (
                  <Image
                    src={org.leftIcon}
                    alt={`left-icon-${org.rank}`}
                    width={20}
                    height={20}
                  />
                )}
                <p
                  className={`text-xl lg:text-3xl font-bold ${org.textColor} ${
                    !org.leftIcon ? "ml-7" : ""
                  }`}
                >
                  {org.rank}
                </p>
                {org.rightIcon && (
                  <Image
                    src={org.rightIcon}
                    alt={`right-icon-${org.rank}`}
                    width={20}
                    height={20}
                  />
                )}
              </div>

              {/* Leaderboard Card */}
              <article className="flex flex-row justify-between w-full bg-white border border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
                <div className="flex items-center gap-4">
                  <Image
                    src={org.image}
                    alt="org image"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h2 className="text-sm md:text-lg lg:text-2xl text-dark-green font-medium">
                    {org.username}
                  </h2>
                </div>

                <div className="flex gap-6 md:gap-20 lg:gap-15 xl:gap-45 items-center text-sm md:text-lg lg:text-2xl text-dark-green">
                  <div className="flex justify-center items-center flex-col">
                    <p className="font-bold">{org.score}</p>
                    <div className="flex gap-1 text-orange">
                      {/* Render filled stars */}
                      {/* {[...Array(5)].map((_, index) => (
                        <Star key={index} fill={yellow400} size={24} />
                      ))} */}

                      {/* Render empty stars */}
                      {/* {[...Array(5 - org.score)].map((_, index) => (
                        <Star key={index + org.score} size={24} />
                      ))} */}
                    </div>
                  </div>
                  <p className="bg-meduim-white text-lg px-2 py-1 lg:px-5 lg:py-2 rounded-full">
                    {org.hashtag}
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
