"use client";

import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogClose,
} from "@/components/ui/linearCardComponent";
import { useTimeFormat } from "@/hooks/dayjs";

export default function ActivityDisplayComponent({ data, userData }) {
  const formatTime = useTimeFormat();
  return (
    <section className="mt-10 w-full bg-white p-6 rounded-3xl">
      <h3 className="text-lg font-semibold text-dark-green mb-4">
        Event Activity
      </h3>

      <div className="space-y-8">
        {/* Header Info */}
        <div className="flex items-center mb-4">
          <div className="w-14 h-14 relative">
            <Image
              src={userData?.profileImageUrl}
              alt="owner"
              className="rounded-full object-cover"
              fill
            />
          </div>
          <div className="ml-3">
            <p className="text-lg font-medium text-dark-green">
              {userData?.firstName} {userData?.lastName}
            </p>
            <p className="text-sm text-lighter-green">
              {formatTime(data?.createdAt)}
            </p>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-dark-green text-lg mb-4">
          <h2>{data?.title}</h2>
        </div>
        <div className="flex flex-wrap w-full gap-12.5 justify-start">
          {data?.summaryList.map((item, index) => (
            <div
              key={item?.postId || index}
              className="w-full sm:w-[48%] md:w-[31%]"
            >
              <Dialog>
                <DialogTrigger className="cursor-pointer">
                  <Image
                    src={item?.imageUrl}
                    alt={`Activity ${index + 1}`}
                    width={768}
                    height={400}
                    className="rounded-xl w-full h-[300px] object-cover border border-lightes-white"
                  />
                </DialogTrigger>

                <DialogContainer>
                  <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <DialogContent className="bg-white p-6 rounded-xl w-[40vw] max-w-2xl relative border border-lightes-white">
                      <DialogClose className="cursor-pointer text-white p-2 border-none" />

                      <DialogImage
                        src={item.imageUrl}
                        alt={`Activity ${index + 1}`}
                        className="rounded-xl w-full mb-2"
                      />

                      <DialogDescription className="text-base text-lighter-green">
                        {item?.description}
                      </DialogDescription>
                    </DialogContent>
                  </div>
                </DialogContainer>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
