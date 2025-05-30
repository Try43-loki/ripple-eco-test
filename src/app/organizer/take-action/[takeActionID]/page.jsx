import React from "react";
import HeroSectionDashboarComponent from "../_component/HeroSectionDashboarComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import TakeActionDetailBodyComponent from "../_component/TakeActionDetailBodyComponent";

const TakeActionDetailPage = () => {
  return (
    <>
      <section className="w-full">
        {/* <HeroSectionDashboarComponent /> */}
        <DashboardHeaderComponent />
        <hr className="mt-5 text-lightes-white " />
        <section className="flex items-center justify-start mt-5">
          <BreadcrumbComponent
            back={"Take Action"}
            Link={"/organizer/take-action"}
            current={"Green Oasis going Miyawaki"}
          />
        </section>

        <TakeActionDetailBodyComponent />
      </section>
    </>
  );
};

export default TakeActionDetailPage;
