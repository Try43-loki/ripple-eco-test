import React from "react";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import PostComponent from "@/app/(user)/discussion-forums/_component/PostComponent";
import DiscussionTabComponent from "./_component/DiscussionTabComponent";
import { MessageCircleQuestion } from "lucide-react";

function DiscussioForumsPage() {
  const headerSection = {
    title: "Share your perspective",
    text: "Join the RippleEco community discussion to share insights, spark action, and protect our planet—together, in real time",
    buttonAction: "create-discussion",
  };
  return (
    <main className="w-full">
      <section className="flex flex-col">
        <DashboardHeaderComponent
          title={headerSection.title}
          text={headerSection.text}
          buttonAction={headerSection.buttonAction}
        />
        <div className="flex justify-between py-5">
          <DiscussionTabComponent />
          <div className="flex-col w-1/3 pl-5">
            <SearchBarComponent />
            <div className="py-3 px-5 w-full border rounded-2xl border-lightes-white mt-5">
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
        </div>
      </section>
    </main>
  );
}

export default DiscussioForumsPage;
