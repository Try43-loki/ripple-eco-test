import Image from "next/image";
import React from "react";

const BadgeComponent = ({ badge, totalBadges }) => {
  return (
    <>
      <section className="text-right w-full">
        <h1 className="text-2xl font-bold">Total Badge: {totalBadges?.data?.total}</h1>
        <section className="w-full flex flex-wrap gap-5 mt-4 text-center">
          {badge?.map((data, index) => (
            <div className="flex flex-col items-center gap-y-1" key={index}>
              <Image
                src={data?.badge?.image}
                alt="badge"
                width={160}
                height={50}
              />
              <h2>{data?.badge?.title}</h2>
              <p>Point: {data?.badge?.point}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default BadgeComponent;
