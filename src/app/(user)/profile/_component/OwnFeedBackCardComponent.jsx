import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";
import React from "react";
const imagePath = "/badges/no profile icon.jpg"
const OwnFeedBackCardComponent = ({ link, desc }) => {
  const isLoading = false;
  let isHasImage = true;
  let image = link;
  let paddingY;

  if (image === "") {
    paddingY = "py-6";
    isHasImage = false;
  } else {
    paddingY = "";
  }

  return (
    <main>
      <Card
        className={`w-full rounded-2xl flex flex-col items-center gap-y-5 border border-light-gray ${paddingY}`}
      >
        <CardContent className="flex items-center justify-between w-full">
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
              <div className="flex items-center space-x-4">
                <img
                  src={imagePath}
                  alt="user"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex flex-col gap-y-0">
                  <p className="text-lg font-medium text-gray">Chorn Seyha</p>
                  <div className="flex items-center gap-x-1">
                    <p className="text-sm font-normal text-strong-gray">4.0</p>
                    <Star className="w-2.5 h-2.5 text-strong-orange fill-strong-orange" />
                    <Star className="w-2.5 h-2.5 text-strong-orange fill-strong-orange" />
                    <Star className="w-2.5 h-2.5 text-strong-orange fill-strong-orange" />
                    <Star className="w-2.5 h-2.5 text-strong-orange fill-strong-orange" />
                    <Star className="w-2.5 h-2.5 text-strong-orange" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="text-xs font-normal text-strong-gray">Just now</p>
        </CardContent>

        <CardHeader className="w-full">
          <article className="flex gap-x-4 w-full items-start">
            {isHasImage && (
              <img
                src={link}
                alt="feedback visual"
                className="w-82.25 h-55.5 object-cover rounded-lg"
              />
            )}
            <CardDescription className="text-base text-strong-gray">
              {desc}
            </CardDescription>
          </article>
        </CardHeader>
      </Card>
    </main>
  );
};

export default OwnFeedBackCardComponent;
