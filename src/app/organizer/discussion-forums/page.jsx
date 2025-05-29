import React from "react";
import HeaderComponent from "../_component/HeaderComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import SearchBarComponent from "@/components/SearchBarComponent";
import PostComponent from "@/app/(user)/discussion-forums/_component/PostComponent";
import DiscussionTabComponent from "./_component/DiscussionTabComponent";

function DiscussioForumsPage() {
  const headerSection = {
    title: "Share your perspective",
    text: "Join the RippleEco community discussion to share insights, spark action, and protect our planet—together, in real time",
    link: "Start the Discussion",
  };
  return (
    <main className="w-full">
      <section className="flex flex-col">
        <DashboardHeaderComponent
          title={headerSection.title}
          text={headerSection.text}
          link={headerSection.link}
        />
        <div className="flex justify-between py-5">
          <DiscussionTabComponent />
          <div className="flex-col w-1/3 pl-5">
            <SearchBarComponent />
            <div className="py-3 px-5 w-full border rounded-2xl border-lightes-white mt-5">
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
