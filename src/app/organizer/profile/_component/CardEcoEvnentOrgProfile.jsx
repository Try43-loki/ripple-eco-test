import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CircleCheck, Dot, Forward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardEcoEvnentOrgProfile = () => {
  return (
    <>
      <Link href="" className="w-full ">
        <Card className="flex flex-row items-center gap-x-2 w-full p-0 border-none">
          <CardHeader className="relative w-75 h-75 p-0">
            <img
              src="/assets/eventImage.png"
              alt="Green Oasis going Miyawaki event"
              className="rounded-2xl w-full h-full object-cover"
            />
            <div className="absolute px-4 p-1.5 bg-white text-black text-xs top-1.5 left-3 rounded-xl">
              <p>Semina | Tree Planting</p>
            </div>
          </CardHeader>
            <CardContent className="w-70">
              <p className="text=sm">Mon, 12 May</p>
              <h2 className="text-xl">Green Oasis Going Miyakawi</h2>
              <p className="text-sm font-bold text-meduim-gray mt-1">
                Phnom Penh, Cambodia
              </p>
              <p className="line-clamp-3 text-sm mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="flex items-center gap-x-0.5 px-1 py-1 bg-light-gray text-strong-gray rounded-lg text-xs w-25 mt-2.5">
                <Dot className=" text-strong-gray" />
                Cancel
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-end gap-y-1">
              <p className="text-sm text-strong-gray">100 going</p>
              <div className="flex flex-row items-center gap-x-3.5">
                <div className="flex items-center justify-center gap-x-2 px-6.5 py-1.5 bg-light-gray text-strong-gray text-xs font-bold rounded-lg">
                  <CircleCheck className="w-4.75 h-4.75" />
                  Going
                </div>
                <div className=" px-2.5 py-1.5 bg-light-gray text-strong-gray text-xs font-bold rounded-lg">
                  <Forward className="w-4.75 h-4.75" />
                </div>
              </div>
            </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default CardEcoEvnentOrgProfile;
