import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Bell,
  ClipboardList,
  MessageCircleQuestion,
  SunDim,
  Wind,
} from "lucide-react";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
const NavBarComponent = () => {
  return (
    <>
      <div className="px-[180px] pt-[28px]">
        <nav className="flex flex-row items-center justify-between px-[40px] py-[10px] w-full bg-[#E3DFDF1A] rounded-[30px] border-1 border-solid border-[#FFFFFF] text-white text-[18px] ">
          <div>
            <Link href="">
              <h2>
                ripple<span className="text-[#048d4c]">Eco</span>
              </h2>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-x-[20px]">
            <Link href="">Home</Link>
            <Link href="">Eco Event</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-[#e3dfdf00] text-md  ">
                    Community
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[160px] px-2 py-2 space-y-2 text-[#697D74]">
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2"
                      >
                        <ClipboardList />
                        Take Action
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2"
                      >
                        <MessageCircleQuestion />
                        Discussion
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:underline text-black bg-none text-md ">
                    Environment Monitor
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[180px] px-2 py-2 space-y-2 text-description">
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2"
                      >
                        <SunDim />
                        Air Quality
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href=""
                        className="w-full flex flex-row items-center gap-x-2"
                      >
                        <Wind />
                        Natural Disastor
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="">Leaderbord</Link>
          </div>
          <div className="flex gap-x-[10px] items-center w-[100px] justify-end">
            <Bell className="text-[#048d4c]" />
            <div className="flex items-center">
              <Popover>
                <PopoverTrigger>
                  <div>
                    <img
                      src="https://i.pinimg.com/736x/24/21/99/2421998d6c1e6bdc695a4243ba70f0ab.jpg"
                      alt="avatar"
                      className="w-[30px] h-[30px] rounded-full"
                    />
                    {/* <Image src='https://i.pinimg.com/736x/24/21/99/2421998d6c1e6bdc695a4243ba70f0ab.jpg' alt='avatar' width={40} height={40} className='rounded-full'/> */}
                  </div>
                </PopoverTrigger>
              </Popover>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBarComponent;
