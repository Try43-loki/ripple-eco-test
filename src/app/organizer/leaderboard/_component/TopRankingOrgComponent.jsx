import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { getAllOrganizerRankingService, getOrgRankingFilterService } from "@/service/leaderboardService";
import FilterPanelComponent from "@/app/(user)/leaderboard/_component/FilterPanelComponent";

const yellow400 = "#FF8C00";

// StarRating component (with half-stars logic)
const StarRating = ({ score }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      // Full star
      stars.push(<Star fill={yellow400} stroke={yellow400} size={24} key={i} />);
    } else if (score >= i - 0.5) {
      // Half star – simulate by using a linear gradient
      stars.push(
        <svg width="24" height="24" key={i} viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`halfGrad-${i}`}>
              <stop offset="50%" stopColor={yellow400} />
              <stop offset="50%" stopColor="none" stopOpacity="1" />
            </linearGradient>
          </defs>
          <Star fill={`url(#halfGrad-${i})`} stroke={yellow400} size={24} />
        </svg>
      );
    } else {
      // Empty star
      stars.push(<Star stroke={yellow400} size={24} key={i} />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
};

export const TopRankingOrgComponent = async ({searchQuery}) => {
  const {provinceId,categoryId} = searchQuery;
  const filterOrg = await getOrgRankingFilterService(provinceId, categoryId);
  // const orgData = organizerData.data;

  const rankData = filterOrg?.data?.map((organizer) => {
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
      image: organizer.appUserResponse.profileImageUrl,
      username: `${organizer.appUserResponse.firstName.trim()} ${organizer.appUserResponse.lastName.trim()}`,
      score: organizer.averageRating,
      leftIcon,
      rightIcon,
      textColor,
    };
  });

  return (
    <>
      <section className="flex w-full gap-5 flex-col md:flex-row lg:flex-row justify-between bg-white">
        <div>
          <h2 className="text-lg lg:text-xl xl:text-2xl text-dark-green font-bold">
            Top Organizer Ranking
          </h2>
        </div>
        <FilterPanelComponent />
      </section>

      <section className="pt-10 bg-white mb-15">
        <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2">
          {rankData?.map((data,index) => (
            <article className="flex gap-4" key={index}>
              <div className="flex gap-2 items-center justify-center">
                {data?.leftIcon && (
                  <Image src={data?.leftIcon} alt="left-icon" width={20} height={20} />
                )}
                <p className={`text-xl lg:text-3xl font-bold ${data?.textColor} ${!data.leftIcon ? "ml-7" : ""}`}>
                  {data?.rank}
                </p>
                {data?.rightIcon && (
                  <Image src={data?.rightIcon} alt="right-icon" width={20} height={20} />
                )}
              </div>

              <article className="flex flex-row justify-between w-full bg-white border border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
                <div className="flex items-center gap-4">
                  <Image
                    src={data?.image}
                    alt="org image"
                    width={40}
                    height={40}
                    className="rounded-full h-[40px] w-[40px]"
                  />
                  <h2 className="text-sm md:text-lg lg:text-2xl text-dark-green font-medium">
                    {data?.username}
                  </h2>
                </div>

                <div className="flex gap-6 md:gap-20 lg:gap-15 xl:gap-45 items-center text-sm md:text-lg lg:text-2xl text-dark-green">
                  <div className="flex justify-center items-center flex-col">
                    <p className="font-bold">{data?.score}</p>
                    <StarRating score={data?.score} />
                  </div>
                </div>
              </article>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
