import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const BreadcrumbComponent = ({ back, current, Link }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center text-sm md:text-base lg:text-lg font-semibold">
        <BreadcrumbItem>
          <BreadcrumbLink href={Link} className="text-dark-green">
            {back}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator
          className={"[&>svg]:size-5 md:[&>svg]:size-6 lg:[&>svg]:size-7"}
        ></BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-green">{current}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
