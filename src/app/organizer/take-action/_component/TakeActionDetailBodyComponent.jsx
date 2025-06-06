"use client";

import React from "react";
import TakeActionCardDetail from "./TakeActionCardDetail";
import FormTakeActionComponent from "./FormTakeActionComponent";
import TakeActionNoImageCardComponent from "./TakeActionNoImageCardComponent";
import { usePathname, useSearchParams } from "next/navigation";

const TakeActionDetailBodyComponent = ({userData,cardDetail }) => {
  const pathName = usePathname();
  const query = useSearchParams();
  const view = query.get("view");
  const owner = query.get("owner");

  return (
    <>
      <section className="w-full my-6">
        <TakeActionCardDetail 
        userData={userData}
        view={view}
        image={cardDetail?.image}
        description={cardDetail?.description}
        title={cardDetail?.title}
        numberOfSupporter={cardDetail?.numberOfSupporter}
        destination={cardDetail?.destinationPerson}
        createdAt={cardDetail?.createdAt}
         />
      </section>
      <section className="w-full my-6  mt-12">
        {owner == "false" && <FormTakeActionComponent />}
      </section>
      <section className="w-full my-6  mt-12 flex flex-col gap-y-10">
        {owner == "true" && (
          <>
            <TakeActionNoImageCardComponent isView={view} />
            <TakeActionNoImageCardComponent isView={view} />
          </>
        )}
      </section>
    </>
  );
};

export default TakeActionDetailBodyComponent;
