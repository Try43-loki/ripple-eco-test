import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import { DeleteComponent } from "../app/(user)/take-action/_component/DeleteComponent";
import Link from "next/link";
import { getCurrentUserProfileService } from "@/service/profileService";

const TakeActionCard = async ({ cardData, isOwner, isOrganizer, layout }) => {
  const currentUser = await getCurrentUserProfileService();
  const currentUserId = currentUser?.data?.appUserId;
  const ottherUserId = cardData?.map((data) => data?.appUser?.appUserId);
  return (
    <main>
      <section className="flex flex-wrap gap-11 justify-start items-start w-full">
        {cardData?.map((data, index) => (
          <Card
            key={index}
            className="p-0 pb-4 w-70 h-94 rounded-2xl  border border-light-strok"
          >
            <CardContent className="p-2  h-[155px] relative">
              <Image
                src={
                  data?.image?.includes("temp-file")
                    ? data.image.replace("temp-file", "permanent-file")
                    : data?.image
                }
                alt={data?.title}
                width={270}
                height={150}
                className="rounded-t-xl h-40 object-cover"
              />
              {isOwner && currentUserId == ottherUserId ? (
                <div className="absolute top-0 left-0 flex justify-between items-center p-3 w-full">
                <p className="text-[12px] px-3 text-dark-green bg-white  py-1 rounded-2xl font-medium">
                  {data?.anonymous ? "Anonymous" : "Public"}
                </p>
                  <DeleteComponent cardId={data?.takeActionId} />
              </div>
              ):
              <div className="absolute top-0 left-0 flex justify-end items-center p-3 w-full">
                <p className="text-[12px] px-3 text-dark-green bg-white  py-1 rounded-2xl font-medium">
                  {data?.anonymous ? "Anonymous" : "Public"}
                </p>
              </div>
              }
              
            </CardContent>

            {layout === "col" ? (
              <div>
                <CardHeader className="px-2">
                  <CardTitle
                    className={"text-[18px] text-dark-green line-clamp-1"}
                  >
                    {data?.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-[14px] text-lighter-green min-h-[50px]">
                    {data?.description}
                  </CardDescription>
                  <Link
                    href={{
                      pathname: `${
                        isOrganizer ? "/organizer" : ""
                      }/take-action/${data?.takeActionId}`,
                      query: {
                        view: data?.anonymous ? "public" : "private",
                        owner: isOwner ? "true" : "false",
                      },
                    }}
                    className="flex gap-x-2 items-center text-green text-[16px]"
                  >
                    <h1 className="font-bold text-lg">ACT NOW</h1>
                    <Play className="w-[14px] h-[14px] fill-green" />
                  </Link>
                </CardHeader>

                <CardFooter className="flex flex-col items-start p-2 mt-4">
                  <div>
                    <p className="text-[20px] font-bold text-green">
                      {data?.numberOfSupporter?.toLocaleString()}
                    </p>
                    <p className="text-[10px] font-semibold text-black">
                      {data?.numberOfSupporter > 1 ? "SUPPORTERS" : "SUPPORTER"}
                    </p>
                  </div>
                </CardFooter>
              </div>
            ) : (
              <div>
                <CardHeader className="px-2">
                  <CardTitle className={"text-[18px] line-clamp-1"}>
                    {data?.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-[14px] text-lighter-green min-h-[50px]">
                    {data?.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col justify-start items-start p-2  mt-5">
                  <Link
                    href={{
                      pathname: `${
                        isOrganizer ? "/organizer" : ""
                      }/take-action/${data?.takeActionId}`,
                      query: {
                        view: data?.anonymous ? "public" : "private",
                        owner: isOwner ? "true" : "false",
                      },
                    }}
                    className="flex gap-x-2 items-center text-green text-[16px]"
                  >
                    <h1 className="font-bold texxt-lg">ACT NOW</h1>
                    <Play className="w-[14px] h-[14px] fill-green" />
                  </Link>
                  <div>
                    <p className="text-[20px] font-bold text-green">
                      {data?.numberOfSupporter?.toLocaleString()}
                    </p>
                    <p className="text-[10px] font-medium text-lighter-green">
                      SUPPORTER {data?.numberOfSupporter > 1 ? "S" : ""}
                    </p>
                  </div>
                </CardFooter>
              </div>
            )}
          </Card>
        ))}
      </section>
    </main>
  );
};

export default TakeActionCard;
