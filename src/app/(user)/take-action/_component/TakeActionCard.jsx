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

const TakeActionCard = ({ image, title, description, support, layout }) => {
  return (
    <main>
      <Card className="p-0 pb-4 w-full rounded-2xl border border-lightes-white border border-light-strok">
        <CardContent className="px-1.75 py-[5px] h-[155px] relative">
          <Image
            src={`/assets/${image}` || `/${image}`}
            alt="sub-banner"
            width={298}
            height={155}
            className="rounded-t-xl h-40 object-cover"
          />
          <div className="absolute top-4 px-1.5 right-4.5 w-[47px] text-[12px] rounded-[10px] bg-white text-center">
            Action
          </div>
        </CardContent>

        {layout === "col" ? (
          <div>
            <CardHeader className="px-2">
              <CardTitle className={"text-[18px] text-dark-green"}>
                {title}
              </CardTitle>
              <CardDescription className={"line-clamp-3 text-[14px]"}>
                {description}
              </CardDescription>
              <article className="flex gap-x-2 items-center text-green text-[16px]">
                <h1>ACT NOW</h1>
                <Play className="w-[14px] h-[14px] fill-green" />
              </article>
            </CardHeader>

            <CardFooter className="flex flex-col items-start p-2 mt-4">
              <div>
                <p className="text-[18px] font-700 text-green">{support}</p>
                <p className="text-[10px] font-600 text-black">SUPPORTERS</p>
              </div>
            </CardFooter>
          </div>
        ) : (
          <div>
            <CardHeader className="px-2">
              <CardTitle className={"text-[18px]"}>{title}</CardTitle>
              <CardDescription
                className={"line-clamp-3 text-[14px] text-lighter-green"}
              >
                {description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-row items-center p-2 justify-between mt-5">
              <article className="flex gap-x-2 items-center text-green text-[16px]">
                <h1>ACTNOW</h1>
                <Play className="w-[14px] h-[14px] fill-green" />
              </article>
              <div>
                <p className="text-[18px] font-semibold text-green">
                  {support}
                </p>
                <p className="text-[10px] font-medium text-lighter-green">
                  SUPPORTERS
                </p>
              </div>
            </CardFooter>
          </div>
        )}
      </Card>
    </main>
  );
};

export default TakeActionCard;
