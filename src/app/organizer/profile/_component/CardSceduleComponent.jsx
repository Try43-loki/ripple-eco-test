import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import dayjs from "dayjs";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardSceduleComponent = ({ cardData }) => {
  const upcomingEvent = cardData?.filter(
    (item) => item?.eventStatus === "Upcoming"
  );
  return (
    <>
      {upcomingEvent?.map((data, index) => (
        <Link href={`/organizer/${data?.eventId}`} key={index}>
          <article className="bg-lightest-green p-2 px-3 rounded-xl flex justify-start gap-x-4 items-center w-full">
            <div className="flex justify-center items-center flex-col  p-1 py-2 rounded-lg bg-green w-12">
              <h3 className="text-white text-xl font-semibold">
                {dayjs(data?.startDateTime).format("DD")}
              </h3>
              <p className="text-sm text-white font-light">
                {dayjs(data?.startDateTime).format("ddd")}
              </p>
            </div>
            <div className="w-full">
              <h4 className="text-black text-label font-medium ">
                {data?.title}
              </h4>
              <p className="text-light-green text-sub-info">
                {data?.provinces?.provinceName} .{" "}
                {dayjs(data?.startDateTime).format("h:mm A")}
              </p>
              <div className="flex items-center justify-between w-full">
                <span className="flex justify-start text-sub-info items-center font-light text-strong-gray gap-x-1">
                  <LayoutDashboard size={12} />
                  {data?.eventType?.eventType} | {data?.category?.categoryName}
                </span>
                <div className="flex items-center">
                  <Avatar className="w-8 h-8 z-10 -ml-2.5">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="bg-white p-0.5 rounded-full"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 z-20 -ml-4">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="bg-white p-0.5 rounded-full"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-8 h-8 z-30 -ml-4 text-center relative">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="opacity-50 "
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <p className="text-xs text-white">+19</p>
                    </div>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </>
  );
};

export default CardSceduleComponent;
