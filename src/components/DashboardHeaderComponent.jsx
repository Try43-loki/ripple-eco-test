import Link from "next/link";
import React from "react";

const DashboardHeaderComponent = ({ title, text, link }) => {
  return (
    <>
      <section>
        <article className="text flex flex-col gap-y-3 relative p-4 rounded-3xl bg-gradient-to-tr   from-[#dfc7ac66] to-[#d7e4d7d9]">
          <h1 className="text-xl text-dark-green font-semibold opacity-90">
            {title || "Welcome back, Earth Hero!"} 🌿🌍
          </h1>
          <p className=" text-light-green w-xl">
            {text ||
              `The Earth is lucky to have you. Let’s keep making choices that lead to a brighter, cleaner future.`}
          </p>
          <Link
            href="/organizer/create-event"
            className="text-white flex justify-center items-center rounded-2xl hover:bg-green text-label  py-2 bg-green px-4 font-light w-fit "
          >
            {link || "Create Eco-Event"}
          </Link>
        </article>
      </section>
    </>
  );
};

export default DashboardHeaderComponent;
