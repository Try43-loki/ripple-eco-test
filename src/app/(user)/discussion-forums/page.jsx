import SearchBarComponent from "./_component/SearchBarComponent";
import DiscussionButton from "./_component/DiscussionButton";
import HeroSection from "@/components/HeroSection";
import { SearchCheck } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";
import PostComponent from "./_component/PostComponent";

const DiscussionPage = () => {
  return (
    <main className="w-full h-full flex flex-col">
      {/* Hero Section */}
      <HeroSection />
      {/* Search */}
      <article className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-4 md:px-12 lg:px-32 my-6 w-full">
        {/* Search bar */}
        <SearchBarComponent placeholder={"Search Title or Tag"} />

        {/* Create Discussion Button */}
        <DiscussionButton text={"Create Discussion"} icon={<SearchCheck />} />
      </article>
      <article className="flex px-4 md:px-13 lg:px-33">
        <div className="w-full flex-col">
          <h2 className="text-sm md:text-base lg:text-xl font-bold text-title">
            10,200 Discussions
          </h2>
          <div className="w-full border-b py-2 border-stroke"></div>
        </div>
        <div className="w-full ml-5 border border-stroke bg-white rounded-[20px]">
          <div className="flex flex-col p-6">
            <div className="flex items-center gap-2 lg:gap-3">
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-title">
                Popular Discussion
              </h2>
              <MessageCircleQuestion className="h-4 w-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
            </div>
            <p className="text-xs md:text-sm lg:text-base text-description mt-1">
              10 Discussion found
            </p>
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
