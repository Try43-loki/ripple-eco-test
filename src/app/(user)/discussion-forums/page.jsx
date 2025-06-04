import HeroSectionComponent from "@/components/HeroSectionComponent";
import {
  getAllDiscussionsService,
  getAllPopularDiscussionService,
  getTotalDiscussionService,
} from "@/service/discussionService";
import DiscussionBodyComponent from "./_component/DiscussionBodyComponent";

const heroSectionText = {
  title: "DISCUSSION FORUMS",
  description:
    "Share ideas, explore solutions, and connect with others driving environmental change.",
  search: false,
};

const DiscussionPage = async () => {
  // Service
  const [discussions, popularDiscussion, totalDiscussion] = await Promise.all([
    getAllDiscussionsService(),
    getAllPopularDiscussionService(),
    getTotalDiscussionService(),
  ]);

  return (
    <main className="w-full h-full flex flex-col">
      {/* Hero Section */}
      <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
      />
      <DiscussionBodyComponent
        discussionData={discussions?.data}
        totalDiscussion={totalDiscussion?.data?.total}
        popularDiscussion={popularDiscussion?.data}
      />
    </main>
  );
};

export default DiscussionPage;
