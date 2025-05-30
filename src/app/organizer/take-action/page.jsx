import React from "react";
import HeroSectionDashboarComponent from "./_component/HeroSectionDashboarComponent";
import TakeActionBodyComponent from "./_component/TakeActionBodyComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";

function TakeActionPage() {
  const headerSection = {
    title: "Take Action Now",
    text: "Speak up for nature by contacting your elected officials or pledging to take action. Make a difference for conservation—we can’t do it without you!",
    buttonAction: "create-take_action",
  };
  return (
    <>
      <section>
        <DashboardHeaderComponent
          title={headerSection.title}
          text={headerSection.text}
          buttonAction={headerSection.buttonAction}
        />
      </section>
      <section>
        <TakeActionBodyComponent />
      </section>
    </>
  );
}

export default TakeActionPage;
