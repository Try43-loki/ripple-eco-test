import SearchBarComponent from "./_component/SearchBarComponent";
import DiscussionButton from "./_component/DiscussionButton";
import HeroSection from "@/components/HeroSection";
import { SearchCheck } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";
import PostComponent from "./_component/PostComponent";
import DiscussionCard from "./_component/DiscussionCard";

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
      <article className="flex flex-col w-full px-4 md:px-13 lg:px-33 md:flex-row lg:flex-row">
        <div className="w-full flex-col">
          <h2 className="text-sm md:text-base lg:text-xl font-bold text-title">
            10,200 Discussions
          </h2>
          <div className="w-full border-b py-2 border-stroke"></div>
          <DiscussionCard image={"tree-planting.png"} />
          <DiscussionCard />
          <DiscussionCard image={"tree-planting.png"} />
          <DiscussionCard />
          <DiscussionCard image={"tree-planting.png"} />
        </div>
        {/* Centered Post Components */}
        <div className="flex justify-center mt-6 ml-7 h-fit">
          <div className="w-[300px] md:w-[350px] lg:w-[400px] p-6 border border-stroke bg-white rounded-[20px]">
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
