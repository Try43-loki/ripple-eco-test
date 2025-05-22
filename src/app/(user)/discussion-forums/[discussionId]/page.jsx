import HeroSection from "@/components/HeroSection";
import React from "react";
import { ChevronRight } from "lucide-react";
import DiscussionCard from "../_component/DiscussionCardComponent";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CommentSectionComponent from "./_component/CommentSectionComponent";

const DiscussionPageDetails = async ({ params: ParamsPromise }) => {
  const heroSectionText = {
    title: "DISCUSSION FORUMS",
    description:
      "Share ideas, explore solutions, and connect with others driving environmental change.",
  };
  const img = "/sub-banner.jpg";
  const { discussionId } = await ParamsPromise;
  return (
    <main className="w-full h-full flex flex-col ">
      {/* <div>DiscussionPageDetails id : {discussionId}</div> */}

      {/* Hero Section */}
      <HeroSection
        text={heroSectionText.title}
        description={heroSectionText.description}
      />
      {/* Breadcamp */}
      <div className="w-full my-6 px-6 md:px-20 lg:px-[150px]">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center text-sm md:text-base lg:text-lg font-semibold">
            <BreadcrumbItem>
              <BreadcrumbLink href="/discussion-forums">
                Discussion
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator
              className={"[&>svg]:size-5 md:[&>svg]:size-6 lg:[&>svg]:size-7"}
            ></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-primary">
                Recycling
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Card Discussion */}
      <div className="w-full px-6 md:px-20 lg:px-[150px]">
        <DiscussionCard image={img || ""} />
        <CommentSectionComponent />
      </div>
    </main>
  );
};

export default DiscussionPageDetails;
