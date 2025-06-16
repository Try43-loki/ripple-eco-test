
import Image from "next/image";
import { getAllUserRankingService, getUserRankingFilterService } from "@/service/leaderboardService";
import { SelectComponent } from "@/app/organizer/create-event/_component/SelectComponent";
import FilterPanelComponent from "./FilterPanelComponent";
import { filterLeaderboardAction } from "@/action/LeaderboardAction";


const TopRankingComponent = async ({ searchParams : ParamPromise}) => {
  const {provinceId,categoryId} = await ParamPromise || {};
  console.log("Province ID:", provinceId);
  console.log("Category ID:", categoryId);
  
  const response = await getAllUserRankingService();
  const filterUser = await getUserRankingFilterService(provinceId, categoryId);
   const rawUsers = response.data;

  const rankData = filterUser?.data?.map((user) => {
    let leftIcon = null;
    let rightIcon = null;
    let textColor = "text-dark-green";

    if (user.ranking === 1) {
      leftIcon = "/assets/leaderboard/laurel-wreath-left-01.png";
      rightIcon = "/assets/leaderboard/laurel-wreath-right-01.png";
      textColor = "text-strong-yellow";
    } else if (user.ranking === 2) {
      leftIcon = "/assets/leaderboard/laurel-wreath-left-02.png";
      rightIcon = "/assets/leaderboard/laurel-wreath-right-02.png";
      textColor = "text-darker-gray";
    } else if (user.ranking === 3) {
      leftIcon = "/assets/leaderboard/laurel-wreath-left-03.png";
      rightIcon = "/assets/leaderboard/laurel-wreath-right-03.png";
      textColor = "text-red";
    }
    return {
      rank: user.ranking,
      image:user.appUserResponse.profileImageUrl,
      username: `${user.appUserResponse.firstName.trim()} ${user.appUserResponse.lastName.trim()}`,
      score: user.totalEvents,
      hashtag: "#Tree planting",
      leftIcon,
      rightIcon,
      textColor,
    };
  });

  console.log(rankData);
  
  return (
    <>
      <section className="flex w-full gap-5 flex-col md:flex-row lg:flex-row justify-between ">
        {/* Header */}
        <div>
          <h2 className="text-lg lg:text-xl xl:text-2xl text-dark-green font-bold">
            Top User Ranking
          </h2>
        </div>

        <FilterPanelComponent/>
        
      </section>

      <section className="pt-10 bg-white mb-15">
        <div className="max-h-[500px] overflow-y-auto space-y-4 pr-2 s[-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]">
          {rankData?.map((data,index) => (
            <article className="flex gap-4" key={index}>
              {/* Rank Icon + Number */}
              <div className="flex gap-2 items-center justify-center">
                {data.leftIcon && (
                  <Image
                    src={data?.leftIcon}
                    alt={`left-icon-${data?.rank}`}
                    width={20}
                    height={20}
                  />
                )}
                <p
                  className={`text-xl lg:text-3xl font-bold ${data?.textColor} ${
                    !data?.leftIcon ? "ml-7" : ""
                  }`}
                >
                  {data?.rank}
                </p>
                {data?.rightIcon && (
                  <Image
                    src={data?.rightIcon}
                    alt={`right-icon-${data?.rank}`}
                    width={20}
                    height={20}
                  />
                )}
              </div>

              {/* Leaderboard Card */}
              <article className="flex flex-row justify-between w-full bg-white border border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
                <div className="flex items-center gap-4">
                  <Image
                    src={data?.image}
                    alt="user image"
                    width={40}
                    height={40}
                    objectFit="cover"
                    className="rounded-full h-[40px]"
                  />
                  <h2 className="text-sm md:text-lg lg:text-2xl text-dark-green font-medium">
                    {data?.username}
                    
                  </h2>
                </div>

                <div className="flex gap-6 md:gap-20 lg:gap-15 xl:gap-45 items-center text-sm md:text-lg lg:text-2xl text-dark-green">
                  <p className="font-bold">{data?.score}</p>
                  <p className="bg-meduim-white text-lg px-2 py-1 lg:px-5 lg:py-2 rounded-full">
                    {data?.hashtag}
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

export default TopRankingComponent;
