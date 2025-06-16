"use client";

import React from "react";
import { CalendarDays, Send } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";
import ExcelButton from "./DownloadComponent";
import moment from "moment";
import Link from "next/link";

const TakeActionCardDetail = ({ otherUser, cardDetail, view, currentUser }) => {

  const isLoading = false;
  const userProfile = otherUser?.data;
  const otherUserId = otherUser?.data?.appUserId;
  const isOrgOther = otherUser?.data?.organizer;
  const currentUserId = currentUser?.data?.appUserId;
  const isOrganizer = currentUser?.data?.organizer;
  return (
    <main>
      <Card className="relative py-8 w-full rounded-2xl bg-light-gray border-none">
        <CardContent className="flex flex-col items-start gap-y-4">
          <div>
            {isLoading ? (
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-62.5" />
                  <Skeleton className="h-4 w-50" />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-x-4">
                <Link className="h-15 w-15"
                  href={
                    currentUserId === otherUserId ? (isOrganizer ? '/organizer/profile' : '/profile')    // viewing your own profile
                      : (isOrgOther ? `/organizer/view-profile/${otherUserId}`   // organizer viewing someone else
                      : `/view-profile/${otherUserId}`)      // regular user viewing someone else
                  }
                >
                <img
                  src={userProfile?.profileImageUrl}
                  alt={`${userProfile?.firstName} ${userProfile?.lastName}`}
                  className="w-full h-full rounded-full object-cover"
                />
                </Link>
                
                <div className="flex flex-col">
                  <p className="text-xl font-medium text-gray">{`${userProfile?.firstName} ${userProfile?.lastName}`}</p>
                  <p className="text-sm font-normal text-strong-gray">
                  {moment(cardDetail?.data?.createdAt).fromNow()} . Public
                  </p>
                </div>
              </div>
            )}
          </div>

          <CardTitle className="text-2xl lg:text-3xl text-meduim-green">
            {cardDetail?.data?.title}
          </CardTitle>

          {view == "private" && (
            <article className="flex justify-between items-center">
              <div className="mt-1 text-xs md:text-sm lg:text-base bg-light-gray w-fit rounded-full py-1 px-2 md:px-3">
                <p>Anonymous</p>
              </div>
            </article>
          )}

          <article className="flex justify-between items-center">
            <div className="mt-1 text-xs md:text-sm lg:text-base bg-light-gray w-fit rounded-full py-1 px-2 md:px-3">
              <p className="text-blue ">{cardDetail?.data?.destinationPerson}</p>
            </div>
          </article>

          <article className="space-y-1">
            <div className="flex items-center gap-x-3 px-2 text-strong-gray text-base">
              <CalendarDays className="w-4.5 h-4.5" />
              <p>{dayjs(cardDetail?.data?.createdAt).format("DD MMM YYYY")}</p>
            </div>
            <div className="flex items-center gap-x-3 px-2 text-strong-gray text-base">
              <Send className="w-4.5 h-4.5" />
              <p>{cardDetail?.data?.destinationPerson}</p>
            </div>
          </article>

          <div className="absolute -top-7 right-16 rounded-2xl border-[12px] border-white bg-white">
            <img
              src={
                cardDetail?.data?.image?.includes("temp-file")
                  ? cardDetail?.data?.image.replace("temp-file", "permanent-file")
                  : cardDetail?.data?.image
              }
              alt={cardDetail?.data?.title}
              className="w-89 h-62.5 rounded-2xl"
            />
          </div>
        </CardContent>

        <CardHeader>
          <CardDescription className="text-lg text-strong-gray px-6">
            {cardDetail?.data?.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex  items-start gap-5 justify-between">
          <div className="flex flex-col gap-3.5">
            <p className="text-3xl font-bold text-green">{cardDetail?.data?.numberOfSupporter}</p>
            <p className="text-xl font-semibold text-foreground">{cardDetail?.data?.numberOfSupporter > 1 ? "SUPPORTERS": "SUPPORTER"}</p>
          </div>
          <ExcelButton data={cardDetail?.data}/>
        </CardFooter>
      </Card>
    </main>
  );
};

export default TakeActionCardDetail;
