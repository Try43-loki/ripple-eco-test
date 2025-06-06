import React from "react";
import HeroSectionDashboarComponent from "../_component/HeroSectionDashboarComponent";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import TakeActionDetailBodyComponent from "../_component/TakeActionDetailBodyComponent";
import { getAllTakeActionService } from "@/service/takeActionService";
import { viewUserProfileService } from "@/service/profileService";

const TakeActionDetailPage = async ( {params , searchParams}) => {
  const view = searchParams?.view;
  const owner = searchParams?.owner;
  const id = params?.takeActionID;
  const cardData = await getAllTakeActionService();
  const cardDetail = cardData?.data?.find((item) => item.takeActionId === id);
  const userData = await viewUserProfileService(cardDetail?.appUserId);
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
            current={cardDetail?.title}
          />
        </section>

        <TakeActionDetailBodyComponent  userData={userData} cardDetail={cardDetail}/>
      </section>
    </>
  );
};

export default TakeActionDetailPage;
