import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TakeActionNoImageCardComponent = ({ isView, answerData }) => {
  return (
    <main>
      {answerData?.map((data) => (
        <Card className="relative py-5 w-full rounded-2xl bg-light-gray border-none" key={data?.answerId}>
          <CardContent className="flex flex-col items-start gap-y-4">
            <div>
              {isView == "private" ? (
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full bg-meduim-gray" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-62.5 bg-meduim-gray" />
                    <Skeleton className="h-4 w-50 bg-meduim-gray" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-x-4">
                  <img
                    src={data?.appUser?.profileImageUrl}
                    alt={`${data?.appUser?.firstName} ${data?.appUser?.lastName}`}
                    className="h-15 w-15 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-gray">KPSxZyXL</p>
                    <p className="text-sm font-normal text-strong-gray">
                    {dayjs(data?.createAt).format("DD MMM YYYY")} • Public
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>

          <CardHeader>
            <CardDescription className="text-lg text-strong-gray px-6">
              {data?.answer}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </main>
  );
};

export default TakeActionNoImageCardComponent;
