import { Button } from "@/components/ui/button";
import { color } from "motion";
import Image from "next/image";
import React from "react";

const DiscussionPage = () => {
  return (
    <main className="w-full h-full flex flex-col">
      <section className="relative flex w-full h-[200px] justify-center items-center md:h-[300px] lg:h-[400px]">
        <Image
          src="/sub-banner.jpg"
          alt="sub-banner"
          fill
          className="object-cover"
        ></Image>
        <div className="absolute flex flex-col items-center text-white">
          <h2 className="font-bold text-lg md:text-2xl lg:text-3xl">
            DISCUSSION
          </h2>
          <p className="text-sm md:text-base lg:text-xl">
            Share ideas, explore solutions, and connect with other driving
            environmental change.
          </p>
        </div>
      </section>
      <article className="flex my-6 justify-center">
        <p className="py-2">search</p>
        <Button className={`bg-[#048D4C] py-7 rounded-[14px] text-[14px]`}>
          Create Discussion
        </Button>
      </article>
    </main>
  );
};

export default DiscussionPage;
