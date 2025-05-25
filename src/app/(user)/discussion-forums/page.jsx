import PostComponent from "./_component/PostComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import Link from "next/link";
import DiscussionButtonComponent from "./_component/DiscussionButtonComponent";
import DiscussionCardComponent from "./_component/DiscussionCardComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import CardDiscussionComponent from "@/components/CardDiscussionComponent";

const heroSectionText = {
  title: "DISCUSSION FORUMS",
  description:
    "Share ideas, explore solutions, and connect with others driving environmental change.",
  search: false,
};

const buttonText = "Create Discussion";

const DiscussionPage = () => {
  return (
    <main className="w-full h-full flex flex-col">
      {/* Hero Section */}
      <HeroSectionComponent
        text={heroSectionText.title}
        description={heroSectionText.description}
        showSearchBar={heroSectionText.search}
      />
      {/* Search */}
      <article className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center px-6 md:px-20 lg:px-[150px] my-6 w-full">
        {/* Search bar */}
        <SearchBarComponent placeholder={"Search Title or Tag"} />

        {/* Create Discussion Button */}
        <DiscussionButtonComponent text={buttonText} />
      </article>
      <article className="flex flex-col w-full px-6 md:px-20 lg:px-[150px] md:flex-row lg:flex-row">
        <div className="w-full flex-col">
          <h2 className="text-sm md:text-base lg:text-xl font-bold text-title">
            10,200 Discussions
          </h2>
          <div className="w-full border-b py-2 border-stroke"></div>
          <Link href={`/discussion-forums/${1}`}>
            <CardDiscussionComponent image={"/assets/tree-planting.png"} />
          </Link>
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
