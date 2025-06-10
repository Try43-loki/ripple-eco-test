import HeroSectionComponent from "@/components/HeroSectionComponent";
import {
  getAllDiscussionsService,
  getAllPopularDiscussionService,
  getSearchDiscussionService,
  getTotalDiscussionService,
} from "@/service/discussionService";
import DiscussionBodyComponent from "./_component/DiscussionBodyComponent";
import { getUserProfileService } from "@/service/auth/user-service";

const heroSectionText = {
  title: "DISCUSSION FORUMS",
  description:
    "Share ideas, explore solutions, and connect with others driving environmental change.",
  search: false,
};

const DiscussionPage = async ({ searchParams: searchParamsPromise }) => {
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

export default DiscussionPage;
