import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { getAllOwnEventService } from "@/service/ecoEventService";
import { getAllOrganizerRankingService } from "@/service/leaderboardService";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardOrgLeaderComponent = async ({ operator, userID }) => {
  const response = await getAllOrganizerRankingService();
  const allCardData = response?.data;
  const ownCardData = allCardData?.find(
    (item) => item?.appUserResponse?.appUserId === userID?.appUserId
  );
  const ownEcoEventData = await getAllOwnEventService();
  const mostParticipantsEvent = ownEcoEventData?.data?.reduce((maxEvent, currentEvent) => {
    return currentEvent.participant > (maxEvent?.participant || 0) ? currentEvent : maxEvent;
  }, null);
  const roundedRating = Math.round(ownCardData?.averageRating * 2) / 2;
  const totalStars = 5;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  return (
    <>
      <Link href="/organizer/leaderboard">
        <Card className="bg-white border-none flex flex-row items-center px-1.25 py-3 justify-between w-full">
          <CardHeader className="flex flex-row items-center w-67 gap-x-2.5 p-2">
            <p className="px-2 bg-light-gray rounded-full">
              {ownCardData?.ranking}
            </p>
            <div className="w-12 h-12">
              <Image
                src={
                  userID?.profileImageUrl?.includes('temp-file')
                    ? userID.profileImageUrl.replace('temp-file', 'permanent-file')
                    : userID?.profileImageUrl
                }
                alt=""
                width={12}
                height={12}
                className="w-full h-full rounded-full"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              {operator ? (
                <h2 className="text-strong-gray text-sm">
                  {userID?.organizerName}
                </h2>
              ) : (
                <h2 className="text-strong-gray text-sm">MEY soytry</h2>
              )}
              <div className="flex flex-row gap-x-1 items-center">
                {[...Array(totalStars)].map((_, index) => {
                  let star;
                  if (index < fullStars) {
                    // Full star
                    star = (
                      <Star
                        key={index}
                        className="w-3 h-3 fill-orange text-orange"
                      />
                    );
                  } else if (index === fullStars && hasHalfStar) {
                    // Half star using overlay trick
                    star = (
                      <div key={index} className="relative w-3 h-3">
                        <Star className="absolute top-0 left-0 w-3 h-3 fill-light-gray text-light-gray" />
                        <Star
                          className="absolute top-0 left-0 w-3 h-3 overflow-hidden fill-orange text-orange"
                          style={{ clipPath: "inset(0 50% 0 0)" }} // left half colored
                        />
                      </div>
                    );
                  } else {
                    // Empty star
                    star = (
                      <Star
                        key={index}
                        className="w-3 h-3 fill-light-gray text-light-gray"
                      />
                    );
                  }

                  return star;
                })}
                <p className="text-sm text-strong-gray ml-1">
                  {roundedRating > 0 ? roundedRating.toFixed(1) : "0"}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex flex-col items-center gap-y-0.5">
            {operator ? (
              <div className="w-27 px-3 py-1.5 rounded-2xl bg-lighter-blue text-center text-sm text-blue">
                {mostParticipantsEvent?.category?.categoryName}
              </div>
            ) : (
              ""
            )}

            <p className="text-sm text-meduim-gray">
              {ownCardData?.totalEvents} event{" "}
              {ownCardData?.totalEvents > 1 ? "s" : ""}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default CardOrgLeaderComponent;
