import CommentSectionComponent from "@/app/(user)/discussion-forums/[discussionId]/_component/CommentSectionComponent";
import DiscussionCardComponent from "@/app/(user)/discussion-forums/_component/DiscussionCardComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import { getAllDiscussionsService } from "@/service/discussionService";
import React from "react";

const DiscussioForumsDetailPage = async ({ params: ParamsPromise }) => {
  const discussions = await getAllDiscussionsService();
  const { discussionid } = await ParamsPromise;

  // Hero Section param data
  const heroSectionText = {
    title: "ECO EVENT",
    description:
      "Join our EcoEvent to share ideas, connect, and act for a healthier planet.",
    search: false,
  };
  // Breadcrumb Section param data
  const breadcrumbSection = {
    back: "Discussion",
    current: "Recycling",
    link: "/organizer/discussion-forums",
  };
  return (
    <main className="w-full">
      <article className="flex flex-col">
        {/* Breadcrumb Section */}
        <div className="py-5">
          <BreadcrumbComponent
            back={breadcrumbSection.back}
            current={breadcrumbSection.current}
            Link={breadcrumbSection.link}
          />
        </div>
        {/* Card Discussion Section */}
        <DiscussionCardComponent fullWidth />

        {/* Comment Section */}
        <CommentSectionComponent discussions={discussions} />
      </article>
    </main>
  );
};

export default DiscussioForumsDetailPage;
