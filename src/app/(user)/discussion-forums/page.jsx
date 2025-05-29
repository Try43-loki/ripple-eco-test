import PostComponent from "./_component/PostComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import Link from "next/link";
import DiscussionButtonComponent from "../../../components/DiscussionButtonComponent";
import DiscussionCardComponent from "./_component/DiscussionCardComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import CardDiscussionComponent from "@/components/CardDiscussionComponent";
import { MessageCircleQuestion } from "lucide-react";
import { getAllDiscussionsService } from "@/service/discussionService";

const heroSectionText = {
  title: "DISCUSSION FORUMS",
  description:
    "Share ideas, explore solutions, and connect with others driving environmental change.",
  search: false,
};

const buttonText = "Create Discussion";

const DiscussionPage = async () => {
  const discussions = await getAllDiscussionsService();
  return (
    <main className="w-full h-full flex flex-col">
      {/* Hero Section */}
      <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
      />
      <article className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-6 md:px-20 lg:px-[150px] my-6 w-full">
        <SearchBarComponent placeholder="Search Title or Tag" />
        <DiscussionButtonComponent text={buttonText} />
      </article>

      <article className="flex flex-col w-full px-6 md:px-20 lg:px-[150px] md:flex-row lg:flex-row">
        <div className="w-full flex-col">
          <h2 className="text-sm md:text-base lg:text-xl font-bold text-dark-green">
            10,200 Discussions
          </h2>
          <div className="w-full border-b py-2 border-lighter-white"></div>
          <Link href={`/discussion-forums/${1}`}>
            <CardDiscussionComponent
              discussions={discussions}
              image={"/assets/tree-planting.png"}
            />
          </Link>
        </div>
        {/* Centered Post Components */}
        <div className="flex justify-center mt-6 h-fit md:ml-7 lg:ml-7">
          <div className="w-full md:w-[350px] lg:w-[400px] p-6 border border-lighter-white bg-white rounded-[20px]">
            {/* Title + Icon */}
            <div className="flex items-center gap-2 md:gap-3">
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-dark-green">
                Popular Discussion
              </h2>
              <MessageCircleQuestion className="h-4 w-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green" />
            </div>
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
          </div>
        </div>
      </article>
    </main>
  );
};

export default DiscussionPage;
