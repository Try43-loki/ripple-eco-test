import React from "react";
import OwnFeedBackCardComponent from "./OwnFeedBackCardComponent";
import Link from "next/link";
import { getAllOwnFeedBackService } from "@/service/feedBackService";

const OwnFeedBackComponent = async () => {
  const ownFeedbackData = await getAllOwnFeedBackService();
  return (
    <main>
      <section className="flex flex-col gap-y-5 items-center w-full">
        {feedbackData.map((data) => (
          <Link href={`/eco-event/${data.id}`} key={data.id} className="w-full">
            <div className="w-full">
              <OwnFeedBackCardComponent ownFeedBack={ownFeedbackData} />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default OwnFeedBackComponent;
