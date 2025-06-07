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
  const answer = cardDetail?.data?.answers;
  return (
    <>
      <section className="w-full my-6">
        <TakeActionCardDetail 
        userData={userData}
        view={view}
        image={cardDetail?.data?.image}
        description={cardDetail?.data?.description}
        title={cardDetail?.data?.title}
        numberOfSupporter={cardDetail?.data?.numberOfSupporter}
        destination={cardDetail?.data?.destinationPerson}
        createdAt={cardDetail?.data?.createdAt}
         />
      </section>
      <section className="w-full my-6  mt-12">
        {owner == "false" && <FormTakeActionComponent />}
      </section>
      <section className="w-full my-6  mt-12 flex flex-col gap-y-10">
        {owner == "true" && (
          <>
            <TakeActionNoImageCardComponent isView={view} answerData={answer}/>
            <TakeActionNoImageCardComponent isView={view} answerData={answer}/>
          </>
        )}
      </section>
    </>
  );
};

export default TakeActionDetailBodyComponent;
