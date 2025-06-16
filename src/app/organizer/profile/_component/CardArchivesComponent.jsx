import { getEcoEventByIdService } from "@/service/ecoEventService";
import clsx from "clsx";
import dayjs from "dayjs";
import { CircleCheck, Dot, Forward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardArchivesComponent = async ({ cardData, cardId }) => {
  const cardDetail = await getEcoEventByIdService(cardId);
  const getStatusClasseColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-light-orange border-light-orange border-1 text-orange";
      case "Ongoing":
        return "bg-lighter-blue text-blue";
      case "Finished":
        return "bg-verylight-green text-meduim-green";
      default:
        return "bg-light-gray text-dark-gray";
    }
  };
  return (
    <article>
        <div className="flex w-full gap-5 pr-3.5 shadow-xl rounded-xl">
          {/* Left Side */}
          <div className="relative w-75 h-57">
            <Image
              width={250}
              height={250}
              src={
                cardData?.image?.[0]?.includes('temp-file')
                  ? cardData.image[0].replace('temp-file', 'permanent-file')
                  : cardData?.image?.[0]
              }
              alt="Green Oasis going Miyawaki event"
              className="rounded-2xl object-cover h-full w-full "
            />
            <div className="absolute px-4 p-1.5 bg-white text-black text-xs top-1.5 left-4 rounded-xl w-[170px]">
              <p className="line-clamp-1">
                {cardData?.eventType?.eventType} |{" "}
                {cardData?.category?.categoryName}
              </p>
            </div>
          </div>
          {/* Right Side As Col */}
          <div className="flex flex-col w-full">
            {/* Top */}
            <div className="flex w-full flex-col p-2 ">
              <p className="text-sm">
                {dayjs(cardData?.startDateTime).format("DD MMM YYYY")}
              </p>
              <h2 className="text-2xl font-bold">{cardData?.title}</h2>
              <p className="text-sm font-medium text-meduim-gray mt-1">
                {cardData?.provinces?.provinceName}
              </p>
            </div>
            {/* Middle*/}
            <div className="flex justify-between p-2 w-full">
              <p className="line-clamp-3 text-sm w-1/2 ">
                {cardDetail?.data?.description}
              </p>
              <p className="text-sm text-strong-gray self-end">
                {cardData?.participant} going
              </p>
            </div>
            {/* Bottom */}
            <div className="flex flex-row  justify-between gap-x-3.5 p-2 w-full">
              <div className="flex items-center justify-center w-auto">
                <div className="flex items-center justify-center px-3 h-6 bg-light-gray text-red rounded-lg text-xs w-20 ">
                  <Dot size={32} />
                  <span className="text-red font-medium ">Cancel</span>
                </div>
              </div>
              <div className="flex gap-3.5 w-auto">
                <div
                  className={clsx(
                    "flex items-center justify-center gap-x-2 px-6 py-1.5 text-xs rounded-lg",
                    getStatusClasseColor(cardData?.eventStatus)
                  )}
                >
                  <CircleCheck />
                  <span className="text-base font-semibold ">
                    {cardData?.eventStatus}
                  </span>
                </div>
                <Link href={`/eco-event/${cardId}`} className=" flex justify-center text-dark-gray items-center w-[50px] bg-light-gray text-xs font-bold rounded-lg">
                  <Forward />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </article>
  );
};

export default CardArchivesComponent;
