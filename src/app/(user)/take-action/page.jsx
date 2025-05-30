"use client";

import React, { useState } from "react";
import SearchBarComponent from "@/components/SearchBarComponent";
import TakeActionCard from "./_component/TakeActionCard";
import { Button } from "@/components/ui/button";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import Link from "next/link";
import CreateTakeActionFormComponent from "@/components/CreateTakeActionFormComponent";

const TakeActionPage = () => {
  const [openForm, setOpenForm] = useState(false); // ✅ Control the form dialog

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
        <SearchBarComponent placeholder="Search Discussion" />

        {/* Create Discussion Button */}
        <Button
          onClick={() => setOpenForm(true)}
          variant="outline"
          className="w-auto bg-green hover:bg-strong-green text-white hover:text-white text-xs md:text-sm lg:text-base rounded-lg md:rounded-2xl px-4 py-5 md:py-6"
        >
          Create Take Action
        </Button>
      </section>

      {/* 🧠 Create Take Action Modal */}
      <CreateTakeActionFormComponent
        open={openForm}
        onOpenChange={setOpenForm}
      />

      <section className="mt-[48px] mb-[48px] flex flex-row flex-wrap px-4 md:px-12 lg:px-32 my-6 md:gap-y-10 gap-[10px] justify-center md:justify-evenly lg:justify-evenly">
        {/* Example Take Action Cards */}
        {[...Array(5)].map((_, i) => (
          <Link href="take-action/1" key={i}>
            <TakeActionCard
              image={"/assets/sub-banner.jpg"}
              title={"Stand Up to Plastic Pollution"}
              description={
                "We need you to add your voice. Sign the pledge today and stand with The Nature Conservancy as we call on world leaders to come together and Stand Up to Plastic Pollution."
              }
              support={"11,376"}
            />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default TakeActionPage;
