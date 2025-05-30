import Image from "next/image";
import React from "react";

const EventActivityComponent = () => {
  return (
    <section className="w-full bg-white rounded-2xl mt-10">
      <article className="flex flex-col p-5">
        <h2 className="text-dark-green text-lg font-semibold">
          Event Activity
        </h2>
        {/* Profile */}
        <div className="flex py-5 items-center">
          <div className="w-12 h-12 relative">
            <Image
              src="/assets/profileVolunteer.png"
              fill
              className="object-cover"
              alt="Volunteer Profile"
            />
          </div>
          <div className="flex-col px-5 items-center">
            <p className="text-dark-green text-lg font-semibold">
              Norn so chetra
            </p>
            <p className="text-sm text-lighter-green">Just Now</p>
          </div>
        </div>

        {/* Description and image */}
        <div className="">
          <p className="text-lighter-green">
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages.{" "}
          </p>
          <div className="w-full py-5">
            <Image
              src="/assets/backgroundLogin.jpg"
              width={1200}
              height={500}
              className="w-full h-96 object-cover rounded-xl"
              alt="Event Activity"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default EventActivityComponent;
