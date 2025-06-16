import HeroSectionComponent from "@/components/HeroSectionComponent";
import {
  getAllDiscussionsService,
  getAllPopularDiscussionService,
  getSearchDiscussionService,
  getTotalDiscussionService,
} from "@/service/discussionService";
import DiscussionBodyComponent from "./_component/DiscussionBodyComponent";
import { getUserProfileService } from "@/service/auth/user-service";
import { viewUserProfileService } from "@/service/profileService";

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
  // console.log("this is it", discussions?.data?.map((item) => item.appUser?.appUserId));
  const otherUserId = discussions?.data?.map((item) => item.appUser?.appUserId);
  const userData = await viewUserProfileService(otherUserId);

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
        otherUserId={otherUserId}
        otherUser={userData}
        currentUser={currentUser}
      />
    </main>
  );
};

export default DiscussionPage;
