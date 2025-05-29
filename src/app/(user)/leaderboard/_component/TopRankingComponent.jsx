import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Recycle, TreeDeciduous, HandHeart } from "lucide-react";
import Image from "next/image";
import { SelectComponent } from "./SelectComponent";
import SearchComponent from "./SearchComponent";

const TopRankingComponent = () => {
  return (
    <div>
      <section className="flex gap-5 flex-col md:flex-row lg:flex-row justify-between bg-white px-6 md:px-20 lg:px-45 pt-45 md:pt-35 lg:pt-35 pb-10">
        {/* Top  */}
        <div>
          <h2 className="text-lg lg:text-xl xl:text-2xl text-dark-green font-bold">
            Top User Ranking
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

      <section className="px-6 md:px-20 lg:px-45 h-full bg-white mb-15">
        <div className="">
          <article className="flex gap-4 ">
            {/* image rank 1 */}
            <div className="flex gap-2 items-center justify-center">
              <div>
                <Image
                  src="/assets/leaderboard/laurel-wreath-left-01.png"
                  alt="laurel-wreath-left-01"
                  width={20}
                  height={20}
                ></Image>
              </div>
              <p className="text-xl lg:text-3xl font-bold text-strong-yellow ">
                1
              </p>
              <div>
                <Image
                  src="/assets/leaderboard/laurel-wreath-right-01.png"
                  alt="laurel-wreath-left-01"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
            {/* leaderboard card 1 */}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/leaderboard/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-sm md:text-lg lg:text-xl text-dark-green font-medium">
                  Username
                </h2>
              </div>

              <div className="flex gap-6 md:gap-20 lg:gap-15 xl:gap-45 items-center text-sm md:text-lg lg:text-2xl text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-2 py-1 lg:px-3 text-lg lg:py-1 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-4 mt-4 ">
            {/* image rank 2*/}
            <div className="flex gap-2 items-center justify-center">
              <div>
                <Image
                  src="/assets/leaderboard/laurel-wreath-left-02.png"
                  alt="laurel-wreath-left-02"
                  width={20}
                  height={20}
                ></Image>
              </div>
              <p className="text-xl lg:text-3xl font-bold text-darker-gray">
                2
              </p>
              <div>
                <Image
                  src="/assets/leaderboard/laurel-wreath-right-02.png"
                  alt="laurel-wreath-left-02"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
            {/* leaderboard card 2*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/leaderboard/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-sm md:text-lg lg:text-xl text-dark-green font-medium">
                  Username
                </h2>
              </div>

              <div className="flex gap-6 md:gap-20 lg:gap-15 xl:gap-45 items-center text-sm md:text-lg lg:text-2xl text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-2 py-1 lg:px-3 text-lg lg:py-1 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-4 mt-4 ">
            {/* image rank 3*/}
            <div className="flex gap-2 items-center justify-center">
              <div>
                <Image
                  src="/assets/leaderboard/laurel-wreath-left-03.png"
                  alt="laurel-wreath-left-03"
                  width={20}
                  height={20}
                ></Image>
              </div>
              <p className="text-xl lg:text-3xl font-bold text-red">3</p>
              <div>
                <Image
                  src="/assets/leaderboard/laurel-wreath-right03.png"
                  alt="laurel-wreath-left-03"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
            {/* leaderboard card 3*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/leaderboard/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-sm md:text-lg lg:text-xl text-dark-green font-medium">
                  Username
                </h2>
              </div>

              <div className="flex gap-6 md:gap-20 lg:gap-15 xl:gap-45 items-center text-sm md:text-lg lg:text-2xl text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-2 py-1 lg:px-3 text-lg lg:py-1 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-10 mt-4 ">
            {/* rank 4*/}
            <div className="flex gap-2 items-center justify-center">
              <p className="text-xl lg:text-3xl font-bold text-dark-green ml-7">
                4
              </p>
            </div>
            {/* leaderboard card 4*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/leaderboard/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-sm md:text-lg lg:text-xl text-dark-green font-medium">
                  Username
                </h2>
              </div>

              <div className="flex gap-6 md:gap-20 lg:gap-15 xl:gap-45 items-center text-sm md:text-lg lg:text-2xl text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-2 py-1 lg:px-3 text-lg lg:py-1 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>
        </div>
      </section>
    </div>
  );
};

export default TopRankingComponent;
