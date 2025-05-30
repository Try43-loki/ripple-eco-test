import React from "react";
import HeroSectionDashboarComponent from "../_component/HeroSectionDashboarComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import TakeActionDetailBodyComponent from "../_component/TakeActionDetailBodyComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";

const TakeActionDetailPage = async ({ searchParams }) => {
  const type = searchParams?.type;
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

        <TakeActionDetailBodyComponent type={type} />
      </section>
    </>
  );
};

export default TakeActionDetailPage;
