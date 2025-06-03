import React from "react";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import CardDiscussionComponent from "@/components/CardDiscussionComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { getDiscussionByIdService } from "@/service/discussionService";
import CommentComponent from "./_component/CommentComponent";

const DiscussionPageDetails = async ({ params }) => {
  // service
  const { discussionId } = await params;
  const discussionData = await getDiscussionByIdService(discussionId);

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
  return (
    <main className="w-full h-full flex flex-col ">
      {/* Hero Section */}
      <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
      />
      {/* Breadcamp */}
      <div className="w-full my-6 px-6 md:px-20 lg:px-[150px]">
        <BreadcrumbComponent
          back={breadcrumbSection.back}
          current={breadcrumbSection.current}
          Link={breadcrumbSection.link}
        />
      </div>

      {/* Card Discussion */}
      <div className="w-full px-6 md:px-20 lg:px-[150px]">
        <CardDiscussionComponent discussions={discussionData?.data} />
        <CommentComponent discussions={discussionData} />
      </div>
    </main>
  );
};

export default DiscussionPageDetails;
