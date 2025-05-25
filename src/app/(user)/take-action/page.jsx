
import SearchBarComponent from "@/components/SearchBarComponent";
import React from "react";
import TakeActionCard from "./_component/TakeActionCard";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"  
import { Button } from "@/components/ui/button";
import PopupTakeActionForm from "./_component/PopupTakeActionForm";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import Link from "next/link";

const TakeActionPage = () => {
  
  return (
    <main>
      <HeroSectionComponent text={"TAKE ACTION"} description={"Share ideas, explore solutions, and connect with others driving environmental change."} showSearchBar={false} />
      <section className="mt-[48px] flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-4 md:px-12 lg:px-32 my-6 w-full">
        {/* Search bar */}
        <SearchBarComponent placeholder={"Search Discussion"} />

        {/* Create Discussion Button */}
        <Dialog>
          <DialogTrigger asChild >
            <Button
              variant="outline"
              className="w-auto mt-5 bg-primary hover:bg-[#1da761] text-white hover:text-white  text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6.5"
            >
              Create Take Action
           </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[567px] p-[35px] rounded-[20px]">
            <PopupTakeActionForm/>
          </DialogContent>
        </Dialog>
      </section>

      <section className="mt-[48px] mb-[48px] flex flex-row flex-wrap md:px-20 px-[150px] md:gap-y-10 gap-[20px] justify-center md:justify-evenly lg:justify-evenly">
        <Link href='/take-action/1'>
          <TakeActionCard
            image={"/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </Link>
        
        <Link href='/take-action/2'>
          <TakeActionCard
            image={"/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </Link>

        <Link href='/take-action/3'>
          <TakeActionCard
            image={"/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </Link>

        <Link href='/take-action/4'>
          <TakeActionCard
            image={"/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </Link>
      </section>
      
    </main>
  );
};

export default TakeActionPage;
