"use client";
import React from "react";
import {
  CalendarDays,
  Home,
  User2,
  SquareTerminal,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation"; // For Next.js app router

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import Image from "next/image";

// Menu items
const items = [
  {
    title: "Overview",
    url: "/organizer/overview",
    icon: Home,
  },
  {
    title: "Eco Event",
    url: "/organizer/eco-event",
    icon: CalendarDays,
  },
  {
    title: "Volunteer",
    url: "/organizer/volunteer",
    icon: User2,
  },
];

const subItems = [
  {
    title: "Community",
    url: "#",
    items: [
      {
        title: "Take Action",
        url: "/organizer/take-action",
      },
      {
        title: "Discussion",
        url: "/organizer/discussion-forums",
      },
      {
        title: "Leaderboard",
        url: "/organizer/leaderboard",
      },
    ],
  },
  {
    title: "Environment Monitor",
    url: "#",
    items: [
      {
        title: "Air Quality",
        url: "/organizer/air-quality",
      },
      {
        title: "Natural Disaster",
        url: "/organizer/natural-disaster",
      },
    ],
  },
];

export function AppSidebar() {
  const router = usePathname();
  const isActive = (url) => {
    const cleanCurrentPath = router;
    return cleanCurrentPath === url;
  };

  const isParentActive = (parentItem) => {
    return parentItem.items?.some((item) => isActive(item.url));
  };

  return (
    <Sidebar className="border-r border-light-strok">
      <SidebarContent>
        {/* Header Section */}
        <SidebarGroup>
          <figure className="px-4 mt-2 mb-2 border-green-200 flex justify-center items-center">
            <Link href={"/organizer/overview"} className="cursor-pointer">
              <Image
                height={50}
                width={140}
                src="/assets/RippleEco-ractangle.png"
                alt="Ripple Eco Logo"
              />
            </Link>
          </figure>

          <SidebarGroupContent className="px-2 mt-2">
            {/* Main Navigation */}
            <SidebarMenu>
              {items.map((item) => {
                const itemIsActive = isActive(item.url);
                return (
                  <SidebarMenuItem className="text-xl" key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`text-lg font-light transition-all duration-200 flex items-center gap-5 ${
                        itemIsActive
                          ? "text-strong-green"
                          : "text-lighter-green hover:text-green"
                      }`}
                    >
                      <Link href={item.url}>
                        <item.icon className="!h-5 !w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Collapsible Section */}
        <SidebarGroup>
          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              {subItems.map((item, index) => {
                const parentActive = isParentActive(item);
                return (
                  <Collapsible
                    key={index}
                    defaultOpen={parentActive} // Keep open if any child is active
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="text-dark-green text-lg hover:text-strong-green hover:bg-none transition-all duration-200 font-medium">
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => {
                            const subItemIsActive = isActive(subItem.url);

                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  className={`text-[16px] transition-colors duration-200 ${
                                    subItemIsActive
                                      ? "text-strong-green"
                                      : "text-light-green"
                                  }`}
                                >
                                  <Link
                                    href={subItem.url}
                                    className="flex items-center gap-3"
                                  >
                                    <span>{subItem?.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        <div className="mt-auto border-t border-green-200 p-4">
          <div className="text-center">
            <p className="text-xs text-emerald-600 font-medium">
              Together for a greener future 🌱
            </p>
            <div className="flex justify-center mt-3 space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
