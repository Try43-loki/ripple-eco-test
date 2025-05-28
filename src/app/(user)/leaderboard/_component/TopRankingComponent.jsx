import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SunDim } from "lucide-react";
import Image from "next/image";

const TopRankingComponent = () => {
  return (
    <div>
      <section className="flex gap-5 flex-col md:flex-row lg:flex-row justify-between bg-white px-6 md:px-20 lg:px-45 pt-45 md:pt-35 lg:pt-35 pb-10">
        <div>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-dark-green font-bold">
            Top Organizer Ranking
          </h2>
        </div>

        <article className="flex gap-2 text-md md:text-lg lg:text-xl">
          <div>
            <p className="pt-1 lg:pt-2 text-lighter-green">Filter by:</p>
          </div>
          {/* province */}
          <div className="pt-0 lg:pt-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-lighter-white text-lighter-green hover:text-lighter-green text-sm md:text-md lg:text-lg lg:px-7">
                    Province
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[220px] max-h-[220px] overflow-y-auto px-2 py-2 space-y-2 text-lighter-green s[-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]">
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Phnom Penh
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Banteay Meanchey
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Battambang
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampong Cham
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampong Chhnang
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampong Speu
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampong Thom
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampot
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kandal
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kep
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Koh Kong
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kratie
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Mondulkiri
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Oddar Meanchey
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Pailin
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Preah Vihear
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Prey Veng
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Pursat
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Ratanakiri
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Siem Reap
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Preah Sihanouk
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Stung Treng
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Svay Rieng
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Takeo
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Tboung Khmum
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* category type */}
          <div className="pt-0 lg:pt-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-lighter-white text-lighter-green hover:text-lighter-green text-sm md:text-md lg:text-lg lg:px-7">
                    Category Type
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[250px] px-2 py-2 space-y-2 text-lighter-green ">
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        <SunDim />
                        Enviroment Cleaning
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        <SunDim />
                        Tree Planting
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        <SunDim />
                        Donation
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </article>
      </section>

      <section className="px-6 md:px-20 lg:px-45 h-full bg-white mb-15">
        <div className="">
          <article className="flex gap-4 ">
            {/* image rank 1 */}
            <div className="flex gap-2 items-center justify-center">
              <div>
                <Image
                  src="/assets/laurel-wreath-left-01.png"
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
                  src="/assets/laurel-wreath-right-01.png"
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
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
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
                  src="/assets/laurel-wreath-left-02.png"
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
                  src="/assets/laurel-wreath-right-02.png"
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
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
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
                  src="/assets/laurel-wreath-left-03.png"
                  alt="laurel-wreath-left-03"
                  width={20}
                  height={20}
                ></Image>
              </div>
              <p className="text-xl lg:text-3xl font-bold text-red">3</p>
              <div>
                <Image
                  src="/assets/laurel-wreath-right03.png"
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
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
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
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-10 mt-4 ">
            {/* rank 5*/}
            <div className="flex gap-2 items-center justify-center">
              <p className="text-xl lg:text-3xl font-bold text-dark-green ml-7">
                5
              </p>
            </div>
            {/* leaderboard card 5*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-10 mt-4 ">
            {/* rank 6*/}
            <div className="flex gap-2 items-center justify-center">
              <p className="text-xl lg:text-3xl font-bold text-dark-green ml-7">
                6
              </p>
            </div>
            {/* leaderboard card 6*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-10 mt-4 ">
            {/* rank 7*/}
            <div className="flex gap-2 items-center justify-center">
              <p className="text-xl lg:text-3xl font-bold text-dark-green ml-7">
                7
              </p>
            </div>
            {/* leaderboard card 7*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-10 mt-4 ">
            {/* rank 8*/}
            <div className="flex gap-2 items-center justify-center">
              <p className="text-xl lg:text-3xl font-bold text-dark-green ml-7">
                8
              </p>
            </div>
            {/* leaderboard card 8*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-10 mt-4 ">
            {/* rank 9*/}
            <div className="flex gap-2 items-center justify-center">
              <p className="text-xl lg:text-3xl font-bold text-dark-green ml-7">
                9
              </p>
            </div>
            {/* leaderboard card 9*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
                  #RiverCleanup
                </p>
              </div>
            </article>
          </article>

          <article className="flex gap-10 mt-4 ">
            {/* rank 10*/}
            <div className="flex gap-2 items-center justify-center">
              <p className="text-xl lg:text-3xl font-bold text-dark-green ml-7">
                10
              </p>
            </div>
            {/* leaderboard card 10*/}
            <article className="flex flex-row justify-between w-full bg-white border-1 border-light-gray rounded-2xl p-2 md:p-3 lg:p-5">
              <div className="rounded-full w-[30px] h-[30px] lg:w-[50px] lg:h-[40px] flex gap-4 items-center">
                <Image
                  src="/assets/image.jpg"
                  alt="image"
                  width={40}
                  height={80}
                  className="rounded-full"
                ></Image>
                <h2 className="text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                  Username
                </h2>
              </div>

              <div className="flex gap-45 items-center text-md md:text-lg lg:text-2xl mt-1 text-dark-green">
                <p className=" font-bold">12</p>
                <p className=" bg-meduim-white px-5 py-2 rounded-full">
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
