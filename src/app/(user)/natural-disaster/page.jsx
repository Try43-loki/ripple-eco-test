import React from "react";
import HeroSectionNaturalDisasterComponent from "./_components/HeroSectionNaturalDisasterComponent";
import { clsx } from "clsx";

const NaturalDisasterPage = () => {
  return (
    <div className="relative">
      {/* Full-page background */}
      <div
        className={clsx(
          "absolute bottom-0 -z-1 left-0 right-0 top-0",
          `bg-[radial-gradient(circle_1500px_at_100%_200px,#CDE8DB,transparent)]`
        )}
      ></div>

      {/* Hero Section */}
      <section className="relative flex w-full h-[200px] md:h-[300px] lg:h-[400px] justify-center items-center">
        <HeroSectionNaturalDisasterComponent />
      </section>
    </div>
  );
};

export default NaturalDisasterPage;
