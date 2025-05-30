import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Download, Send } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const TakeActionDetailCard = ({ view }) => {
  const isLoading = false;

  return (
    <main>
      <Card className="relative py-8 w-full rounded-2xl bg-secondary border-none">
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
                  src="https://i.pinimg.com/736x/e3/cc/19/e3cc196b34603811d13323ee70c31c42.jpg"
                  alt="user"
                  className="h-15 w-15 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-xl font-medium text-gray">KPSxZyXL</p>
                  <p className="text-sm font-normal text-strong-gray">
                    6h agos . Public
                  </p>
                </div>
              </div>
            )}
          </div>

          <CardTitle className="text-2xl lg:text-3xl text-lighter-green">
            Reclaim Empty Spaces for Community Gardens
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
              <p>@MekongRiver</p>
            </div>
          </article>

          <article className="space-y-1">
            <div className="flex items-center gap-x-3 px-2 text-strong-gray text-base">
              <CalendarDays className="w-4.5 h-4.5" />
              <p>16 June, 2025</p>
            </div>
            <div className="flex items-center gap-x-3 px-2 text-strong-gray text-base">
              <Send className="w-4.5 h-4.5" />
              <p>@government</p>
            </div>
          </article>

          <div className="absolute -top-7 right-16 rounded-2xl border-[12px] border-white bg-white">
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQHtEbMVtJpWXQ/feedshare-shrink_800/B56ZYfM_v6GUAo-/0/1744280223718?e=2147483647&v=beta&t=QINX5FJ3qryTBdPm8eqEFXoJx_bFa7PNslMhacdtuaU"
              alt="card"
              className="w-[356px] h-[250px] rounded-2xl"
            />
          </div>
        </CardContent>

        <CardHeader>
          <CardDescription className="text-lg text-strong-gray">
            In our neighborhood in kompongcham province, there are far too many
            empty lots and underused spaces that sit untouched for years —
            becoming nothing more than dumping grounds for trash, overgrown
            weeds, and forgotten corners of the city. These spaces not only look
            unappealing but can also make residents feel unsafe and disconnected
            from their surroundings. But what if we could transform these
            neglected areas into something vibrant, meaningful, and beneficial
            for everyone? I'm proposing a community-driven initiative to turn
            these empty spaces into green community gardens and welcoming
            mini-parks where neighbors can gather, relax, grow fresh produce,
            and connect with nature. These small-scale green spaces have the
            power to do so much: improve air quality, reduce stress, encourage
            physical activity, support local biodiversity, and even help address
            food insecurity in our area. This isn't just about planting flowers
            or setting up benches — it's about building a stronger, healthier,
            and more connected community. Each garden or park could be
            co-designed and maintained by local volunteers, including students,
            families, seniors, and local businesses. We can even partner with
            schools and environmental groups to offer educational programs on
            sustainability, gardening, and urban ecology. But we can't do it
            alone. To bring this vision to life, we need to show local
            government and decision-makers that there is real community support
            behind this idea. That means your voice matters. If you believe in
            transforming wasted space into shared value, please support this
            initiative. The more of us who come together, the harder it will be
            for leaders to ignore the call for change.
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex  items-start gap-5 justify-between">
          <div className="flex flex-col gap-3.5">
            <p className="text-3xl font-bold text-green">16,000</p>
            <p className="text-xl font-semibold text-foreground">SUPPORTERS</p>
          </div>
          <Button
            type="button"
            className="w-[300px] flex gap-x-2.75 bg-green hover:bg-green-600 border-light-gray text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl  py-5 md:py-6.5"
          >
            <Download className="w-6 h-6 text-white" />
            <p className="text-white">Download PDF</p>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default TakeActionDetailCard;
