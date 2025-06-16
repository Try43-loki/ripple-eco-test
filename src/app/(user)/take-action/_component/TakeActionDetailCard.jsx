import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Send } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import dayjs from "dayjs";


const TakeActionDetailCard = ({ cardDetail,  userData, view}) => {
  const isLoading = false;
  const ownerData = userData.data;
  return (
    <main>
      <Card className="relative py-8 w-full rounded-2xl bg-light-gray border-none">
        <CardContent className="flex flex-col items-start gap-y-4">
          <div>
            {isLoading ? (
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <img
                  src={ownerData?.profileImageUrl}
                  alt={`${ownerData?.firstName} ${ownerData?.lastName}`}
                  className="h-15 w-15 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-medium text-gray">{`${ownerData?.firstName} ${ownerData?.lastName}`}</p>
                  <p className="text-sm font-normal text-strong-gray">
                    6h agos . Public
                  </p>
                </div>
              </div>
            )}
          </div>

          <CardTitle className="text-2xl lg:text-2xl text-dark-green">
            {cardDetail?.data?.title}
          </CardTitle>

          {view == true && (
            <article className="flex justify-between items-center">
              <div className="mt-1 text-xs md:text-sm lg:text-base bg-light-gray w-fit rounded-full py-1 px-2 md:px-3">
                <p>Anonymous</p>
              </div>
            </article>
          )}

          <article className="flex justify-between items-center">
            <div className="mt-1 text-xs md:text-sm lg:text-base bg-light-gray w-fit rounded-full py-1 px-2 md:px-3">
              <p>@{cardDetail?.data?.description}</p>
            </div>
          </article>

          <article className="space-y-1">
            <div className="flex items-center gap-x-3 px-2 text-strong-gray text-base">
              <CalendarDays className="w-4.5 h-4.5" />
              <p>{dayjs(cardDetail?.data?.createdAt).format("DD MMM YYYY")}</p>
            </div>
            <div className="flex items-center gap-x-3 px-2 text-strong-gray text-base">
              <Send className="w-4.5 h-4.5" />
              <p>@{cardDetail?.data?.destinationPerson}</p>
            </div>
          </article>

          <div className="absolute -top-7 right-16 rounded-2xl border-[12px] border-white bg-white">
            <img
              src={cardDetail?.data?.image}
              alt={cardDetail?.data?.title}
              className="w-[356px] h-[250px] rounded-2xl"
            />
          </div>
        </CardContent>

        <CardHeader>
          <CardDescription className="text-lg text-strong-gray">
            {cardDetail?.data?.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex  items-start gap-5 justify-between">
          <div className="flex flex-col gap-3.5">
            <p className="text-3xl font-bold text-green">{cardDetail?.data?.numberOfSupporter}</p>
            <p className="text-xl font-semibold text-foreground">{ (cardDetail?.data?.numberOfSupporter > 1) ? "SUPPORTERS" : "SUPPORTER"}</p>
          </div>
          {/* <Button
            type="button"
            className="w-[300px] flex gap-x-2.75 bg-green hover:bg-green-600 border-light-gray text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl  py-5 md:py-6.5"
          >
            <Download className="w-6 h-6 text-white" />
            <p className="text-white">Download PDF</p>
          </Button> */}
        </CardFooter>
      </Card>
    </main>
  );
};

export default TakeActionDetailCard;
