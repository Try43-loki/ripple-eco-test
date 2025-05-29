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
import DetailTopRankComponent from "./DetailTopRankComponent";

const TopRankingComponent = () => {
  return (
    <div>
      <section className="flex gap-5 flex-col md:flex-row lg:flex-row justify-between bg-white ">
        {/* Top  */}
        <div>
          <h2 className="text-xl lg:text-2xl xl:text-3xl text-dark-green font-bold">
            Top User Ranking
          </h2>
        </div>

        <article className="flex gap-3 text-md md:text-lg lg:text-xl items-center justify-start ">
          <div>
            <p className=" text-lighter-green ">Filter by:</p>
          </div>
          {/* province */}
          <div className="">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-lighter-white text-lighter-green hover:text-lighter-green text-sm md:text-md lg:text-lg px-7">
                    Province
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[220px] max-h-[220px] bg-white overflow-y-auto px-2 py-2 space-y-2 text-lighter-green s[-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]">
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Phnom Penh
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Banteay Meanchey
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Battambang
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampong Cham
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampong Chhnang
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampong Speu
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampong Thom
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kampot
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kandal
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kep
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Koh Kong
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Kratie
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Mondulkiri
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Oddar Meanchey
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Pailin
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Preah Vihear
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Prey Veng
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Pursat
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Ratanakiri
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Siem Reap
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Preah Sihanouk
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Stung Treng
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Svay Rieng
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        Takeo
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
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
          <div className="">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-lighter-white text-lighter-green hover:text-lighter-green text-sm md:text-md lg:text-lg px-7">
                    Category Type
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[250px] bg-white px-2 py-2 space-y-2 text-lighter-green ">
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        <Recycle />
                        Enviroment Cleaning
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        <TreeDeciduous />
                        Tree Planting
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row hover:bg-lighter-white items-center gap-x-2 text-sm md:text-md lg:text-lg"
                      >
                        <HandHeart />
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
      <div className="">
        <DetailTopRankComponent />
      </div>
    </div>
  );
};

export default TopRankingComponent;
