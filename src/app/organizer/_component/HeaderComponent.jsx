"use client";
import React from "react";
import { Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfileDropdownComponent } from "@/components/ProfileDropdownComponent";
import { usePathname } from "next/navigation";
import NotificationItem from "@/components/NotificationComponent";
import { KnockProvider } from "@knocklabs/react";

// Format route path into readable title
const formatRouteTitle = (path) => {
  const segments = path.split("/").filter(Boolean);
  const lastSegment = segments[1];
  // regex
  return lastSegment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

function HeaderComponent({ profile }) {
  const pathname = usePathname();
  const dynamicTitle = formatRouteTitle(pathname);
  const fullName = profile?.data?.firstName + " " + profile?.data?.lastName;

  return (
    <>
      <div className="flex w-full justify-between items-center mb-2">
        <h1 className="text-2xl  font-bold text-green">{dynamicTitle}</h1>
        <article className="flex  justify-center items-center gap-x-4">
          <div className="p-2 rounded-xl h-10 w-10  bg-lighter-white flex justify-center items-center">
            <KnockProvider
              apiKey={process.env.NEXT_PUBLIC_KNOCK_API_KEY}
              userId={3}
            >
              <NotificationItem />
            </KnockProvider>
          </div>
          <div className="px-1 h-10 rounded-lg bg-lighter-white flex justify-center items-center gap-x-2">
            <Avatar>
              <AvatarImage src={profile?.data?.profileImageUrl} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="truncate w-32 text-md font-semibold text-light-green">
              {fullName}
            </h2>

            <ProfileDropdownComponent operator={"organizer"} />
          </div>
        </article>
      </div>
    </>
  );
}

export default HeaderComponent;
