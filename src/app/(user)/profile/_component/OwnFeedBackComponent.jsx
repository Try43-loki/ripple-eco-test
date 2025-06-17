import React from "react";
import OwnFeedBackCardComponent from "./OwnFeedBackCardComponent";
import Link from "next/link";
import { getAllFeedBackByUserIDService, getAllOwnFeedBackService } from "@/service/feedBackService";

const OwnFeedBackComponent = async ({userId}) => {
  let ownFeedbackData = [];await getAllOwnFeedBackService();
  if(userId){
    ownFeedbackData = await getAllFeedBackByUserIDService(userId);
  } else {
    ownFeedbackData = await getAllOwnFeedBackService();
  }
  return (
    <main>
      <section className="flex flex-col gap-y-5 items-center w-full">
        
          <Link href={`/eco-event/`} className="w-full">
            <div className="w-full">
              <OwnFeedBackCardComponent ownFeedBack={ownFeedbackData} />
            </div>
          </Link>
      </section>
    </main>
  );
};

export default OwnFeedBackComponent;
