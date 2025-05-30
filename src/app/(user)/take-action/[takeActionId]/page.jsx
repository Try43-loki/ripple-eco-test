"use client";

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
import { usePathname, useSearchParams } from "next/navigation";
import TakeActionNoImageCardComponent from "@/app/organizer/take-action/_component/TakeActionNoImageCardComponent";
const TakeActionDetailPage = () => {
  const pathName = usePathname();
  const query = useSearchParams();
  const view = query.get("view");
  const owner = query.get("owner");

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
              <BreadcrumbLink className="text-primary">
                Green Oasis going Miyawaki
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="w-full my-6 px-6 md:px-20 lg:px-37.5">
        <TakeActionDetailCard view={view} />
      </section>
      <section className="w-full my-6 px-6 md:px-20 lg:px-37.5 mt-12 mb-24">
        {owner == "false" && <TakeActionFormComponent />}
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
