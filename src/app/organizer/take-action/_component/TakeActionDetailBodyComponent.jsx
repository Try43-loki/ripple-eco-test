
import React from "react";
import TakeActionCardDetail from "./TakeActionCardDetail";
import FormTakeActionComponent from "./FormTakeActionComponent";
import TakeActionNoImageCardComponent from "./TakeActionNoImageCardComponent";


const TakeActionDetailBodyComponent = ({type}) => {
  return (
    <>

      <section className="w-full my-6">
        <TakeActionCardDetail />
      </section>
      { type !== 'view' ? (
        <section className="w-full my-6  mt-12">
        <FormTakeActionComponent />
      </section>
      ):(
        <section className="w-full my-6  mt-12 flex flex-col gap-y-10">
        <TakeActionNoImageCardComponent isLoading={true}/>
        <TakeActionNoImageCardComponent isLoading={false}/>
      </section>
      )}
      
    </>
  );
};

export default TakeActionDetailBodyComponent
