import React from "react";
import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import DashboardHeaderComponent from "@/components/DashboardHeaderComponent";
import TakeActionDetailBodyComponent from "../_component/TakeActionDetailBodyComponent";
import { getTakeActionByIDService } from "@/service/takeActionService";
import { getCurrentUserProfileService, viewUserProfileService } from "@/service/profileService";

const TakeActionDetailPage = async ( { params , searchParams}) => {
  const view = await searchParams?.view;
  const owner = await searchParams?.owner;
  const id = await params?.takeActionID;
  const cardDetail = await getTakeActionByIDService(id);
  const otherUser = await viewUserProfileService(cardDetail?.data?.appUser?.appUserId);
  const currentUser = await getCurrentUserProfileService();
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

        <TakeActionDetailBodyComponent  otherUser={otherUser} cardDetail={cardDetail} takeActionID={id} currentUser={currentUser}/>
      </section>
    </>
  );
};

export default TakeActionDetailPage;
