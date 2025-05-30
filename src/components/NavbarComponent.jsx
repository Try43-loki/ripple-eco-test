"use client";
import Link from "next/link";
import React, { useState } from "react";
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
import { usePathname } from "next/navigation";
import { ProfileDropdownComponent } from "./ProfileDropdownComponent";
import NotificationItem from "./NotificationComponent";
import { KnockProvider } from "@knocklabs/react";
const NavBarComponent = () => {
  const [isLoggin, setisLoggin] = useState(true);
  const currentPath = usePathname();

  return (
    <>
      <div className="px-[180px] w-full absolute top-5 z-20">
        <nav className="flex  items-center justify-between px-[40px] h-14 w-full bg-[#e3dfdf2e] border-[0.5px] border-[#fff8] backdrop-blur-sm rounded-xl ">
          <ul className="flex flex-row justify-between items-center w-full">
            <li>
              <Link href="/home" className="text-white text-2xl font-semibold">
                <h1>
                  Ripple<span className="text-[#048d4c]">Eco</span>
                </h1>
              </Link>
            </li>
            <li className="flex justify-between items-center gap-x-8 text-meduim-gray ">
              <Link
                href="/home"
                className={`hover:text-light-white ${
                  currentPath == "/home"
                    ? "text-light-white"
                    : "text-meduim-gray"
                }`}
              >
                Home
              </Link>
              <Link
                href="/eco-event"
                className={`hover:text-light-white ${
                  currentPath == "/eco-event"
                    ? "text-light-white"
                    : "text-meduim-gray"
                }`}
              >
                Eco Event
              </Link>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`  text-md text-meduim-gray hover:text-white ${
                        currentPath == "/take-action" ||
                        currentPath == "/discussion-forum"
                          ? "text-light-white"
                          : "text-meduim-gray"
                      }`}
                    >
                      Community
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white text-light-green border border-light-strok ">
                      <NavigationMenuLink
                        href="/take-action"
                        className={`w-32 flex flex-row items-center gap-x-2 ${
                          currentPath == "/take-action" ? "bg-light-gray" : ""
                        }`}
                      >
                        <ClipboardList />
                        Take Action
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/discussion-forums"
                        className={`w-32 flex flex-row items-center gap-x-2 ${
                          currentPath == "/discussion-forums"
                            ? "bg-light-gray"
                            : ""
                        }`}
                      >
                        <MessageCircleQuestion />
                        Discussion
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={` text-md text-meduim-gray hover:text-white ${
                        currentPath == "/air-quality" ||
                        currentPath == "/natural-disastor"
                          ? "text-light-white"
                          : "text-meduim-gray"
                      }`}
                    >
                      Environment Monitor
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white text-light-green border border-light-strok ">
                      <NavigationMenuLink
                        href="/air-quality"
                        className={`w-44  flex flex-row items-center gap-x-2 ${
                          currentPath == "/air-quality" ? "bg-light-gray" : ""
                        }`}
                      >
                        <SunDim />
                        Air Quality
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/natural-disaster"
                        className={`w-full flex flex-row items-center gap-x-2 ${
                          currentPath == "/natural-disastor"
                            ? "bg-light-gray"
                            : ""
                        }`}
                      >
                        <Wind />
                        Natural Disastor
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link
                href="/leaderboard"
                className={
                  currentPath == "/leaderboard"
                    ? "text-light-white"
                    : "text-meduim-gray"
                }
              >
                Leaderbord
              </Link>
            </li>
            <li>
              {!isLoggin && (
                <Link href="/login">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition cursor-pointer">
                    Sign in
                  </button>
                </Link>
              )}
              {isLoggin && (
                <div className="flex gap-x-[20px] items-center w-[100px] justify-end">
                  <KnockProvider
                    apiKey={process.env.NEXT_PUBLIC_KNOCK_API_KEY}
                    userId={3}
                  >
                    <div className="mt-1">
                      <NotificationItem />
                    </div>
                  </KnockProvider>
                  <div className="flex items-center">
                    <Popover>
                      <PopoverTrigger>
                        <ProfileDropdownComponent
                          operator={"user"}
                          onLogout={() => setisLoggin(false)}
                        />

                        {/* <Image src='https://i.pinimg.com/736x/24/21/99/2421998d6c1e6bdc695a4243ba70f0ab.jpg' alt='avatar' width={40} height={40} className='rounded-full'/> */}
                      </PopoverTrigger>
                    </Popover>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBarComponent;
