
import HeroSectionComponent from "@/components/HeroSectionComponent";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import TakeActionDetailCard from "../_component/TakeActionDetailCard";
import TakeActionFormComponent from "../_component/TakeActionFormComponent";
import TakeActionNoImageCardComponent from "@/app/organizer/take-action/_component/TakeActionNoImageCardComponent";
import { getAllTakeActionService, getTakeActionByIDService } from "@/service/takeActionService";
import { viewUserProfileService } from "@/service/profileService";
const TakeActionDetailPage =  async ( { params , searchParams}) => {
  // const pathName = usePathname();
  // const query = useSearchParams();
  // const view = query.get("view");
  // const owner = query.get("owner");
  const view = await searchParams?.view;
  const owner = await searchParams?.owner;
  const id = await params?.takeActionId;
  const cardDetail = await getTakeActionByIDService(id);
  const userData = await viewUserProfileService(cardDetail?.data?.appUser?.appUserId);
  return (
    <main>
      <HeroSectionComponent
        text={"TAKE ACTION"}
        description={
          "Share ideas, explore solutions, and connect with others driving environmental change."
        }
        showSearchBar={false}
      />

      <div className="w-full my-6 px-6 md:px-5 lg:px-37.5">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center text-sm md:text-base lg:text-lg font-semibold">
            <BreadcrumbItem>
              <BreadcrumbLink href="/take-action">Take Action</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator
              className={"[&>svg]:size-5 md:[&>svg]:size-6 lg:[&>svg]:size-7"}
            ></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-green">
                {cardDetail?.data?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="w-full my-6 px-6 md:px-20 lg:px-37.5">
        <TakeActionDetailCard
          userData={userData}
          cardDetail={cardDetail}
          view={view}
        />
      </section>
      <section className="w-full my-6 px-6 md:px-20 lg:px-37.5 mt-12 mb-24">
        {owner == "false" && <TakeActionFormComponent takeActionId={id}/>}
      </section>
      <section className="w-full flex flex-col gap-5 my-6 px-6 md:px-20 lg:px-37.5">
        {owner == "true" && (
          <>
            <TakeActionNoImageCardComponent isView={view} />
            <TakeActionNoImageCardComponent isView={view} />
          </>
        )}
      </section>
    </main>
  );
};

export default TakeActionDetailPage;
