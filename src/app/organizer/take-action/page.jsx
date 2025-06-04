import React from "react";
import TakeActionBodyComponent from "./_component/TakeActionBodyComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import { getAllTakeActionService, getOwnTakeActionService } from "@/service/takeActionService";

const TakeActionPage = async () => {
  const response = await getAllTakeActionService();
  const cardData = response?.data || [];
  const response2 = await getOwnTakeActionService();
  const ownCardData = response2?.data || [];
  const headerSection = {
    title: "Take Action Now",
    text: "Speak up for nature by contacting your elected officials or pledging to take action. Make a difference for conservation—we can’t do it without you!",
    buttonAction: "create-take_action",
  };
  return (
    <>
      <section className="w-full">
        <DashboardHeaderComponent
          title={headerSection.title}
          text={headerSection.text}
          buttonAction={headerSection.buttonAction}
        />
      </section>
      <section>
        <TakeActionBodyComponent cardData={cardData} ownCardData ={ownCardData }/>
      </section>
    </>
  );
}

export default TakeActionPage;
