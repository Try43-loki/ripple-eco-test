import React from "react";
import CommentSectionComponent from "./_component/CommentSectionComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import CardDiscussionComponent from "@/components/CardDiscussionComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";

const DiscussionPageDetails = async ({ params: ParamsPromise }) => {
  const heroSectionText = {
    title: "DISCUSSION FORUMS",
    description:
      "Share ideas, explore solutions, and connect with others driving environmental change.",
    search: false,
  };
  const img = "/assets/tree-planting.png";

  const breadcrumbSection = {
    back: "Discussion",
    current: "Recycling",
    link: "/discussion-forums",
  };
  const { discussionId } = await ParamsPromise;
  return (
    <main className="w-full h-full flex flex-col ">
      {/* <div>DiscussionPageDetails id : {discussionId}</div> */}

      {/* Hero Section */}
      <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
      />
      {/* Breadcamp */}
      <BreadcrumbComponent
        back={breadcrumbSection.back}
        current={breadcrumbSection.current}
        Link={breadcrumbSection.link}
      />

      {/* Card Discussion */}
      <div className="w-full px-6 md:px-20 lg:px-[150px]">
        <CardDiscussionComponent image={img || ""} />
        <CommentSectionComponent />
      </div>
    </main>
  );
};

export default DiscussionPageDetails;
