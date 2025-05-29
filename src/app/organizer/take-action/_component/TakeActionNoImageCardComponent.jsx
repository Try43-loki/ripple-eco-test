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

const TakeActionNoImageCardComponent = ({ isLoading }) => {
  return (
    <main>
      <Card className="relative py-5 w-full rounded-2xl bg-light-gray border-none">
        <CardContent className="flex flex-col items-start gap-y-4">
          <div>
            {isLoading ? (
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
        </CardContent>

        <CardHeader>
          <CardDescription className="text-lg text-strong-gray px-6">
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
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
};

export default TakeActionNoImageCardComponent;
