import React from "react";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import PostComponent from "@/app/(user)/discussion-forums/_component/PostComponent";
import DiscussionTabComponent from "./_component/DiscussionTabComponent";
import { MessageCircleQuestion } from "lucide-react";
import {
  getAllDiscussionsService,
  getAllPopularDiscussionService,
  getTotalDiscussionService,
} from "@/service/discussionService";
import { getUserProfileService } from "@/service/auth/user-service";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import DiscussionBodyComponent from "@/app/(user)/discussion-forums/_component/DiscussionBodyComponent";

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

  const limitPopularDiscussion = popularDiscussion?.data?.slice(0, 10) || [];
  return (
    <main className="w-full h-full flex flex-col">
      {/* Hero Section */}
      <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
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
