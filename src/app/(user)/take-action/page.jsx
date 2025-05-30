// import HeroSection from "@/components/HeroSection";
import SearchBarComponent from "@/components/SearchBarComponent";
import React from "react";
import TakeActionCard from "../../../components/TakeActionCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PopupTakeActionForm from "./_component/PopupTakeActionForm";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import Link from "next/link";
import CreateTakeActionFormComponent from "@/components/CreateTakeActionFormComponent";

const TakeActionPage = () => {
  const heroSectionText = {
    title: "TAKE ACTION",
    description:
      " Share ideas, explore solutions, and connect with others driving environmental change.",
    search: false,
  };
  return (
    <main>
      <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
      />
      <section className="mt-[48px] flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-4 md:px-12 lg:px-32 my-6 w-full">
        {/* Search bar */}
        <SearchBarComponent placeholder={"Search Discussion"} />

        {/* Create Discussion Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-auto  bg-green hover:bg-strong-green text-white hover:text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6"
            >
              Create Take Action
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[567px] p-9 rounded-2xl bg-white border border-light-strok">
            <PopupTakeActionForm />
          </DialogContent>
        </Dialog>
      </section>

      <section className="mt-lg mb-[48px] w-full  lg:px-32  flex flex-wrap md:px-20  md:gap-y-10 gap-[20px] justify-center md:justify-evenly lg:justify-between">
        <Link href="take-action/1">
          <TakeActionCard
            image={"/assets/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </Link>
        <Link href="take-action/1">
          <TakeActionCard
            image={"/assets/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </Link>
        <Link href="take-action/1">
          <TakeActionCard
            image={"/assets/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </Link>
        <Link href="take-action/1">
          <TakeActionCard
            image={"/assets/sub-banner.jpg"}
            title={"Stand Up to Plastic Pollution"}
            description={
              "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution.We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
            }
            support={"11,376"}
          />
        </Link>
        <Link href="take-action/1">
          <TakeActionCard
            image={"/assets/sub-banner.jpg"}
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
