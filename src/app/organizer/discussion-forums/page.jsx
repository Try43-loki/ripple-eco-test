import React from "react";

import {
  getAllDiscussionsService,
  getAllPopularDiscussionService,
  getSearchDiscussionService,
  getTotalDiscussionService,
} from "@/service/discussionService";
import { getUserProfileService } from "@/service/auth/user-service";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import DiscussionBodyComponent from "@/app/(user)/discussion-forums/_component/DiscussionBodyComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import { getUserProfileAction } from "@/action/user-action";

const heroSectionText = {
  title: "DISCUSSION FORUMS",
  description:
    "Share ideas, explore solutions, and connect with others driving environmental change.",
  search: false,
};
const DiscussioForumsPage = async ({ searchParams: searchParamsPromise }) => {
  // Service
  const [discussions, popularDiscussion, totalDiscussion, currentUser] =
    await Promise.all([
      getAllDiscussionsService(),
      getAllPopularDiscussionService(),
      getTotalDiscussionService(),
      getUserProfileService(),
    ]);

  const currentUserId = currentUser?.data?.appUserId;

  // Search Card Query
  const searchParams = (await searchParamsPromise) || null;
  const searchQuery = searchParams?.search || "";
  let cardData = [];
  let displayData = 0;
  if (searchQuery !== "") {
    const searchData = await getSearchDiscussionService(searchQuery);
    cardData = searchData?.data ?? [];
    displayData = cardData?.length;
  } else {
    cardData = discussions?.data ?? [];
    displayData = totalDiscussion?.data?.total;
  }
  const headerSection = {
    title: "Discussion Forums",
    text: "Speak up for nature by contacting your elected officials or pledging to take action. Make a difference for conservation—we can’t do it without you!",
    link: "Create Discussion",
  };
  const profile = await getUserProfileAction();

  const limitPopularDiscussion = popularDiscussion?.data?.slice(0, 10) || [];
  return (
    <main className="w-full h-full flex flex-col">
      {/* Hero Section */}
      {/* <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
      /> */}
      <DashboardHeaderComponent
        title={headerSection.title}
        text={headerSection.text}
        link={headerSection.link}
        profile={profile}
        buttonAction="create-event"
      />
      <DiscussionBodyComponent
        totalDiscussion={displayData}
        popularDiscussion={limitPopularDiscussion}
        search={cardData}
        currentUserId={currentUserId}
      />
    </main>
  );
};

export default DiscussioForumsPage;
