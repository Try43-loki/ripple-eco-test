import React from "react";
import HeroSectionDashboarComponent from "../_component/HeroSectionDashboarComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import TakeActionDetailBodyComponent from "../_component/TakeActionDetailBodyComponent";
import { getAllTakeActionService, getTakeActionByIDService } from "@/service/takeActionService";
import { viewUserProfileService } from "@/service/profileService";

const TakeActionDetailPage = async ( {params , searchParams}) => {
  const view = searchParams?.view;
  const owner = searchParams?.owner;
  const id = params?.takeActionID;
  const cardDetail = await getTakeActionByIDService(id);
  const userData = await viewUserProfileService(cardDetail?.data?.appUser?.appUserId);
  return (
    <>
      <section className="w-full">
        {/* <HeroSectionDashboarComponent /> */}
        <DashboardHeaderComponent />
        <hr className="mt-5 text-lightes-white " />
        <section className="flex items-center justify-start mt-5">
          <BreadcrumbComponent
            back={"organizer/take-action"}
            Link={"/organizer/take-action"}
            current={cardDetail?.data?.title}
          />
        </section>

        <TakeActionDetailBodyComponent  userData={userData} cardDetail={cardDetail}/>
      </section>
    </>
  );
};

export default TakeActionDetailPage;
